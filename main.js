function changeText(){
    let text = document.getElementById("text")
    text.textContent = 'this is Text2';
    alert("Good Job");
}

function changeSize(){
    let text = document.getElementById("text")
    text.classList.toggle("changeSize");
}

function changeBackground(){
    let color =  document.getElementById("text")
    color.classList.toggle("BodyStyle");
}

function changeImg(){
    // let img = document.getElementById("Img")

    if( document.getElementById("Img").src == "" ){
        document.getElementById("Img").src = "https://i.pinimg.com/564x/04/70/70/0470707b8420a182bb767db4ba36068b.jpg";
    }
    else if( document.getElementById("Img").src == "https://i.pinimg.com/564x/04/70/70/0470707b8420a182bb767db4ba36068b.jpg" ){
       document.getElementById("Img").src = "https://i.pinimg.com/564x/95/f4/61/95f4614ab7fa00067d5cb3b5cc2747bd.jpg";
     }
    else{
        document.getElementById("Img").src = "https://i.pinimg.com/564x/04/70/70/0470707b8420a182bb767db4ba36068b.jpg";
    }

}
