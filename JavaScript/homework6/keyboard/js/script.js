const textArea = document.getElementById('.textarea-box');
const keyQ1 = document.querySelector('.keyQ');
const keyW1 = document.querySelector('.keyW');
const keyE1 = document.querySelector('.keyE');
const keyR1 = document.querySelector('.keyR');
const keyT1 = document.querySelector('.keyT');
const keyY1 = document.querySelector('.keyY');
const keyU1 = document.querySelector('.keyU');
const keyI1 = document.querySelector('.keyI');
const keyO1 = document.querySelector('.keyO');
const keyP1 = document.querySelector('.keyP');
const keyA1 = document.querySelector('.keyA');
const keyS1 = document.querySelector('.keyS');
const keyD1 = document.querySelector('.keyD');
const keyF1 = document.querySelector('.keyF');
const keyG1 = document.querySelector('.keyG');
const keyH1 = document.querySelector('.keyH');
const keyJ1 = document.querySelector('.keyJ');
const keyK1 = document.querySelector('.keyK');
const keyL1 = document.querySelector('.keyL');
const keyZ1 = document.querySelector('.keyZ');
const keyX1 = document.querySelector('.keyX');
const keyC1 = document.querySelector('.keyC');
const keyV1 = document.querySelector('.keyV');
const keyB1 = document.querySelector('.keyB');
const keyN1 = document.querySelector('.keyN');
const keyM1 = document.querySelector('.keyM');
const key11 = document.querySelector('.key1');
const key21 = document.querySelector('.key2');
const key31 = document.querySelector('.key3');
const key41 = document.querySelector('.key4');
const key51 = document.querySelector('.key5');
const key61 = document.querySelector('.key6');
const key71 = document.querySelector('.key7');
const key81 = document.querySelector('.key8');
const key91 = document.querySelector('.key9');
const key01 = document.querySelector('.key0');
const keybutton11 = document.querySelector('.button-11');
const keybutton111 = document.querySelector('.key111');
const keybutton112 = document.querySelector('.key112');
const keybutton113 = document.querySelector('.key113');
const keybutton120 = document.querySelector('.button2-first');
const keybutton121 = document.querySelector('.key121');
const keybutton122 = document.querySelector('.key122');
const keybutton123 = document.querySelector('.key123');
const keybutton130 = document.querySelector('.button3-first');
const keybutton131 = document.querySelector('.key131');
const keybutton132 = document.querySelector('.key132');
const keybutton133 = document.querySelector('.button3-last');
const keybuttonshift1 = document.querySelector('.button-shift1');
const keybutton140 = document.querySelector('.key140');
const keybutton141 = document.querySelector('.key141');
const keybutton142 = document.querySelector('.key142');
const keybuttonshift2 = document.querySelector('.button-shift2');
const keybuttonenter = document.querySelector('.keyEnter');

document.addEventListener('keydown', event => {
    console.log(event);
    switch (event.keyCode) {
        case 81:
            keyQdown();
            break;
        case 87:
            keyWdown();
            break;
        case 69:
            keyEdown();
            break;
        case 82:
            keyRdown();
            break;
        case 84:
            keyTdown();
            break;
        case 89:
            keyYdown();
            break;
        case 85:
            keyUdown();
            break;
        case 73:
            keyIdown();
            break;
        case 79:
            keyOdown();
            break;
        case 80:
            keyPdown();
            break;
        case 65:
            keyAdown();
            break;
        case 83:
            keySdown();
            break;
        case 68:
            keyDdown();
            break;
        case 70:
            keyFdown();
            break;
        case 71:
            keyGdown();
            break;
        case 72:
            keyHdown();
            break;
        case 74:
            keyJdown();
            break;
        case 75:
            keyKdown();
            break;
        case 76:
            keyLdown();
            break;
        case 90:
            keyZdown();
            break;
        case 88:
            keyXdown();
            break;
        case 67:
            keyCdown();
            break;
        case 86:
            keyVdown();
            break;
        case 66:
            keyBdown();
            break;
        case 78:
            keyNdown();
            break;
        case 77:
            keyMdown();
            break;
        case 49:
            keyOnedown();
            break;
        case 50:
            keyTwodown();
            break;
        case 51:
            keyThreedown();
            break;
        case 52:
            keyFourdown();
            break;
        case 53:
            keyFivedown();
            break;
        case 54:
            keySixdown();
            break;
        case 55:
            keySevendown();
            break;
        case 56:
            keyEightdown();
            break;
        case 57:
            keyNinedown();
            break;
        case 48:
            keyTendown();
            break;
        case 192:
            keybutton11down();
            break;
        case 189:
            keybutton111down();
            break;
        case 187:
            keybutton112down();
            break;
        case 8:
            keybutton113down();
            break;
        case 9:
            keybutton120down();
            break;
        case 219:
            keybutton121down();
            break;
        case 221:
            keybutton122down();
            break;
        case 220:
            keybutton123down();
            break;
        case 20:
            keybutton130down();
            break;
        case 186:
            keybutton131down();
            break;
        case 222:
            keybutton132down();
            break;
        case 13:
            keybutton133down();
            break;
        case 16:
            keybuttonshift1down();
            break;
        case 188:
            keybutton140down();
            break;
        case 190:
            keybutton141down();
            break;
        case 191:
            keybutton142down();
            break;
        case 16:
            keybuttonshift2down();
            break;
        case 32:
            keyenterdown();
            break;
        default:
            break;
    }
})

function keyQdown() {
    keyQ1.style.background = "gray";
}

keyWdown = () => {
    keyW1.style.background = "gray";
}

keyEdown = () => {
    keyE1.style.background = "gray";
}

keyRdown = () => {
    keyR1.style.background = "gray";
}

keyTdown = () => {
    keyT1.style.background = "gray";
}

keyYdown = () => {
    keyY1.style.background = "gray";
}

keyUdown = () => {
    keyU1.style.background = "gray";
}

keyIdown = () => {
    keyI1.style.background = "gray";
}

keyOdown = () => {
    keyO1.style.background = "gray";
}

keyPdown = () => {
    keyP1.style.background = "gray";
}

keyAdown = () => {
    keyA1.style.background = "gray";
}

keySdown = () => {
    keyS1.style.background = "gray";
}

keyDdown = () => {
    keyD1.style.background = "gray";
}

keyFdown = () => {
    keyF1.style.background = "gray";
}

keyGdown = () => {
    keyG1.style.background = "gray";
}

keyHdown = () => {
    keyH1.style.background = "gray";
}

keyJdown = () => {
    keyJ1.style.background = "gray";
}

keyKdown = () => {
    keyK1.style.background = "gray";
}

keyLdown = () => {
    keyL1.style.background = "gray";
}

keyZdown = () => {
    keyZ1.style.background = "gray";
}

keyXdown = () => {
    keyX1.style.background = "gray";
}

keyCdown = () => {
    keyC1.style.background = "gray";
}

keyVdown = () => {
    keyV1.style.background = "gray";
}

keyBdown = () => {
    keyB1.style.background = "gray";
}

keyNdown = () => {
    keyN1.style.background = "gray";
}

keyMdown = () => {
    keyM1.style.background = "gray";
}

keyOnedown = () => {
    key11.style.background = "gray";
}

keyTwodown = () => {
    key21.style.background = "gray";
}

keyThreedown = () => {
    key31.style.background = "gray";
}

keyFourdown = () => {
    key41.style.background = "gray";
}

keyFivedown = () => {
    key51.style.background = "gray";
}

keySixdown = () => {
    key61.style.background = "gray";
}

keySevendown = () => {
    key71.style.background = "gray";
}

keyEightdown = () => {
    key81.style.background = "gray";
}

keyNinedown = () => {
    key91.style.background = "gray";
}

keyTendown = () => {
    key01.style.background = "gray";
}

keybutton11down = () => {
    keybutton11.style.background = "gray";
}

keybutton111down = () => {
    keybutton111.style.background = "gray";
}

keybutton112down = () => {
    keybutton112.style.background = "gray";
}

keybutton113down = () => {
    keybutton113.style.background = "gray";
}

keybutton120down = () => {
    keybutton120.style.background = "gray";
}

keybutton121down = () => {
    keybutton121.style.background = "gray";
}

keybutton122down = () => {
    keybutton122.style.background = "gray";
}

keybutton123down = () => {
    keybutton123.style.background = "gray";
}

keybutton130down = () => {
    keybutton130.style.background = "gray";
}

keybutton131down = () => {
    keybutton131.style.background = "gray";
}

keybutton132down = () => {
    keybutton132.style.background = "gray";
}

keybutton133down = () => {
    keybutton133.style.background = "gray";
}

keybuttonshift1down = () => {
    keybuttonshift1.style.background = "gray";
}

keybutton140down = () => {
    keybutton140.style.background = "gray";
}

keybutton141down = () => {
    keybutton141.style.background = "gray";
}

keybutton142down = () => {
    keybutton142.style.background = "gray";
}

keybuttonshift2down = () => {
    keybuttonshift2.style.background = "gray";
}

keyenterdown = () => {
    keybuttonenter.style.background = "gray";
}

document.addEventListener('keyup', event => {
    switch (event.keyCode) {
        case 81:
            keyQup();
            break;
        case 87:
            keyWup();
            break;
        case 69:
            keyEup();
            break;
        case 82:
            keyRup();
            break;
        case 84:
            keyTup();
            break;
        case 89:
            keyYup();
            break;
        case 85:
            keyUup();
            break;
        case 73:
            keyIup();
            break;
        case 79:
            keyOup();
            break;
        case 80:
            keyPup();
            break;
        case 65:
            keyAup();
            break;
        case 83:
            keySup();
            break;
        case 68:
            keyDup();
            break;
        case 70:
            keyFup();
            break;
        case 71:
            keyGup();
            break;
        case 72:
            keyHup();
            break;
        case 74:
            keyJup();
            break;
        case 75:
            keyKup();
            break;
        case 76:
            keyLup();
            break;
        case 90:
            keyZup();
            break;
        case 88:
            keyXup();
            break;
        case 67:
            keyCup();
            break;
        case 86:
            keyVup();
            break;
        case 66:
            keyBup();
            break;
        case 78:
            keyNup();
            break;
        case 77:
            keyMup();
            break;
        case 49:
            keyOneup();
            break;
        case 50:
            keyTwoup();
            break;
        case 51:
            keyThreeup();
            break;
        case 52:
            keyFourup();
            break;
        case 53:
            keyFiveup();
            break;
        case 54:
            keySixup();
            break;
        case 55:
            keySevenup();
            break;
        case 56:
            keyEightup();
            break;
        case 57:
            keyNineup();
            break;
        case 48:
            keyTenup();
            break;
        case 192:
            keybutton11up();
            break;
        case 189:
            keybutton111up();
            break;
        case 187:
            keybutton112up();
            break;
        case 8:
            keybutton113up();
            break;
        case 9:
            keybutton120up();
            break;
        case 219:
            keybutton121up();
            break;
        case 221:
            keybutton122up();
            break;
        case 220:
            keybutton123up();
            break;
        case 20:
            keybutton130up();
            break;
        case 186:
            keybutton131up();
            break;
        case 222:
            keybutton132up();
            break;
        case 13:
            keybutton133up();
            break;
        case 16:
            keybuttonshift1up();
            break;
        case 188:
            keybutton140up();
            break;
        case 190:
            keybutton141up();
            break;
        case 191:
            keybutton142up();
            break;
        case 16:
            keybuttonshift2up();
            break;
        case 32:
            keyenterup();
            break;
        default:
            break;
    }
})

function keyQup() {
    keyQ1.style.background = "white";
}

keyWup = () => {
    keyW1.style.background = "white";
}

keyEup = () => {
    keyE1.style.background = "white";
}

keyRup = () => {
    keyR1.style.background = "white";
}

keyTup = () => {
    keyT1.style.background = "white";
}

keyYup = () => {
    keyY1.style.background = "white";
}

keyUup = () => {
    keyU1.style.background = "white";
}

keyIup = () => {
    keyI1.style.background = "white";
}

keyOup = () => {
    keyO1.style.background = "white";
}

keyPup = () => {
    keyP1.style.background = "white";
}

keyAup = () => {
    keyA1.style.background = "white";
}


keySup = () => {
    keyS1.style.background = "white";
}

keyDup = () => {
    keyD1.style.background = "white";
}

keyFup = () => {
    keyF1.style.background = "white";
}

keyGup = () => {
    keyG1.style.background = "white";
}

keyHup = () => {
    keyH1.style.background = "white";
}

keyJup = () => {
    keyJ1.style.background = "white";
}

keyKup = () => {
    keyK1.style.background = "white";
}

keyLup = () => {
    keyL1.style.background = "white";
}

keyZup = () => {
    keyZ1.style.background = "white";
}

keyXup = () => {
    keyX1.style.background = "white";
}

keyCup = () => {
    keyC1.style.background = "white";
}

keyVup = () => {
    keyV1.style.background = "white";
}

keyBup = () => {
    keyB1.style.background = "white";
}

keyNup = () => {
    keyN1.style.background = "white";
}

keyMup = () => {
    keyM1.style.background = "white";
}

keyOneup = () => {
    key11.style.background = "white";
}

keyTwoup = () => {
    key21.style.background = "white";
}

keyThreeup = () => {
    key31.style.background = "white";
}

keyFourup = () => {
    key41.style.background = "white";
}

keyFiveup = () => {
    key51.style.background = "white";
}

keySixup = () => {
    key61.style.background = "white";
}

keySevenup = () => {
    key71.style.background = "white";
}

keyEightup = () => {
    key81.style.background = "white";
}

keyNineup = () => {
    key91.style.background = "white";
}

keyTenup = () => {
    key01.style.background = "white";
}

keybutton11up = () => {
    keybutton11.style.background = "white";
}

keybutton111up = () => {
    keybutton111.style.background = "white";
}

keybutton112up = () => {
    keybutton112.style.background = "white";
}

keybutton113up = () => {
    keybutton113.style.background = "white";
}

keybutton120up = () => {
    keybutton120.style.background = "white";
}

keybutton121up = () => {
    keybutton121.style.background = "white";
}

keybutton122up = () => {
    keybutton122.style.background = "white";
}

keybutton123up = () => {
    keybutton123.style.background = "white";
}

keybutton130up = () => {
    keybutton130.style.background = "white";
}

keybutton131up = () => {
    keybutton131.style.background = "white";
}

keybutton132up = () => {
    keybutton132.style.background = "white";
}

keybutton133up = () => {
    keybutton133.style.background = "white";
}

keybuttonshift1up = () => {
    keybuttonshift1.style.background = "white";
}

keybutton140up = () => {
    keybutton140.style.background = "white";
}

keybutton141up = () => {
    keybutton141.style.background = "white";
}

keybutton142up = () => {
    keybutton142.style.background = "white";
}

keybuttonshift2up = () => {
    keybuttonshift2.style.background = "white";
}

keyenterup = () => {
    keybuttonenter.style.background = "white";
}