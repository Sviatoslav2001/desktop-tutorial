const actionBtnColor = document.querySelector('.bg-color');
const actionBtnMenuCol = document.querySelector('.menu-color');

const actionBtnImage = document.querySelector('.bg-img');
const actionBtnMenuImage = document.querySelector('.menu-img');

actionBtnColor.addEventListener('mousedown', () => {
    actionBtnMenuCol.style.display = "block";
    actionBtnMenuImage.style.display = "none";
});

actionBtnImage.addEventListener('mousedown', () => {
    actionBtnMenuImage.style.display = "block";
    actionBtnMenuCol.style.display = "none";
});

const actionContainer = document.querySelector('body')

const actionBtnColor_1 = document.querySelector('.red');
actionBtnColor_1.addEventListener('mousedown', () => {
    actionContainer.style.background = "red";
});
const actionBtnColor_2 = document.querySelector('.blue');
actionBtnColor_2.addEventListener('mousedown', () => {
    actionContainer.style.background = "blue";
});
const actionBtnColor_3 = document.querySelector('.gray');
actionBtnColor_3.addEventListener('mousedown', () => {
    actionContainer.style.background = "gray";
});
const actionBtnColor_4 = document.querySelector('.purple');
actionBtnColor_4.addEventListener('mousedown', () => {
    actionContainer.style.background = "purple";
});
const actionBtnColor_5 = document.querySelector('.yellow');
actionBtnColor_5.addEventListener('mousedown', () => {
    actionContainer.style.background = "yellow";
});
const actionBtnColor_6 = document.querySelector('.orange');
actionBtnColor_6.addEventListener('mousedown', () => {
    actionContainer.style.background = "orange";
});
const actionBtnColor_7 = document.querySelector('.green');
actionBtnColor_7.addEventListener('mousedown', () => {
    actionContainer.style.background = "green";
});
const actionBtnColor_8 = document.querySelector('.aqua');
actionBtnColor_8.addEventListener('mousedown', () => {
    actionContainer.style.background = "aqua";
});
const actionBtnColor_9 = document.querySelector('.black');
actionBtnColor_9.addEventListener('mousedown', () => {
    actionContainer.style.background = "rgb(49, 30, 30)";
});


const actionBtnImage_1 = document.querySelector('.img_1');
actionBtnImage_1.addEventListener('mousedown', () => {
    actionContainer.style.backgroundImage = "url('./img/img1.jpg')";
    actionContainer.style.backgroundSize = "cover";
})
const actionBtnImage_2 = document.querySelector('.img_2');
actionBtnImage_2.addEventListener('mousedown', () => {
    actionContainer.style.backgroundImage = "url('./img/img2.jpg')";
    actionContainer.style.backgroundSize = "cover";
})
const actionBtnImage_3 = document.querySelector('.img_3');
actionBtnImage_3.addEventListener('mousedown', () => {
    actionContainer.style.backgroundImage = "url('./img/img3.jpg')";
    actionContainer.style.backgroundSize = "cover";
})
const actionBtnImage_4 = document.querySelector('.img_4');
actionBtnImage_4.addEventListener('mousedown', () => {
    actionContainer.style.backgroundImage = "url('./img/img4.jpg')";
    actionContainer.style.backgroundSize = "cover";
})
const actionBtnImage_5 = document.querySelector('.img_5');
actionBtnImage_5.addEventListener('mousedown', () => {
    actionContainer.style.backgroundImage = "url('./img/img5.jpg')";
    actionContainer.style.backgroundSize = "cover";
})
const actionBtnImage_6 = document.querySelector('.img_6');
actionBtnImage_6.addEventListener('mousedown', () => {
    actionContainer.style.backgroundImage = "url('./img/img6.jpg')";
    actionContainer.style.backgroundSize = "cover";
})
const actionBtnImage_7 = document.querySelector('.img_7');
actionBtnImage_7.addEventListener('mousedown', () => {
    actionContainer.style.backgroundImage = "url('./img/img7.jpg')";
    actionContainer.style.backgroundSize = "cover";
})
const actionBtnImage_8 = document.querySelector('.img_8');
actionBtnImage_8.addEventListener('mousedown', () => {
    actionContainer.style.backgroundImage = "url('./img/img8.jpg')";
    actionContainer.style.backgroundSize = "cover";
})
const actionBtnImage_9 = document.querySelector('.img_9');
actionBtnImage_9.addEventListener('mousedown', () => {
    actionContainer.style.backgroundImage = "url('./img/img9.jpg')";
    actionContainer.style.backgroundSize = "cover";
})