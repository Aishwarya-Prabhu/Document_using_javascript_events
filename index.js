var tupple=1;
/* Image */
let img = document.getElementsByClassName("imageload");
let croppedImg = document.getElementsByClassName("imgcropped");
let cropDiv = document.getElementsByClassName("cropping");
/* Container */
let container = document.getElementsByClassName("container");
/* Crop Button */
let cropButton = document.getElementsByClassName("crop");
/* Adding event listener */
cropButton[0].addEventListener("click",showGrid);

 /* Flag */
 let flag = {
   1: false, 2: false, 3: false, 4: false,5:false,6:false,7:false,8:false,9:false
 };

         /* Display grid */
function showGrid(event){
    
  container[0].style.display = "grid";
  if(tupple === 1){
    croppedImg[0].style.clip = "initial";
      makeResizableDiv('.container');
      tupple++;
  }
  else{
      const items = document.querySelectorAll(".grid-item");
      container_width = parseFloat(getComputedStyle(container[0], null).getPropertyValue('width').replace('px', ''));
      container_height = parseFloat(getComputedStyle(container[0], null).getPropertyValue('height').replace('px', ''));
      container_top = parseFloat(getComputedStyle(container[0], null).getPropertyValue('top').replace('px', ''));
      container_left = parseFloat(getComputedStyle(container[0], null).getPropertyValue('left').replace('px', ''));
      img_width = 500;
      img_height = 500;
      img_top = 0;
      img_left = 0;
      
      if(flag[2] === true){
        img_top = container_top - 70;
      }
      if(flag[4] === true){
        img_left = container_left;
      }
      if(flag[6] === true){
        img_width = container_width ;
      }
      if(flag[8] === true){
        img_height = container_height ;
      }
      if(flag[1] === true){
        img_left = container_left;
        img_top = container_top - 70;
      }
      if(flag[3] === true){
        img_left = container_left;
        img_top = container_top - 70;
      }
      if(flag[7] === true){
        img_height = container_height + 50;
        img_left = container_left;
      }
      if(flag[9] === true){
        img_height = container_height ;
        img_width = container_width ;
      }
      if(flag[5] === true){
        img_height = container_height;
        img_width = container_width ;
        img_left = container_left;
        img_top = container_top - 70;
      }
      croppedImg[0].style.clip = "rect("+ img_top +"px,"+ img_width +"px,"+ img_height +"px,"+ img_left +"px)";
      flag = {
        1: false, 2: false, 3: false, 4: false,5:false,6:false,7:false,8:false,9:false
      };
      container[0].style.display= "none";
      container[0].style.width = "500px";
      container[0].style.height = "500px";
      container[0].style.top = "80px";
      container[0].style.left = "7px";
      tupple = 1;
  }
}

/* Remove grid */
function clear(event){
  
  container[0].style.display= "none";
  
}
/* Grid element */
let gridItem = document.getElementsByClassName("grid-item");

let rect = container[0].getBoundingClientRect();
let imgRect = img[0].getBoundingClientRect();
console.log( " "+ rect.left + " " + rect.top + " " + rect.right + " " + rect.bottom);
console.log( " "+ imgRect.left + " " + imgRect.top + " " + imgRect.right + " " + imgRect.bottom);

/* Resizeable grid */
function makeResizableDiv(div) {
const element = document.querySelector(div);
const items = document.querySelectorAll(".grid-item");
const minimum_size = 20;
let original_width = 0;
let original_height = 0;
let original_x = 0;
let original_y = 0;
let original_mouse_x = 0;
let original_mouse_y = 0;
for (let i = 0;i < items.length; i++) {
      /* Initializing variables */
      const currentResizer = items[i];
      currentResizer.addEventListener('mouseup', stopResize);
      currentResizer.addEventListener('mousedown', function(e) {
      e.preventDefault();
      original_width = parseFloat(getComputedStyle(element, null).getPropertyValue('width').replace('px', ''));
      original_height = parseFloat(getComputedStyle(element, null).getPropertyValue('height').replace('px', ''));
      original_x = element.getBoundingClientRect().left;
      original_y = element.getBoundingClientRect().top;
      original_mouse_x = e.pageX;
      original_mouse_y = e.pageY;
      currentResizer.addEventListener('mousemove', resize);
  })

  /* Resizing the grid based on mouse func */
  function resize(e) {
      
    if (currentResizer.id === "9") {
      const width = original_width + (e.pageX - original_mouse_x);
      const height = original_height + (e.pageY - original_mouse_y);
      if (width > minimum_size) {
        element.style.width = width + 'px';
      }
      if (height > minimum_size) {
        element.style.height = height + 'px';
      }
      flag[9] = true;
    }
    else if (currentResizer.id === "7") {
      const height = original_height + (e.pageY - original_mouse_y);
      const width = original_width - (e.pageX - original_mouse_x);
      if (height > minimum_size) {
        element.style.height = height + 'px';
      }
      if (width > minimum_size) {
        element.style.width = width + 'px';
        element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
      }
      flag[7] = true;
    }
    else if(currentResizer.id === "1"){
      const height = original_height - (e.pageY - original_mouse_y );
      const width = original_width - (e.pageX - original_mouse_x);
      if (height > minimum_size) {
        element.style.height = height + 'px';
        element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
      }
      if (width > minimum_size) {
        element.style.width = width + 'px';
        element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
      }
      flag[1] = true;
    }
    else if(currentResizer.id === "3"){
      const width = original_width + (e.pageX - original_mouse_x);
      const height = original_height - (e.pageY - original_mouse_y);
      if (width > minimum_size) {
        element.style.width = width + 'px';
        element.style.right = original_x + (e.pageX - original_mouse_x) + 'px';
      }
      if (height > minimum_size) {
        element.style.height = height + 'px';
        element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
      }
      flag[3] = true;
    }
    else if(currentResizer.id === "2"){
      const height = original_height - (e.pageY - original_mouse_y);
      if (height > minimum_size) {
          element.style.height = height + 'px';
          element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
      }
      flag[2] = true;
    }
    else if(currentResizer.id === "4"){
      const width = original_width - (e.pageX - original_mouse_x);
      if (width > minimum_size) {
          element.style.width = width + 'px';
          element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
      }
      flag[4] = true;
    }
    else if(currentResizer.id === "6"){
      const width = original_width - (original_mouse_x - e.pageX);
      if (width > minimum_size) {
          element.style.width = width + 'px';
          element.style.right = original_x + (original_mouse_x - e.pageX) + 'px';
      }
      flag[6] = true;
    }
    else if(currentResizer.id === "8"){
      const height = original_height - (original_mouse_y - e.pageY);
      if (height > minimum_size) {
          element.style.height = height + 'px';
          element.style.bottom = original_y + (original_mouse_y - e.pageY ) + 'px';
      }
      flag[8] = true;
    }
    else if(currentResizer.id === "5"){
      element.style.top = original_y + (e.pageY - original_mouse_y) + 'px';
      element.style.left = original_x + (e.pageX - original_mouse_x) + 'px';
      element.style.bottom = original_y + (original_mouse_y - e.pageY ) + 'px';
      element.style.right = original_x + (original_mouse_x - e.pageX) + 'px';
      flag[5] = true;
    }
    
  }
/* Terminate resizing of grid  */
  function stopResize() {
    currentResizer.removeEventListener('mousemove', resize);
  }

document.addEventListener("unload",function(){
  currentResizer.removeEventListener("mousedown",resize);
  currentResizer.removeEventListener("mouseup",stopResize);
})
}

}