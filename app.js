
var importaint = document.getElementById("importaint")

function todo(){
    var inputTodo = document.getElementById("inputTodo")
    
    if(!inputTodo.value){
        inputTodo.style.border="solid 1px red"
        Swal.fire({
            title: 'Error!',
            text: 'Fill Input Value!',
            icon: 'error',
            confirmButtonText: 'Cool'
          })
        return
    }
     else{
        inputTodo.style.border="solid 1px green"
    // 
    //    Main card
    var mainCard = document.createElement("div")
    mainCard.setAttribute("class","cardMain")

    //    input Value
    var para = document.createElement("p")
    para.className="cardMain p"
    para.innerHTML= inputTodo.value
    mainCard.append(para)
    

//     delete button
    var firstIcon = document.createElement("section")
    firstIcon.setAttribute("class","first button")
    var deltBtn= document.createElement("button")
    deltBtn.innerHTML = "DELETE"
    deltBtn.setAttribute("onclick","deletbtn(this)")
    firstIcon.appendChild(deltBtn)
    mainCard.append(firstIcon)

//       Edit button
    var SecIcon = document.createElement("section")
    SecIcon.setAttribute("class","sec")
    var editbtn = document.createElement("button")
    editbtn.innerHTML = "EDIT"
    editbtn.setAttribute("onclick","editTodo(this)")
    SecIcon.appendChild(editbtn)
    mainCard.append(SecIcon)


  
    // console.log(mainCard)
 
   
        inputTodo.value =""
        
        importaint.appendChild(mainCard)
        // importaint.style.height="auto"
     }

}
function deletbtn(ele){
    
console.log(ele.parentNode.parentNode.remove())
}

function editTodo(ele){
     var edit = prompt("edit Todo",ele.parentNode.parentNode.firstElementChild.innerHTML)
    console.log(ele.parentNode.parentNode.firstElementChild.innerHTML = edit)
}

function deletAll(){
    importaint.innerHTML = ""
}