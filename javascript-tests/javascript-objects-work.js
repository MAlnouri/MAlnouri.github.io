var person = {
    firstName: 'Mahmmoud',
    lastName: 'Alnouri',
    fullName() {
        return this.firstName + " " + this.lastName;
    }
}

var calculator = {
    operand01: -1,
    operand02: -1,
    add() {
        return this.operand01 + this.operand02;
    },
    subtract() {
        return this.operand01 - this.operand02;
    }
}

calculator.operand01 = person.firstName.length;
calculator.operand02 = person.lastName.length;

calculator.multiply = (mul1, mul2) => {
    return mul1 * mul2;
}

divider = (title) => {
    console.log("\n====================================");
    console.log(title);
    console.log("====================================\n");
}

divider('Person');

console.log("First name:", person.firstName)
console.log("Last name:", person.lastName);
console.log("Full name:", person.fullName());

divider('Calculator');

console.log("Op1 is the length of first name :", calculator.operand01);
console.log("Op2 is the length last name:", calculator.operand02);

console.log("Add lengths:", calculator.add());
console.log("Subtract lengths:", calculator.subtract());
console.log("Multiply lengths:", calculator.multiply(calculator.operand01, calculator.operand02));
