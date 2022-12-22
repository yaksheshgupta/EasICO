const {assert} = require("chai");
const MyToken = artifacts.require("MyToken");
const myCrowds = artifacts.require("Crowdsale");
contract("testing contract",(accounts)=>{
    let token,crowd;
    before(async ()=>{
        token =await MyToken.deployed()
        crowd= await myCrowds.deployed()
    });
    it("check if transfer to crowdsale is success or not",async ()=>{
        const totalSupply= await token.totalSupply();
        await token.transfer(crowd.address,totalSupply.toString());
        assert.equal(await token.balanceOf(accounts[0]),0,"token transafered");
        let aa=await token.balanceOf(crowd.address)
        console.log(aa.toString());
    })
    it("buying tokens from crowdsale of 0.1eth",async()=>{
        const transaction=await crowd.sendTransaction({from:accounts[1],value:100000000000000000});
        assert.equal((await token.balanceOf(crowd.address)).toString(),'99900000000000000000',"token bought successfully")
    })
})
