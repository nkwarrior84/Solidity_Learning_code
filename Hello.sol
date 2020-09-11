pragma solidity ^0.6.8;


contract Hello 
{
    //declare a variable of type string
    string welcome;

    //Create a constructor that initializes @welcome variable
    constructor() public 
    {
        welcome = "Hello World Welcome to Solidity!";
    }

    //Define a Get Method that returns value of @welcome
    function get() public view returns (string memory) 
    {
        return welcome;
    }

    //Define a Set Method that modify/changes value of @welcome
    function set(string memory _well) public
    {
        welcome = _well;
    }
}
