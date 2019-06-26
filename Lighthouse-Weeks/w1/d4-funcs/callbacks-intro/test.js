const hello = function()
{
    console.log("hi");
}

hello["test1"] = 1;
hello["test2"] = 10;

console.log(hello);



const hi = {
    test: function()
    {console.log("working")},
    test1: 1,
    test2: 10
}

console.log(hi);