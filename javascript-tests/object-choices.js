window.onload = () => {
    
    const simpleObjectAction = document.getElementById("simpleObjectAction");

    simpleObjectAction.onclick = () => {
        const simpleObjectDisplay = document.getElementById("simpleObjectDisplay");
        simpleObjectDisplay.textContent = simpleObject.sayName();
    }

    const functionObjectAction = document.getElementById("functionObjectAction");

    functionObjectAction.onclick = () => {
        const functionObjectDisplay = document.getElementById("functionObjectDisplay");
        functionObjectDisplay.textContent = testObject.sayName();
    }

    const customClassDisplay = document.getElementById("customClassDisplay");

    customClassAction.onclick = () => {
        const customClassDisplay = document.getElementById("customClassDisplay");
        customClassDisplay.textContent = testClass.sayName();
    }


    var simpleObject = {
        firstName: "M",
        lastName: "A",
        sayName: function() {
            console.log(this.firstName + " " + this.lastName);
            return this.firstName + " " + this.lastName;
        }
    }

    simpleObject.dynamicMethod = () => {
        console.log("Dynamic Method.")
    }

    function FunctionObject() {
        FunctionObject.prototype.sayName = () => {
            console.log("Function Object.");
            return "Function Object";
        }
    }

    class CustomClass {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
        }

        sayName() {
            console.log(this.firstName + " " + this.lastName);
            return this.firstName + " " + this.lastName;
        }

    }

    simpleObject.sayName();
    simpleObject.dynamicMethod();
    const testObject = new FunctionObject();
    testObject.sayName();
    const testClass = new CustomClass("Custom", "Class");
    testClass.sayName();

}