var simpleObject = {
    sayName: function() {
        console.log("Simple Object.");
    }
}

simpleObject.dynamicMethod = () => {
    console.log("Dynamic Method.")
}

function FunctionObject() {
    sayName: function() {

    }
}

simpleObject.sayName();
simpleObject.dynamicMethod();
FunctionObject.sayName();