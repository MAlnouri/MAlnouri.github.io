var simpleObject = {
    sayName: function() {
        console.log("Simple Object.");
    }
}

simpleObject.dynamicMethod = () => {
    console.log("Dynamic Method.")
}

function FunctionObject() {
    FunctionObject.prototype.sayName = () => {
        console.log("Function Object.");
    }
}

class CustomClass {

}

simpleObject.sayName();
simpleObject.dynamicMethod();
const testObject = new FunctionObject();
testObject.sayName();