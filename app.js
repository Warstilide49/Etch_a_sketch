const container=document.querySelector('#sketchboard');
let element_array=[];
let row_array=[];
n=16;

function create_grid(n){
  for(i=0;i<n;i++){
    row_grid=document.createElement('div');
    row_grid.classList.add('row');
    //row_grid.style.border='solid red 2px';
    container.appendChild(row_grid);
    row_array.push(row_grid);
    for(j=0;j<n;j++){
      element=document.createElement('div');
      element.classList.add('child');
      //element.style.border='solid red 2px';
      row_grid.appendChild(element);
      element_array.push(element);
      element.addEventListener('mouseover',hover_effect);    
    }
  }
}

create_grid(n);
colour='black';

function hover_effect(){
  if (colour=='black'){
    this.style.backgroundColor='rgb(0,0,0)';
  }
  else if(colour=='white'){
    this.style.backgroundColor='#77b5d9';
  }
  else{
    colour_1=Math.floor(Math.random()*255);
    colour_2=Math.floor(Math.random()*255);
    colour_3=Math.floor(Math.random()*255);
    this.style.backgroundColor=`rgb(${colour_1.toString()},${colour_2.toString()},${colour_3.toString()})`;
  }
}

const reset_button=document.getElementById('reset');
reset_button.addEventListener('click',reset);
function reset(){
  n=Number(window.prompt("Type a number"));
  row_array.forEach((row)=>{
    row.remove();
    });
  create_grid(n);
  }

const colour_button=document.getElementById('colour');
colour_button.addEventListener('click',colored);
function colored(){
  colour='yup';
}

const bw_button = document.getElementById('b&w');
bw_button.addEventListener('click',bw);
function bw(){
  colour='black';
}

const eraser_button = document.getElementById('eraser');
eraser_button.addEventListener('click',eraser);
function eraser(){
  colour='white';
}

