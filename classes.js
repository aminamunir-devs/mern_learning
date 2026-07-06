                        //  Classes

class student{
    constructor(name,age){
    this.name=name;
    this.age=age;
    }

    introduce()
    {
        console.log(`hi i am ${this.name}`)
    }
    
}
const student1=new student("Amina",22);
console.log(student1);
const student2=new student("Ali",23);
console.log(student2);
student1.introduce();


                        //  Inheritance

class person{
    constructor(name)
    {
        this.name=name;
    }

    intro()
    {
        console.log(`hello ${this.name}`)
    }
}
class stud1 extends person{
    constructor(name,course)
    {
        super(name);
        this.course=course;
    }
}
const student3=new stud1("manahil","mern");
console.log(student3);
student3.intro();

                    //    Method Overriding

class Person {

    greet() {
        console.log("Hello");
    }

}

class Stud2 extends Person {

    greet() {
        console.log("Hello Student");
    }

}
const student4 = new Stud2();

student4.greet();

/* Scenario 1: Student Management ⭐ (Easy)

Create a Student class.

Properties
name
age
course
Methods
introduce()
study()
Expected Output
Hi, I'm Amina.
I'm studying MERN.

Challenge: Create 3 different students. */

class stud{
    constructor(name,age,course)
    {
        this.name=name;
        this.age=age;
        this.course=course
        
        
    }
    introduce()
    {
        console.log(`Hi, I'm ${this.name}`);
    }
    study()
    {
        console.log(`I'm studying ${this.course}`)
    }
}

const s1=new stud("amina",22,"mern");
const s2=new stud("ali",23,"data structure");
const s3=new stud("manahil",24,"react");
s1.introduce();
s1.study();
