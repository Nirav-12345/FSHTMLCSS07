window.addEventListener('DOMContentLoaded',(event)=>{
    const name=document.querySelector("#name");
    const textError=document.querySelector('.text-error');
    name.addEventListener('input',function(){
        if(name.value.length==0){
            textError.textContent="";
            return;
        }
        try{
            (new inputData()).name=name.value;
            textError.textContent="";
        }catch(e){
            textError.textContent=e;
                }
    });
const salary=document.querySelector("#salary");
const output=document.querySelector('.salary-output');
output.textContent=salary.value;
salary.addEventListener('input',function(){
    output.textContent=salary.value;
});

});

const save=()=>{
    try{
        let inputData=createEmployeePayroll();
    }catch(e){
        return;
    }
}

const createEmployeePayroll=()=>{
    let inputData=new EmployeePayrollData();
    try{
        employeePayRollData.name=getInputValueById('#name');
    }catch(e){
        setTextValue('.text-error',e);
        throw e;
    }
}

const getInputValueById=(id) => {
    let value=document.querySelector(id).value;
    return value;
}