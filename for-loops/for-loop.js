window.onload = () => {
    const listButton = document.getElementById('runForLoopAction');

    listButton.onclick = () => {
        const myList = document.getElementById('my-list');
        var i;
        for(i = 0; i < 5; i++) {
            elfCode.appendToList(myList, i);
        }
    }
}  