let score= JSON.parse(localStorage.getItem('score'));

if(score === null)
{
  score={
    wins:0,
    loses:0,
    tie:0
  } 
}

document.querySelector('.js-rock-button')
  .addEventListener('click',()=>{
    playgame('rock');
  });

  document.querySelector('.js-scissor-button')
    .addEventListener('click',()=>{
      playgame('scissor')
    });

document.querySelector('.score_display').innerHTML=`wins ${score.wins} loses ${score.loses} tie ${score.tie}`;
let picks=document.querySelector('.js-choice');
let res=document.querySelector('.js-result');

let yourchoice='';

function computerMove(){
let randomvalue=Math.random();

let computerchoice='';
if(randomvalue>0 && randomvalue<=1/3)
{
  computerchoice='rock';
}
else if(randomvalue>1/3 && randomvalue<=2/3){
  computerchoice='paper';
}
else{
  computerchoice='scissor';
}
return computerchoice;
}
let result='';



function playgame(yourchoice)
{

 let computerchoice=computerMove();

    if(yourchoice==='rock'){
    if(computerchoice==='rock')
    {
      result='tie';
    }
    else if(computerchoice==='paper')
    {
      result='you lost';
    }
    else if(computerchoice==='scissor')
    {
      result='you won';
    }
  }
  else if(yourchoice==='paper'){
    if(computerchoice==='rock')
    {
      result='you won';
    }
    else if(computerchoice==='paper')
    {
      result='tie';
    }
    else if(computerchoice==='scissor')
    {
      result='you lost';
    }
  }
    else if (yourchoice==='scissor')
    {
      if(computerchoice==='rock')
      {
        result='you lost';
      }
      else if(computerchoice==='paper')
      {
        result='you won';
      }
      else if(computerchoice==='scissor')
      {
        result='tie';
      }
    }

   picks.innerHTML=`your choice <img src='img/${yourchoice}-emoji.png'> - <img src='img/${computerchoice}-emoji.png'> computer choice`;

    if(result==='you won')
    {
      score.wins+=1;
    }
    else if (result==='you lost')
    {
      score.loses+=1;
    }
    else if(result==='tie')
    {
      score.tie+=1;
    } 

    res.innerHTML=`${result}`;
    
   localStorage.setItem('score',JSON.stringify(score));

   document.querySelector('.score_display').innerHTML=`wins ${score.wins} loses ${score.loses} tie ${score.tie}`;


  // alert(`your choice is ${yourchoice}.computer choice is ${computerchoice}.${result}
  //   wins ${score.wins} loses ${score.loses} tie ${score.tie} ` );
}

let autoplay_id;
let is_autoplaying=false;

function autoplay()
{
  if(!is_autoplaying)
  {
    autoplay_id=setInterval(function()
    {
        let yourchoice_auto=computerMove();
        playgame(yourchoice_auto);
    },1500);
    is_autoplaying=true;
  }
  else{
    clearInterval(autoplay_id);
    is_autoplaying=false;
  }
  
  let autotext=document.querySelector('.js_autoplay_button');
  // autotext.classList.toggle('stop');

  if(autotext.innerHTML==='autoplay')
  {
    autotext.innerHTML='stop';
  }
  else{
    autotext.innerHTML='autoplay';
  }

}