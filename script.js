let circle= document.querySelector('.circle');

let colors= ['black', 'blue', 'cyan', 'lightgreen', 'gray', 'yellow', 'purple', 'darkblue', 'pink', 'brown', 'orange', 'darkgreen', 'violet', 'salmon'];

let colorbtn= document.querySelector('.colorbtn');

colorbtn.addEventListener('click', function(){
    let colorindex = parseInt(Math.random()*colors.length);
    circle.style.backgroundColor= colors[colorindex];
});

let square= document.querySelector('#square');

let shapebtn = document.querySelector('.shapebtn');

let shapes=["round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point"];
shapebtn.addEventListener('click', function(){

    let shapeindex = parseInt(Math.random()*shapes.length);
    // console.log(shapeindex);
    square.setAttribute('id',shapes[shapeindex]);
    let colorindex = parseInt(Math.random()*colors.length);
    square.style.backgroundColor= colors[colorindex];
});

