// const startbtn = document.getElementById('startbtn');
const easybtn = document.getElementById('easybtn');
const hardbtn = document.getElementById('hardbtn');
let check = 0;
let random = "";
let time = 60;
let timeFunc;
let gameFunc;
const timeWord = document.querySelector('.time');
window.onload=function(){
    const gamescreen= document.querySelector('.game-screen');

    for(let i=1;i<=25;i++){
        const div = document.createElement('div');
        div.classList.add('box');
        div.id = 'box'+i;
        div.addEventListener('click',(event)=>{
            let target = event.target;
            check=target.id;
            if(random==check){
                clearInterval(gameFunc);
                clearInterval(timeFunc);
                timeWord.innerHTML = '성공 : '+(time)+'초 남음';
            }
        });
        gamescreen.appendChild(div);
    }
}
// startbtn.addEventListener('click',()=>{
//     console.log('start');
//     gameFunc;
//     timeFunc;
//     // gameFunc = setInterval(function(){
//     //     num = Math.floor(Math.random()*25)+1;
//     //     random = 'box'+num;
//     //     let box = document.getElementById(random);
//     //     box.style.backgroundColor = 'black';
//     //     setTimeout(function(){box.style.backgroundColor = 'white';},500);
//     // },1000);
//     // timeFunc = setInterval(function(){
//     //     time++;
//     //     timeWord.innerHTML = 60 - time;
//     // },1000);
// });
easybtn.addEventListener('click',()=>{
    clearInterval(gameFunc);
    clearInterval(timeFunc);
    time=5;
    document.querySelector('.level').innerHTML = 'level : easy';
    gameFunc = setInterval(gameEasy,1000);
    timeFunc = setInterval(timeFun,1000);
});
hardbtn.addEventListener('click',()=>{
    clearInterval(gameFunc);
    clearInterval(timeFunc);
    time=60;
    document.querySelector('.level').innerHTML = 'level : hard';
    gameFunc = setInterval(gameHard,500);
    timeFunc = setInterval(timeFun,1000);
});
function gameEasy(){
    num = Math.floor(Math.random()*25)+1;
    random = 'box'+num;
    let box = document.getElementById(random);
    box.style.backgroundColor = 'black';
    setTimeout(function(){box.style.backgroundColor = 'white';},500);
    if(time===0) {
        console.log('stop');
        stop();
    }
}
function gameHard(){
    num = Math.floor(Math.random()*25)+1;
    random = 'box'+num;
    let box = document.getElementById(random);
    box.style.backgroundColor = 'black';
    setTimeout(function(){box.style.backgroundColor = 'white';},250);
    if(time===0) {
        console.log('stop');
        stop();
    }
}
function timeFun(){
    time--;
    timeWord.innerHTML = time;
}
function stop(){
    clearInterval(gameFunc);
    clearInterval(timeFunc);
    timeWord.innerHTML = 'Fail';
}