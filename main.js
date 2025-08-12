let task_input = document.getElementById("task_input");
let task_btn = document.getElementById("task_btn");
let no_tasks = document.getElementById("no_tasks");
let all_tasks = document.getElementById("all_tasks");

let checkEmpty = ()=>{

    if(all_tasks.childElementCount == 0){

        no_tasks.classList.remove("none");
    }else{
        no_tasks.classList.add("none");
    }
}

let add_task = ()=> {


no_tasks.classList.add("none");

let task_value = task_input.value ;
 
all_tasks.innerHTML +=`
<div class='alert alert-info'> ${task_value}
<i class=" delete float-end fa-solid fa-trash-can"></i>
</div>

`;

task_input.value = "";
checkEmpty();

};

task_btn.addEventListener("click", add_task);
document.addEventListener("click",function(event){


if(event.target.classList.contains("delete")){

    event.target.parentElement.remove();
    checkEmpty();
}


})

