// $(document).ready(function()
// {
//     $('.menu-toggle').click(function(){
//         $('nav').toggleClass('active');
//     });
// });

var delayInMilliseconds = 2000; 
// var delayInMilliseconds3s = 5000; 

setTimeout(function loadingCircle() {
    var loader = document.querySelector('#cover');
    loader.classList.add('hide');
    var visible = document.querySelector(".myDiv");
    visible.classList.add('visible');
}, delayInMilliseconds);

// setTimeout(function ZoomeImage() {
//     var loader = document.querySelector('.parallax-img');
//     loader.classList.add('zoom-out');
// }, delayInMilliseconds3s);

// var imgZoom = $('parallax-img');
// $(window).load(function () {
//     imgZoom.removeClass('zoom-in');
// }, 4000);

// function myFunction() {
//     myVar = setTimeout(showPage, 3000);
//   }
  
//   function showPage() {
//     var loader = document.querySelector('#cover');
//       loader.classList.add('hide');
//     var visible = document.querySelector(".myDiv");
//     visible.classList.add.apply('visible');
//   }


function scrollAppear1(){
    var aboutEjan = document.querySelector('.intro-ejan-1');
    var introEjan = aboutEjan.getBoundingClientRect().top;
    console.log(introEjan);
    var screenPosition = window.innerHeight / 1.5;

    if(introEjan < screenPosition){
        aboutEjan.classList.add('about-ejan-appear');
    }
}

function hide() {
    var thumb = document.getElementById('bg-mask');
    thumb.classList.add('disapear');
}

function scrollAppear2(){
    var aboutEjan = document.querySelector('.intro-ejan-2');
    var introEjan = aboutEjan.getBoundingClientRect().top;
    console.log(introEjan);
    var screenPosition = window.innerHeight / 1.5;

    if(introEjan < screenPosition){
        aboutEjan.classList.add('about-ejan-appear');
    }

 


}

function eventAppear(){
    var aboutEvent = document.querySelector('#aniUp-1');
 
    var introEvent = aboutEvent.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
    if(introEvent < screenPosition){
        aboutEvent.classList.add('about-event-appear');
    }

}


function eventAppear1(){
    var aboutEvent = document.querySelector('#aniUp-2');
 
    var introEvent = aboutEvent.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
    if(introEvent < screenPosition){
        aboutEvent.classList.add('about-event-appear');
    }

}


function companyAppear(){
    var aboutyoko = document.querySelector('.intro-company-yoko');
 
    var introYoko = aboutyoko.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
    if(introYoko < screenPosition){
        aboutyoko.classList.add('about-company-appear');
    }

}

function companyAppear1(){
    var aboutyoko = document.querySelector('.intro-company-sap');
 
    var introYoko = aboutyoko.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
    if(introYoko < screenPosition){
        aboutyoko.classList.add('about-company-appear');
    }

}

function companyAppear2(){
    var aboutyoko = document.querySelector('.intro-company-vn');
 
    var introYoko = aboutyoko.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
    if(introYoko < screenPosition){
        aboutyoko.classList.add('about-company-appear');
    }

}

function companyAppear3(){
    var aboutyoko = document.querySelector('.intro-company-sen');
 
    var introYoko = aboutyoko.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.2;
    if(introYoko < screenPosition){
        aboutyoko.classList.add('about-company-appear');
    }

}


// function scrollAppear3(){
//     var aboutCompany = document.querySelector('.introCopmany');
//     var introCompany = aboutCompany.getBoundingClientRect().top;
//     var screenPosition = window.innerHeight / 1.5;
//     if(introCompany < screenPosition){
//         aboutCompany.classList.add('introCompanyAppear');
//     }
// }
    
const parallax = document.querySelector('.parallax-img');
const UrbanLogo = document.querySelector('.Urban-logo');
const tl = new TimelineMax();

tl.fromTo(parallax, 2, { opacity: 0} , { opacity: .7, ease: Power2.easeInOut }).delay(2)
    .fromTo(UrbanLogo, .5, {opacity: 0, y: 80}, {opacity: 1, y: 0})




window.addEventListener('scroll', scrollAppear1);
window.addEventListener('scroll', scrollAppear2);
window.addEventListener('scroll', eventAppear);
window.addEventListener('scroll', eventAppear1);
window.addEventListener('scroll', companyAppear);
window.addEventListener('scroll', companyAppear1);
window.addEventListener('scroll', companyAppear2);
window.addEventListener('scroll', companyAppear3);
