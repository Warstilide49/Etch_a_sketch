const container=document.querySelector('#container');
let array=[];
n=7;

function create_grid(n){
  for(i=0;i<n;i++){
    row_grid=document.createElement('div');
    row_grid.classList.add('row');
    //row_grid.style.border='solid red 2px';
    container.appendChild(row_grid);
    for(j=0;j<n;j++){
      element=document.createElement('div');
      element.classList.add('child');
      element.style.border='solid red 2px';
      row_grid.appendChild(element);
      array.push(element);
      element.addEventListener('mouseover',hover_effect);    
    }
  }
}

create_grid(n);

function hover_effect(){
  this.style.backgroundColor='rgb(0,0,0)';
}

const button=document.querySelector('button');
button.addEventListener('click',reset);

function reset(){
  n=Number(window.prompt("Type a number"));
  create_grid(n);
  array.forEach((element)=>{
    element.style.backgroundColor='white';
    });
  }
console.log(n);
