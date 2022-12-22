const ERC20_dep = artifacts.require("MyToken");
const Crowdsale = artifacts.require("Crowdsale");
const owner="0xc50514A238a8B0b3098f8d4A1a6f77B2d00CE7cD";
module.exports = function (deployer) {
  deployer.deploy(ERC20_dep,"Yakshesh","YAKSH",100,owner).then(()=>{
    return deployer.deploy(Crowdsale,1,owner,ERC20_dep.address)
  })
};
