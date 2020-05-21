const btnElm = document.querySelector('.containerBtn--color');



btnElm.addEventListener('click',() =>{

    let red = bar1.value *15;
    let green = bar2.value *15;
    let blue = bar3.value *15;

    btnElm.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

        //console.log(red);
       // console.log(green);
       // console.log(blue);
       
} )