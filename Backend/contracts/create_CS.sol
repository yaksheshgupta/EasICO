// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "./Crowdsale.sol";
contract createCS{
    ERC20 tkn;
    uint totalid;
    struct CS{
        address creater; 
        address wallet;
        address csAdd;
        uint rate;
    }

    mapping (uint=>CS) public allcs;

    function createCs(uint _rate,ERC20 _tkn,address _wallet) public returns(uint){
        uint id=totalid++; 
        CS storage yes=allcs[id];
        yes.creater=msg.sender;
        yes.csAdd=address(new Crowdsale(_rate,_wallet,_tkn));
        yes.rate=_rate;
        return id;
    }
    function seeUrCs(uint _id) public view returns(CS memory){
        require(allcs[_id].creater==msg.sender,"not creater");
        return allcs[_id];
    }
}