// Your code here
class Cat{
    constructor(nm, gdr)
    {
        this.name = nm;
        this.gender = gdr;
    }

    speak(){
        return "" + this.name + " says meow!";
    }
}

class Dog{
    constructor(nm, gdr)
    {
        this.name = nm;
        this.gender = gdr;
    }

    speak(){
        return "" + this.name + " says woof!";
    }
}

class Bird{
    constructor(nm, gdr)
    {
        this.name = nm;
        this.gender = gdr;
    }

    speak(){
        if (this.gender === "male") return "It's me! " + this.name + ", the parrot!";
        else return "" + this.name + " says squawk!";
    }
}
