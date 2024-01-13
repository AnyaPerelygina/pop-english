import Swiper from '../../vendor/swiper';
import {isMobile} from '../../utils/is-mobile';

const createFeedbackSlider = () => {
  let swiper = new Swiper('.feedback__swiper', {
    direction: 'vertical',
    slidesPerView: 1,
    loop: true,
    spaceBetween: 10,
    speed: 1200,
    allowTouchMove: isMobile(),
    navigation: {
      nextEl: '.feedback__swiper-next',
      prevEl: '.feedback__swiper-prev',
    },
  });

  return swiper;
};

export {createFeedbackSlider};
