pragma solidity ^0.6.8;

contract Structs
{

    struct Student{
        string name;
        uint age;
        Teachers teacher;
    }
    
    struct Teachers
    {
        Student student;
    }
    
    Student student;
    
    function fill()public 
    { 
        student.name = 'Navneet';
        student.age = 18;
    }
    
    Student student1 = Student({
        name: "Navneet", age:18
    });
    
    Student student2 = Student('Navneet', 18);
}
