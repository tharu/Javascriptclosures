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

var add7= make_adder(7);
add7();
add7();
console.log(add7());