window.addEventListener('scroll', event => {


const currentScroll = window.scrollY;
const offsetHeight = document.body.offsetHeight;
const clientHeight = document.documentElement.clientHeight;
const visibleHeight = offsetHeight - clientHeight;
const percentage = Math.round(currentScroll / visibleHeight * 100);

console.log("percentage", percentage);
console.log("Current scroll",currentScroll);
console.log("Offset Height",offsetHeight);
console.log("Client height",clientHeight);

// for(let i = 0; i < percentage; i++){
//     // if(percentage < 25) {
//     //         document.querySelector('.scrollDown').style.fontSize = "36px";
//     // }
//     // document.querySelector('.scrollDown').style.fontSize = "27px";
//     // document.querySelector('.scrollDown').style.transition = "0.5s"
// }

if(percentage >= 1 && percentage < 2) {
    document.querySelector('.scrollDown').style.fontSize = "26px";
    document.querySelector('.scrollDown').style.transition = "0.5s";
} else if(percentage >= 3 && percentage < 4) {
    document.querySelector('.scrollDown').style.fontSize = "28px";
    document.querySelector('.scrollDown').style.transition = "0.5s";
} else if(percentage >= 5 && percentage < 6) {
    document.querySelector('.scrollDown').style.fontSize = "30px";
    document.querySelector('.scrollDown').style.transition = "0.5s";    
} else if(percentage >= 7 && percentage < 8) {
    document.querySelector('.scrollDown').style.fontSize = "32px";
    document.querySelector('.scrollDown').style.transition = "0.5s";   
} else if(percentage >= 9 && percentage < 10) {
    document.querySelector('.scrollDown').style.fontSize = "34px";
    document.querySelector('.scrollDown').style.transition = "0.5s";   
} else if(percentage >= 11 && percentage < 12) {
    document.querySelector('.scrollDown').style.fontSize = "36px";
    document.querySelector('.scrollDown').style.transition = "0.5s";
} else if(percentage >= 13 && percentage < 14) {
    document.querySelector('.scrollDown').style.fontSize = "38px";
    document.querySelector('.scrollDown').style.transition = "0.5s"; 
} else if(percentage >= 15 && percentage < 16) {
    document.querySelector('.scrollDown').style.fontSize = "40px";
    document.querySelector('.scrollDown').style.transition = "0.5s";   
} else if(percentage >= 17 && percentage < 18) {
    document.querySelector('.scrollDown').style.fontSize = "42px";
    document.querySelector('.scrollDown').style.transition = "0.5s";
} else if(percentage >= 19 && percentage < 20) {
    document.querySelector('.scrollDown').style.fontSize = "44px";
    document.querySelector('.scrollDown').style.transition = "0.5s";    
} else if(percentage >= 21 && percentage < 22) {
    document.querySelector('.scrollDown').style.fontSize = "46px";
    document.querySelector('.scrollDown').style.transition = "0.5s";   
} else if(percentage >= 23 && percentage < 24) {
    document.querySelector('.scrollDown').style.fontSize = "48px";
    document.querySelector('.scrollDown').style.transition = "0.5s";    
} else if(percentage >= 25 && percentage < 26) {
    document.querySelector('.scrollDown').style.fontSize = "50px";
    document.querySelector('.scrollDown').style.transition = "0.5s";
} else if(percentage >= 27 && percentage < 28) {
    document.querySelector('.scrollDown').style.fontSize = "52px";
    document.querySelector('.scrollDown').style.transition = "0.5s"; 
} else if(percentage >= 29 && percentage < 30) {
    document.querySelector('.scrollDown').style.fontSize = "54px";
    document.querySelector('.scrollDown').style.transition = "0.5s";   
}

if(percentage >= 31 && percentage < 32) {
    document.querySelector('.slideText').style.marginLeft = "60px";
    document.querySelector('.slideText').style.transition = "0.5s"; 
    document.querySelector('.line').style.width = "25%";
    document.querySelector('.line').style.transition = "0.5s"; 
} else if (percentage >= 33 && percentage < 34) {
    document.querySelector('.slideText').style.marginLeft = "70px";
    document.querySelector('.slideText').style.transition = "0.5s"; 
    document.querySelector('.line').style.width = "30%";
    document.querySelector('.line').style.transition = "0.5s";
} else if (percentage >= 35 && percentage < 36) {
    document.querySelector('.slideText').style.marginLeft = "80px";
    document.querySelector('.slideText').style.transition = "0.5s"; 
    document.querySelector('.line').style.width = "35%";
    document.querySelector('.line').style.transition = "0.5s"; 
} else if (percentage >= 37 && percentage < 38) {
    document.querySelector('.slideText').style.marginLeft = "90px";
    document.querySelector('.slideText').style.transition = "0.5s"; 
    document.querySelector('.line').style.width = "40%";
    document.querySelector('.line').style.transition = "0.5s"; 
} else if (percentage >= 39 && percentage < 40) {
    document.querySelector('.slideText').style.marginLeft = "100px";
    document.querySelector('.slideText').style.transition = "0.5s"; 
    document.querySelector('.line').style.width = "45%";
    document.querySelector('.line').style.transition = "0.5s";
} else if (percentage >= 41 && percentage < 42) {
    document.querySelector('.slideText').style.marginLeft = "110px";
    document.querySelector('.slideText').style.transition = "0.5s"; 
    document.querySelector('.line').style.width = "50%";
    document.querySelector('.line').style.transition = "0.5s"; 
} else if (percentage >= 43 && percentage < 44) {
    document.querySelector('.slideText').style.marginLeft = "120px";
    document.querySelector('.slideText').style.transition = "0.5s"; 
    document.querySelector('.line').style.width = "55%";
    document.querySelector('.line').style.transition = "0.5s"; 
} else if (percentage >= 45 && percentage < 46) {
    document.querySelector('.slideText').style.marginLeft = "130px";
    document.querySelector('.slideText').style.transition = "0.5s"; 
    document.querySelector('.line').style.width = "60%";
    document.querySelector('.line').style.transition = "0.5s"; 
} else if (percentage >= 47 && percentage < 48) {
    document.querySelector('.slideText').style.marginLeft = "140px";
    document.querySelector('.slideText').style.transition = "0.5s"; 
    document.querySelector('.line').style.width = "65%";
    document.querySelector('.line').style.transition = "0.5s"; 
}

if(percentage >= 50 && percentage < 51) {
    document.querySelector('.slideImage').style.marginLeft = "700px";
    document.querySelector('.slideImage').style.transition = "0.5s";
} else if (percentage >= 52 && percentage < 53) {
    document.querySelector('.slideImage').style.marginLeft = "650px";
    document.querySelector('.slideImage').style.transition = "0.5s";
} else if (percentage >= 54 && percentage < 55) {
    document.querySelector('.slideImage').style.marginLeft = "600px";
    document.querySelector('.slideImage').style.transition = "0.5s";
} else if (percentage >= 56 && percentage < 57) {
    document.querySelector('.slideImage').style.marginLeft = "550px";
    document.querySelector('.slideImage').style.transition = "0.5s";
} else if (percentage >= 58 && percentage < 59) {
    document.querySelector('.slideImage').style.marginLeft = "500px";
    document.querySelector('.slideImage').style.transition = "0.5s";
}

if(percentage >= 75 && percentage < 76) {
    document.querySelector('.scrollUp').style.fontSize = "52px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 77 && percentage < 78) {
    document.querySelector('.scrollUp').style.fontSize = "50px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 79 && percentage < 80) {
    document.querySelector('.scrollUp').style.fontSize = "48px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 81 && percentage < 82) {
    document.querySelector('.scrollUp').style.fontSize = "46px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 83 && percentage < 84) {
    document.querySelector('.scrollUp').style.fontSize = "44px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 85 && percentage < 86) {
    document.querySelector('.scrollUp').style.fontSize = "42px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 87 && percentage < 88) {
    document.querySelector('.scrollUp').style.fontSize = "40px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 89 && percentage < 90) {
    document.querySelector('.scrollUp').style.fontSize = "38px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 91 && percentage < 92) {
    document.querySelector('.scrollUp').style.fontSize = "36px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 93 && percentage < 94) {
    document.querySelector('.scrollUp').style.fontSize = "34px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 95 && percentage < 96) {
    document.querySelector('.scrollUp').style.fontSize = "32px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 97 && percentage < 98) {
    document.querySelector('.scrollUp').style.fontSize = "30px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
} else if(percentage >= 99 && percentage < 100) {
    document.querySelector('.scrollUp').style.fontSize = "28px";
    document.querySelector('.scrollUp').style.transition = "0.5s";
}
})

const scrollTextDown = document.querySelector('.scrollTextDown');
scrollTextDown.addEventListener('mouseover', () => {
    scrollTextDown.style.color = "orange";
})
scrollTextDown.addEventListener('mouseout', () => {
    scrollTextDown.style.color = "black";
})

const scrollTextUp = document.querySelector('.scrollTextUp');
scrollTextUp.addEventListener('mouseover', () => {
    scrollTextUp.style.color = "orange";
})
scrollTextUp.addEventListener('mouseout', () => {
    scrollTextUp.style.color = "black";
})

function scrollCenter() {
    const containerTwo = document.querySelector('.containerTwo');
    containerTwo.scrollIntoView({behavior: "smooth"});
}

function scrollUp() {
    const containerOne = document.querySelector('.containerOne');
    containerOne.scrollIntoView({behavior: "smooth"});
}