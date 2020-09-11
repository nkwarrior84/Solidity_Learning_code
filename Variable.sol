pragma solidity ^0.6.8;

contract Variable 
{
    string private Name = "Hi";

    function getInt() public view returns (string memory) 
    {
        return Name;
    }
}
