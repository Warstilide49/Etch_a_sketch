const container=document.querySelector('#container');

let n=7;
for(i=0;i<n;i++){
  row_grid=document.createElement('div');
  row_grid.classList.add('row');
  //row_grid.style.border='solid red 2px';
  container.appendChild(row_grid);
  for(j=0;j<n;j++){
    let element=document.createElement('div');
    element.classList.add('child');
    element.style.border='solid red 2px';
    row_grid.appendChild(element);    
  }
}
