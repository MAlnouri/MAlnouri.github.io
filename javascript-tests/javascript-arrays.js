var arrays = {
    numbers: [15,14,13,12,11,10,9,8,7,6,5],
}

var languages = {
    prog: ["JavaScript", "HTML", "CSS", "Java", "C#", "Python", "C/C++"],
}

window.onload = () => {

    const showNumAction = document.getElementById("numbers-action");

    showNumAction.onclick = () => {
        const showNumDisplay = document.getElementById("numbers-display");

        for(let x of arrays.numbers) {
            elfCode.appendToList(showNumDisplay, x);
        }

        console.log(arrays.numbers);

        arrays.numbers.sort((a,b) => (a - b));

        console.log(arrays.numbers);
        
        for(let x of arrays.numbers) {
            elfCode.appendToList(showNumDisplay, x);
        }

    }

    const showLangAction = document.getElementById("languages-action");

    showLangAction.onclick = () => {
        const showLangDisplay = document.getElementById("languages-display");

        for(let x of languages.prog) {
            elfCode.appendToList(showLangDisplay, x);
        }

        console.log(languages.prog);

    }


}