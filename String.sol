pragma solidity ^0.6.8;

contract String 
{
    string welcomeWords = 'You\'re "good"\nHow are you\\hey';

    function getsV() public view returns (string memory) 
    {
        return welcomeWords;
    }

    function setV(string memory _s) public 
    {
        welcomeWords = _s;
    }

    function getLen() public view returns (uint256) 
    {
        bytes memory sb = bytes(welcomeWords);
        return sb.length;
    }
}
