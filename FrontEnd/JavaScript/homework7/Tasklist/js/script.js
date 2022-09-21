const list = document.querySelector('.list');
const inputText = document. querySelector('.inputText');
const buttonTask = document.querySelector('.buttonTask');


let listItems = [];

const removeElement = item => {
    if(listItems.length > 1) {
        listItems = listItems.filter(elem => elem !== item);
        updateList();
    }
};


const updateList = () => {
    list.innerHTML = '';
    listItems.forEach(item => {
        list.append(item);
    });
};

const addItem = () => {
    const value = inputText.value;
    const removeBtn = document.createElement('button');
    removeBtn.textContent = '';
    removeBtn.style.width = "15px";
    removeBtn.style.height = "15px";
    const item = document.createElement('li');

    removeBtn.addEventListener('click', () => removeElement(item));

    item.textContent = value;
    item.append(removeBtn);

    listItems.push(item);
    inputText.value = '';
    
    updateList();
}

buttonTask.addEventListener('click', addItem);
inputText.addEventListener('keypress', event => {
    if(event.keyCode == 13) {
        addItem();
    } 
})