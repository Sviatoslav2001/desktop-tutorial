function exs1() { //Завдання 1
    let arr1 = [5, 6, 7, 8, 9];
    function count(arr1) {
        let sum = 0;
        arr1.forEach(function (item) {
            sum += item;
        });
        return sum;
    }
    console.log(count(arr1));
}

//========================================================================================================

function exs2() { //Завдання 2
    let arr2 = [5, 6, 7, 8, 9];
    function count(e) { return e * e };
    let arr2newmassive = arr2.map(count);
    console.log(arr2newmassive);
}

//========================================================================================================

function exs3() { //Завдання 3
    let arr3 = [{ name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' }
    ]

    const newarr3 = arr3.every(property => property.country === 'Ukraine');
    console.log(newarr3);
}


//========================================================================================================

function exs4() { //Завдання 4
    let arr4 = [{ name: 'Ivan', country: 'Ukraine' },
    { name: 'Petro', country: 'Ukraine' },
    { name: 'Miguel', country: 'Cuba' }
    ]

    const newarr4 = arr4.some(property => property.country === 'Cuba');
    console.log(newarr4);
}

//========================================================================================================

function exs5() { //Завдання 5
    let arr = [1, 'string', [3, 4], 5, [6, 7]];
    const newarr5 = arr.filter(Array.isArray);
    console.log(newarr5);
}

//========================================================================================================

function exs6() { //Завдання 6
    let arr6 = [1, 2, 5, 0, 4, 5, 6];
    let newarr1 = arr6.reduce((previousValue, currentValue) => {
        if(currentValue == 0) {
            return console.log(previousValue);
        } else {
            return previousValue + currentValue
        }
    })
} 

//========================================================================================================


function exs7() { //Завдання 7

    let arr = [1, -2, 3, 0, 4, -5, 6, -11];
    const newArr = arr.filter(function(arrFilter) {
        return arrFilter >= 0;
    });
    console.log(newArr);
    const newArrsqrt = newArr;
    function count(e) {return (e ** (1 / 2))};
    const newArrsqrt2 = newArrsqrt.map(count);
    console.log(newArrsqrt2);


}