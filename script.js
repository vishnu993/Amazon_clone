const imgs = document.querySelectorAll('.header-slider ul img');
const prev_btn = document.querySelectorAll('.control_prev');
const next_btn = document.querySelectorAll('.control_next');

let n=0;

function changeSlid(){
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.display = 'none';
    }
    imgs[n].style.display = 'block';
    
}
changeSlid();
prev_btn.addevntlistner('click, (e)=>{
     if(n>0){
        n--;
       }else{
         n =imgs.length- 1;
       }
changeSlid();

    })
