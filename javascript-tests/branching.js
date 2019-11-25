let height = 5;

if (height >= 5) {
    console.log('Big one');
}

height = 'little';

switch(height) {
    case 'little':
        console.log('Switch: a little one is smaller than five');
        break;

    case ('big'):
        console.log('Switch: a big one is five or greater');
        break;

    default:
        console.log('We do not know about this one.')
}

height = 10;

if (height >= 5) {
    console.log('We have a big one');
} else if (height >= 0) {
    console.log('We have a little one');
} else {
    console.log('We have a negative number or invalid number')
}

window.onload = () => {
    const simpleBranchAction = document.getElementById('simpleBranchAction');
    const simpleBranchDisplay = document.getElementById('simpleBranchDisplay');
    
    simpleBranchAction.onclick = (event) => {
        let height = 26;
        if (height >= 25) {
            simpleBranchDisplay.textContent = 'We have a big one';
            console.log('We have a big one');
        } else {
            simpleBranchDisplay.textContent = 'We have a little one';
            console.log('We have a little one');
        }   
    }
}