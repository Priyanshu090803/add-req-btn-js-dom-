let btn=document.querySelector('button');
let hed4=document.querySelector('.hed4');
let a=0;
btn.addEventListener('click',function(){
    if(a==0){
    btn.innerText='Cancel req'
    btn.style.backgroundColor="red"
    btn.style.fontSize='15px'
    hed4.innerText='Cancel req'
    a=1;
    }
    else{
        btn.innerText='Add friend'
        btn.style.backgroundColor='rgb(42, 105, 42)'
        btn.style.fontFamily= 'Arial, Helvetica, sans-serif'
        btn.style.fontSize='15px'
        hed4.innerText='Send req'
        a=0;
    }
})