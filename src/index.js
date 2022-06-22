import 'normalize.css';
import './styles/main.scss';
// import './styles/app.js/slider1';



// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function onResize(){
  if (window.innerWidth > 800) {

    swiper2.disable() // отклюить 
    document.querySelector('.mySwiper').classList.remove('swiper')
    document.querySelector('.slide_2').classList.remove('swiper')
    swiper.disable()
    const swiperWrapper = document.querySelector('.swiper-wrapper')
    const swiperSlides = swiperWrapper.querySelectorAll('.swiper-slide') // из блока выберает все дочерние блоки по классу
    
    const last4SwiperSlides = Array.from(swiperSlides).splice(0) // выбераем блоки из массива и 0 индекса
    console.log(last4SwiperSlides)
    
    
    
    last4SwiperSlides.forEach(slide => slide.setAttribute('style', ' ')); // замена содержимого атрибута class
    last4SwiperSlides.forEach(slide => slide.setAttribute('class', 's1')); // замена содержимого атрибута class
    //slide_2__swiper-wrapper

    const swiperWrapper2 = document.querySelector('.slide_2__swiper-wrapper')
    const swiperSlides2 = swiperWrapper2.querySelectorAll('.swiper-slide')
    const last4SwiperSlides2 = Array.from(swiperSlides2).splice(0)

    last4SwiperSlides2.forEach(slide => slide.setAttribute('style', ' ')); // замена содержимого атрибута class
    last4SwiperSlides2.forEach(slide => slide.setAttribute('class', 's1')); // замена содержимого атрибута class

    //slide_3__swiper-wrapper

    const swiperWrapper3 = document.querySelector('.slide_3__swiper-wrapper')
    const swiperSlides3 = swiperWrapper3.querySelectorAll('.swiper-slide')
    const last4SwiperSlides3 = Array.from(swiperSlides3).splice(0)

   

    last4SwiperSlides3.forEach(slide => slide.setAttribute('style', ' ')); // замена содержимого атрибута class
    last4SwiperSlides3.forEach(slide => slide.setAttribute('class', 's1')); // замена содержимого атрибута class

    document.querySelector('.name-service'). textContent = 'Ремонтные услуги'; // замена содержимого контейнера
  } else {
    swiper2.enable() // включить
    document.querySelector('.mySwiper').classList.add('swiper')
    document.querySelector('.slide_2').classList.add('swiper')
    swiper.enable()

    
    const ListContainers = document.querySelector('.slider3-wrapper')
    const nameService = ListContainers.getElementsByClassName('name-service')
    const priceService = ListContainers.getElementsByClassName('price-service')
    const deadline = ListContainers.getElementsByClassName('deadline')
    const zzz = Array.from(nameService).splice(0)
    const priceServiceResoult = Array.from(priceService).splice(0)
    const deadlineResoult = Array.from(deadline).splice(0)
    console.log(deadlineResoult)
    priceServiceResoult.forEach(slide => slide.textContent = 'Цена')
    deadlineResoult.forEach(slide => slide.textContent = 'Срок')
    zzz.forEach(slide => slide.textContent = 'Ремонтные услуги')

    document.querySelector('#slide3-1').classList.add('headen')
    

  }
} 



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

var swiper3 = new Swiper('.slide_3', {
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

//DOMContentLoaded
window.addEventListener('resize', () => {

  onResize();

})

onResize();