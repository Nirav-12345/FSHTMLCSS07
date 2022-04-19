class NewEmployeePayRollData
{
    id;
    salary;
    gender;
    startDate;

    //constructor
    constructor(id, name,salary)
    {
        this.name=name;
        this.id=id;
        this.salary=salary;
    }

    get name(){return this._name;}
    set name(name)
    {
        let nameRegex=RegExp('^[A-Z]{1}[a-z]{3}$');
        if(nameRegex.test(name))
        this._name=name;
        else throw 'Name is incorrect';
    }

    
toString()
    {
        return "id="+this.id+", name = "+this.name+" , salary = "+this.salary;
    }
}

let employeePayRollData=new NewEmployeePayRollData(1,"Mark",3000);

console.log(employeePayRollData.toString());

try{
    employeePayRollData.name="Je";
    console.log(employeePayRollData.toString());
}catch(e)
{
    console.error(e)
}