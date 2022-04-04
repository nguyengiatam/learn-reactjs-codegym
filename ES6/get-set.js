class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    get Name(){
        return this.name;
    }

    set Name(name){
        if (typeof name == 'string') {
            this.name = name;
        }
    }

    get Age(){
        return this.age;
    }

    set Age(age){
        if (typeof age == 'number') {
            this.age = age;
        }
    }
}

const student = new Person('Nguyễn Văn A', 21)

console.log(student.Name, student.Age)

student.Name = 'Nguyễn Văn B'
student.Age = 22

console.log(student);