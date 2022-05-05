//события и их обработчики(тема 45)
"use strict";


//назначаем обработчик союытия(функция, которая сработает, когда нажмем на кнопку)
//3 способа
//1 - использовать HTML атрибут(в реал проектах обычно не используют)
//делается в html: <button onclick="alert('click')" id="btn">Нажми меня</button>
//фция alert - это вывести диалоговое окно с такой то надписью

//2 - использовать св-ва DOM дерева для событий(тоже редко используют)
const btn = document.querySelector('button');
const btn1 = document.getElementById('btn1');
btn.onclick = function () {
    alert('Click1');
};
//можно дублировать в коде, но сработает только последний

//3 - правильное написание обработчика
btn.addEventListener('click', () => { alert('Click2'); });
//'click' - это тип события(тоесть клик по кнопке)

//теперь можно назначить несколько действий на одно событие
btn.addEventListener('click', () => { alert('SecondClick'); });

//3.1 - получение данных о элементе, с которы взаимодействуем(mouseenter - это когда стрелка просто наведена на кнопку)
btn.addEventListener('mouseenter', (eventtt) => {
    console.log(eventtt); //вывод: MouseEvent {isTrusted: true, screenX: 113, screenY: 124, clientX: 113, clientY: 52,…}
    console.log(eventtt.type); //вывод: mouseenter
    console.log(eventtt.target); //вывод: <button id="btn">Нажми меня</button>
    //можем теперь например удалить кнопку
    // eventtt.target.remove();
});


//3.2 - обработчик в виде отдельной переменной
const deleteElem = (e) => { console.log(e.target); };
btn.addEventListener('click', deleteElem);

//4 - удаление обработчика с кнопки btn
btn.removeEventListener('click', deleteElem);
//пример кода, как его реализоавать
let i = 0;
const deleteeeListener = (e) => {
    console.log(e.target);
    i++;
    if (i == 4) { btn1.removeEventListener('click', deleteeeListener); }
};
btn1.addEventListener('click', deleteeeListener);
//можно сделать так(говорим, чтобы сработал 1 раз и больше не срабатывал):
btn1.addEventListener('click', btn1.какойтообработчик('click', deleteeeListener), {once:true});


//ВСПЛЫТИЕ СОБЫТИЯ(обработчик срабатывет на сомом вложенном элементе, 
//затем на родителеБ если он есть и т.д. выше и выше)
//пример:
const btn11 = document.querySelector('button'),
    overlay = document.querySelector('.overlay');

const deleteElemmm = (e) => {
    console.log(e.target);
    console.log(e.type);
};
//эти 2 строки поидее обрабатывают одно и то же действие
btn11.addEventListener('click', deleteElemmm);
overlay.addEventListener('click', deleteElemmm);

//можно сделать так (строки 58-61 заменить на)
// const deleteElemmm = (e) => {
//     console.log(e.currentTarget);
// };

//способ отмены всплытия(на практике обычно не используют)
const link = document.querySelector('a');
link.addEventListener('dick', (eventttt) => {
    eventttt.preventDefault();//помещаем в самое начало(отменили переход по ссылке)
    console.log(eventttt.target);
});

//если необходимо 1 функционал повесит на массив то массивои перебираем эти элементыц


