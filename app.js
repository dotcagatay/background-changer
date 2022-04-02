const body = document.querySelector('body');
const button = document.querySelector('button');
const colors = [
    'black', 
    'yellow', 
    'green', 
     '#c7bf67',
    '#7b55cf',
     '#de4747',
    '#2963ab',
];

button.addEventListener('click', changeBackground);

let order = 0;

 function changeBackground() {
     /* random 
     const randomNumber = Math.floor(Math.random() * color.length);
     const renk = color[randomNumber];
     console.log(randomNumber, renk);
    body.style.backgroundColor = renk;
    // */

    // with order
    console.log(order);
    if (order == 7) order = 0;
    const renk = colors[order];
    order++;
    body.style.backgroundColor = renk;





}
