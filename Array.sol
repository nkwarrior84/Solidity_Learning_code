pragma solidity ^0.6.8;

contract Arrays 
{

    uint256[] arr;

    string[2][] public fullname;

    string[][3] public sorted;

    string[] colors = ["red", "green", "blue"];

    address[] userAddr;

    function fillArray() public 
    {
        fullname.push(["First", "Last"]);
        fullname.push(["First", "Last"]);
        fullname.push(["First", "Last"]);
        fullname.push(["First", "Last"]);
        fullname.push(["First", "Last"]);
        colors.push("RED");
    }

    function fillArray2() public 
    {
        sorted[0] = ["Abhi", "Ali", "Annu", "Aladin"];
        sorted[1] = ["Bobby", "Blessing"];
        sorted[2] = ["Camel", "Christian"];
    }

    function getBlessing() public view returns (string memory) 
    {
        string memory blessing = sorted[1][1];
        return blessing;
    }

    function getNavneet() public view returns (string memory) 
    {
        string memory Navneet = sorted[0][2];
        return Navneet;
    }

    function memArr() public pure 
    {
        string[] memory x = new string[](7);
    }

    function getLength() public view returns (uint256) 
    {
        return fullname.length;
    }

    function addAdress() public 
    {
        userAddr.push(msg.sender);
    }

    function getAddresses() public view returns (address[] memory) 
    {
        return userAddr;
    }
}
