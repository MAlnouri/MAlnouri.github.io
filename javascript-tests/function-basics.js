function simpleFunction() {
    console.log("functions should consist of statements designed to perform a single task.");
}

function functionParameters(printMe) {
    console.log(printMe);
}

function functionReturn() {
    return "Many functions return values.";
}

window.onload = () => {
    const simpleFunctionDisplay = document.getElementById('simpleFunctionDisplay');
    const functionParametersDisplay = document.getElementById('functionParametersDisplay');
    const functionReturnDisplay = document.getElementById('functionReturnDisplay');
    const functionCallsAction = document.getElementById('functionCallsAction');

    const addToListAction = document.getElementById('addToListAction');
    
    function simpleFunction() {
        console.log('Button adds to simple paragraph element.');
        simpleFunctionDisplay.textContent = 'functions should consist of statements designed to perform a single task.';
    }

    function parameterFunction(printParameter) {
        console.log('Button adds to parameter paragraph element');
        functionParametersDisplay.textContent = printParameter;
    }

    function returnFunction() {
        console.log('Button adds to return paragraph element');
        functionReturnDisplay.textContent = 'Many functions return values.';
    }

    function callAllFunctions() {
        simpleFunction();
        parameterFunction("Many functions take parameters.");
        returnFunction();
    }

    functionCallsAction.onclick = callAllFunctions;

    addToListAction.onclick = () => {
        const inputValue = document.getElementById('nameDisplay').value;
        elfCode.appendToList(listDisplay, inputValue);
        console.log('Added user input \'' + inputValue + '\' to list.');
    }
}

simpleFunction();
functionParameters("Many functions take parameters.");
console.log(functionReturn());