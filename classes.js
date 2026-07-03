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