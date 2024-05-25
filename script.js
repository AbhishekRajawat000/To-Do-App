let input = document.querySelector("input");
let ul = document.querySelector("ul");
let button  = document.querySelector("button");

button.addEventListener("click", function(){
    let item = document.createElement('li');
    item.innerText = input.value;

    let delBtn = document.createElement("button");
    delBtn.textContent = "delete";
    delBtn.classList.add("delete");
   
    

    item.appendChild(delBtn);
    ul.appendChild(item);
    console.log(input.value);
    input.value = ""; 
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName=='BUTTON'){
        event.target.parentElement.remove();
    }
  
})