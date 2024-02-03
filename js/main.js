"use strict"
$('.side-nav i').click(function(){
    $('.barText').slideUp(5,function(){
        $('.barText').slideDown(1500);
        $('.barText').slideUp(1000000)
    })
    const left_ =$('.side-nav-inner').innerWidth();
    if($('.side-nav').css('left') == '0px' ){
        $('.side-nav').css('left',-left_)
      
    }else{
       $('.side-nav').css('left',0)
    }
})



let rowHome = document.getElementById('rowHome');

async function getMovies(term) {
    rowHome.innerHTML = "";
   
    $("#loading").fadeIn(500)
    let response = await fetch(`https://api.themoviedb.org/3/${term}?api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`)
    response = await response.json()
    console.log(response);
    displayMovies(response.results);
    $("#loading").fadeOut(500)
}
async function getSearchMovies(term) {
    rowHome.innerHTML = "";
   
    $("#loading").fadeIn(500)
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${term}&api_key=a295c2fda0d44898d34830970fce7edc&language=en-US&include_adult=false`)
    response = await response.json()
    console.log(response);
    displayMovies(response.results);
    $("#loading").fadeOut(500)
}

function displayMovies(arr) {
    let cartoona = "";
   
    for (let i = 0; i < arr.length; i++) {
        let rate =arr[i].vote_average.toFixed(1)
        cartoona += 
        `<div  class="showCard col-lg-4 col-12 position-relative item overflow-hidden rounded rounded-3">
        <img  src="https://image.tmdb.org/t/p/w500${arr[i].poster_path}" class="w-100 imgCard rounded-3  bg-black ">
        <div  class=" bg-dark h-100  textMovie bg-opacity-50 text-white" >
         <h2  class="titleCard text-center text-white fs-4 fw-bold pt-2">${arr[i].original_title}</h2>
         <p  class="textCard px-3">${arr[i].overview} </p>
         <div class="rateCard">
            <p class="px-3">Release Date : <span>${arr[i].release_date}</span></p>
            <p class="vote ms-3 px-3"> ${rate}</p>
            
         </div>
    
        </div>

    </div>

        `
    }
    rowHome.innerHTML = cartoona
    /////////////hover/////////////////////
    $('.showCard').hover(function(){
       $(this).find($(".textMovie")).css({"opacity":"1","visibility":"visible"})
       $(this).find($('.titleCard')).slideUp(0,function(){
            $('.titleCard').slideDown(2000);
            $('.titleCard').slideUp(20000000000000000000000000000)
        })
        $(this).find($('.textCard')).fadeOut(0,function(){
            $('.textCard').fadeIn(4000);
            $('.textCard').fadeOut(20000000000000000000000000000)
        })
        $(this).find($('.rateCard')).slideUp(0,function(){
            $('.rateCard').slideDown(2000);
            $('.rateCard').slideUp(20000000000000000000000000000)
        }
        )
    
        
    },
    function(){
        $(".textMovie").css({"opacity":"0","visibility":"hidden"})
       // $(".textMovie").animate({left:"-100%"},2000)
       
    }
    );
    
}

async function showdata(){
    let movieData = await getMovies('trending/movie/day')
    
    displayMovies(movieData)
}
  
showdata()

/////////////////////////////////////////////
let emailInput = document.getElementById('emailInput');
let phoneInput = document.getElementById('phoneInput');
let passwordInput = document.getElementById('passwordInput');
let repasswordInput = document.getElementById('repasswordInput');

function validMail() {
  var x =/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/ ;
  if (x.test(emailInput.value) === true) {
    return true;
  } else {
    return false;
  }
}
function valiPhone() {
  var xx =/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/;
  if (xx.test(phoneInput.value) === true) {
    return true;
  } else {
    return false;
  }
}
function valiPassword() {
    var pass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (pass.test(passwordInput.value) === true) {
      return true;
    } else {
      return false;
    }
  }

$(".error").css({"display":"none"})
$(".error2").css({"display":"none"})
$(".error3").css({"display":"none"})
$(".error4").css({"display":"none"})
function sumbitInput(){
    if (validMail() === true){
        $(".error").css({"display":"none"})
    }
   else{

    $(".error").css({"display":"block"})
   
   }
    ///////////////////
   if (valiPhone() === true){
    $(".error2").css({"display":"none"})
    }
   else{

   $(".error2").css({"display":"block"})

   }
   /////////////////
   if (valiPassword() === true){
    $(".error3").css({"display":"none"})
    }
   else{

   $(".error3").css({"display":"block"})

   }
   //////////////////////
   if (passwordInput.value!==repasswordInput.value) {
    $(".error4").css({"display":"block"})
   }
   else{

    $(".error4").css({"display":"none"})
 
    }
  }
