import 'normalize.css';
import './styles/main.scss';
// import './styles/app.js/slider1';



// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

var swiper = new Swiper(".mySwiper", {
    modules: [Navigation, Pagination],
    slidesPerView: 1,
    spaceBetween: 10,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
   
  });


  //

// init Swiper:
var swiper2 = new Swiper('.slide_2', {
  modules: [Navigation, Pagination],
  // configure Swiper to use modules
  slidesPerView: 1,
  spaceBetween: 10,
  freeMode: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },



});


window.addEventListener('resize', ()=>{
 
  if (window.innerHeight < 800){
    swiper2.disable()
  } else{
    swiper2.enable()
  }

})