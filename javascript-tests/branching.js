let height = 5;

if (height >= 5) {
    console.log('Big one');
}

height = 25;

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
        } else {
            simpleBranchDisplay.textContent = 'We have a little one';
        }   
    }
}