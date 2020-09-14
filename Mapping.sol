pragma solidity ^0.6.8;

contract Mappings
{
    mapping(address=>uint) users;
    address[] userAddresses;
    
    function addUser() public
    {
        users[msg.sender] = 90;
        userAddresses.push(msg.sender);
    }
    
    function access() public view returns(uint)
    {
        return users[msg.sender];
    }
}
