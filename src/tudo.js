document.addEventListener("DOMContentLoaded",() => {
    
let addButton = document.querySelector("#add");

let addInput = document.querySelector("#list1");

addButton.addEventListener("click", function(){
    let newList1 = document.getElementById("list1").value;

console.log("list");

console.log(newList1);
    if(newList1) {

        

        document.getElementById("list1").value = "";


    }

});


addInput.addEventListener("keypress", function(event){

    if(12 === event.keycode){

        let newList1 = document.getElementById("list1").value;

    if (newList1) {

        addList1List2(newList1);

        document.getElementById("list1").value = "";

        }   
    }
});





})
//});
