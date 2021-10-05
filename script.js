//Таблица умножения
//Сделать таблицу умножения, используя DOM createElement и innerText.
//Создайте таблицу, вложенные строки и ячейки в циклах.
//Должно получится что - то вроде этого:
// urlhttp://shots.asmer.org.ua/2018_12_15__01_00_46.png

let multiplicationTable = document.querySelector('.multiplication');

for (let i = 0; i < 10; i++) {
    let tabRow = document.createElement('tr');

    multiplicationTable.append(tabRow);
    
    for (let j = 0; j < 10; j++) {
    
        let tabCol = document.createElement('td');

        tabCol.style.width = '30px';
        tabCol.style.height = '30px';
        tabCol.style.borderRadius = '5px';
        tabCol.style.borderWidth = '1px';
        tabCol.style.borderStyle = 'solid';
        tabCol.style.borderColor = 'blue';
        tabCol.style.textAlign = 'center';

        tabRow.append(tabCol);
        
        if (i === 0) {
            tabCol.innerText = j;
        } else if (j === 0) {
            tabCol.innerText = i;
        } else {
            tabCol.innerText = i * j;
        }

       
    }
}

//Подсветить ячейку над которой находится курсор мыши.
//Используйте события mouseover и mouseout, и style.backgroundColor для
// подсветки.
//    Читкоды: в обработчик события в 
// качестве this передается элемент, на котором событие произошло;

let overOut = document.querySelectorAll('td');
overOut.forEach((i) => {
    i.onmouseover = () => i.style.backgroundColor = 'gray';
    i.onmouseout = () => i.style.backgroundColor = '';
})

//Подсветить строку и столбец,
//в которой находится подсвеченная ячейка.
//Используйте parentElement(родительский элемент элемента DOM), 
//и список его детей: children.
// Читкоды:
// в обработчик события в качестве this передается элемент, 
// на котором событие произошло;
// у td есть свойство cellIndex, в котором лежит номер ячейки;
// у tr, аналогично есть свойство rowIndex - номер строки;
let overOutTD = document.querySelectorAll('td');

overOutTD.forEach((item, i) => {
    item.onmouseover = () => {
        item.style.backgroundColor = 'gray';
        item.parentNode.style.backgroundColor = 'blue';
    }
    item.onmouseout = () => {
        item.style.backgroundColor = '';
        item.parentNode.style.backgroundColor = '';
    }
})
/*let overOutTR = document.querySelectorAll('tr');

overOutTR.forEach((item, i) => {
    let tableCell = item.querySelector('td');
    if (tableCell )
})*/


//Сделайте ваш калькулятор из первых занятий 
//используя DOM и элементы input(в т.ч.type = "number" для чисел) 
//Каждому полю ввода присвойте тот или иной id для обращения в 
//обрабочтике события.
 
let firstNumberInput = document.querySelector('#firstValue'),
    secondNumberInput = document.querySelector('#secondValue'),
    plus = document.querySelector('#plus'),
    minus = document.querySelector('#minus'),
    multiplication = document.querySelector('#multiply'),
    divider = document.querySelector('#divide'),
    degree = document.querySelector('#squareCube'),
    resOfCalc = document.querySelector('#result'),
    buttonOfCalc = document.querySelector('.btn');

buttonOfCalc.addEventListener('click', () => {
    if(plus.checked){
        resOfCalc.value = +firstNumberInput.value + +secondNumberInput.value;
    } else 
    if (minus.checked){
        resOfCalc.value = firstNumberInput.value - secondNumberInput.value;
    } else
    if (multiplication.checked){
        resOfCalc.value = firstNumberInput.value * secondNumberInput.value;
    } else 
    if (divider.checked){
        resOfCalc.value = firstNumberInput.value / secondNumberInput.value;
    } else
    if (degree.checked){
        resOfCalc.value = firstNumberInput.value ** secondNumberInput.value;
    } else {
        alert('Choose math operation');
    }
})


// Calc Live
// Сделайте расчет живым, т.е.обновляющимся по событию oninput
// каждого поля ввода, влияющего на результат.Нет смысла копировать
// одну и ту же калькуляцию, поэтому вначале задекларируйте функцию расчета, а
// потом присвойте её в качестве обработчика события в каждом поле ввода
 
function myCalculator(){
    var firstInput = document.getElementById("firstNumberInput").value;
    var secondInput = document.getElementById("secondNumberInput").value;
    var x = +firstInput + +secondInput;
    document.getElementById("resultSecond").innerHTML = "Your result of sum is:" + x;
}