var add=(function()
      {
        var counter=0;
        return function()
        {
            return counter+=1;
        }
      })();

function make_adder(inc)
{
    var counter=0;
    return function()
      {
        return function()
        {
            return counter+=inc;
        }();
      }
}

var add5= make_adder(5);
add5();
add5();
console.log(add5());

var add7= make_adder(7);
add7();
add7();
console.log(add7());


var count=(function()
{
     var counter=0;
      const addFunction=function()
      {       
            return counter+=1;        
      };
      const resetFunction=function()
      {
           return counter=0;
      };
      return {
        add: addFunction,
        reset: resetFunction
        };
    
})();

console.log(count.add())
console.log(count.add())
console.log(count.add())
console.log(count.reset())
console.log(count.add())
console.log(count.add())



var employee= (function()
{
    let name,age,salary;
    const getName=function()
    {
      return this.name;
    };

    const getAge=function()
    {
      return this.age;
    };

    const getSalary=function()
    {
      return this.salary;
    };

    const setName=function(name)
    {
         this.name=name;
    };

    const setAge=function(age)
    {
        this.age=age;
    };

    const setSalary=function(salary)
    {
        this.salary=salary;
    };

    const increaseSalary=function(pecentage)
    {
        this.salary+=this.salary*pecentage/100;
    };

    const incrementAge=function()
    {
       this.age=this.age+1;
    };

    return {
      setNameMethod: setName,
      setAgeMethod: setAge,
      setSalaryMethod:setSalary ,
      increaseSalMethod: increaseSalary,
      incrementAgeMethod:incrementAge  
      };
     
})();
var address;
employee.setAddress=function(add)
{
    this.address=add;
};
employee.getAddress=function()
{
   return this.address;
};



employee.setNameMethod("ani");
employee.setAgeMethod(12);
employee.setSalaryMethod(1000);
employee.setAddress("12 flower street Fairfield");
console.log(employee);
employee.increaseSalMethod(10);
console.log(employee);