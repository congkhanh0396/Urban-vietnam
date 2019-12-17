// $(document).ready(function()
// {
//     $('.menu-toggle').click(function(){
//         $('nav').toggleClass('active');
//     });
// });


function scrollAppear1(){
    var aboutEjan = document.querySelector('.intro-ejan-1');
    var introEjan = aboutEjan.getBoundingClientRect().top;
    console.log(introEjan);
    var screenPosition = window.innerHeight / 1.5;

    if(introEjan < screenPosition){
        aboutEjan.classList.add('about-ejan-appear');
    }
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

function scrollAppear3(){
    var aboutCompany = document.querySelector('.introCopmany');
    var introCompany = aboutCompany.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
    if(introCompany < screenPosition){
        aboutCompany.classList.add('introCompanyAppear');
    }
}
    


window.addEventListener('scroll', scrollAppear1);
window.addEventListener('scroll', scrollAppear2);
window.addEventListener('scroll', scrollAppear3);

