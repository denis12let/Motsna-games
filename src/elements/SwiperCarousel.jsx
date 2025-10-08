// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Mousewheel, FreeMode, EffectCoverflow } from 'swiper/modules';

// import 'swiper/css';
// import 'swiper/css/mousewheel';
// import 'swiper/css/free-mode';
// import 'swiper/css/effect-coverflow';

// import pre from '../assets/images/about/about-3.png';

// const carouselItems = [
//   {
//     id: 1,
//     color: '#018BCF',
//     image: pre,
//     description: 'The Sourdough Library in an immersive 3D-experience',
//     title: 'Puratos',
//     label: 'Web • 3D',
//   },
//   {
//     id: 2,
//     color: '#A374FF',
//     image: pre,
//     description: 'A purrfect immersive experience for Opti Life',
//     title: 'Versele Laga',
//     label: 'Web • 3D',
//   },
//   {
//     id: 3,
//     color: '#17F1D1',
//     image: pre,
//     description: 'Highlighting urban redevelopment in virtual reality',
//     title: 'Stad Sint-Niklaas',
//     label: 'Web • 360° photography • 360° video • 3D',
//   },
//   {
//     id: 4,
//     color: '#f4d446',
//     image: pre,
//     description: 'Building chemistry with potential candidates via an interactive web documentary',
//     title: 'BASF',
//     label: 'Web • 360° photography • 360° video',
//   },
//   {
//     id: 5,
//     color: '#6c59ea',
//     image: pre,
//     description: 'Gearing up: Ford Mustang of the future in virtual reality',
//     title: 'Ford',
//     label: 'Virtual reality • 360° video',
//   },
//   {
//     id: 6,
//     color: '#90BFD6',
//     image: pre,
//     description: 'Building brand loyalty through online design tool',
//     title: 'IKO',
//     label: 'Web • 3D',
//   },
//   {
//     id: 7,
//     color: '#FF6B6B',
//     image: pre,
//     description: 'Turning an Open Day into a covid-safe virtual experience',
//     title: 'Voka Open Bedrijvendag',
//     label: 'Web • 360° photography • 360° video',
//   },
// ];

// const SwiperCarousel = () => {
//   return (
//     <div className="swiper mySwiper">
//       <Swiper
//         modules={[Mousewheel, FreeMode, EffectCoverflow]}
//         direction="horizontal"
//         autoHeight={true}
//         spaceBetween={80}
//         slidesPerView={3}
//         grabCursor={true}
//         loop={true}
//         mousewheel={{
//           enabled: true,
//           forceToAxis: false,
//           invert: false,
//           sensitivity: 1,
//           thresholdDelta: 10,
//           eventsTarget: 'body',
//         }}
//         onSlideChange={() => console.log('slide change')}
//         freeMode={{
//           enabled: true,
//           momentum: true,
//           momentumBounce: true,
//           momentumRatio: 1,
//           momentumVelocityRatio: 1,
//         }}
//         coverflowEffect={{
//           rotate: 0, // Убираем вращение
//           stretch: -80, // Растягиваем слайды для панорамного эффекта
//           depth: 150, // Глубина 3D
//           modifier: 1.8, // Интенсивность эффекта
//           slideShadows: false, // Убираем тени для чистоты
//         }}
//       >
//         {carouselItems.map((item) => (
//           <SwiperSlide key={item.id} className="images">
//             <div data-color={item.color} className="image">
//               <img className="zoomed" src={item.image} alt={item.title} />
//             </div>
//             <div className="texts">
//               <p>{item.description}</p>
//               <h3>{item.title}</h3>
//               <span className="label">{item.label}</span>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// };

// export default SwiperCarousel;

import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';

import pre from '../assets/images/about/about-3.png';

const carouselItems = [
  {
    id: 1,
    color: '#018BCF',
    image: pre,
    description: 'The Sourdough Library in an immersive 3D-experience',
    title: 'Puratos',
    label: 'Web • 3D',
  },
  {
    id: 2,
    color: '#A374FF',
    image: pre,
    description: 'A purrfect immersive experience for Opti Life',
    title: 'Versele Laga',
    label: 'Web • 3D',
  },
  {
    id: 3,
    color: '#17F1D1',
    image: pre,
    description: 'Highlighting urban redevelopment in virtual reality',
    title: 'Stad Sint-Niklaas',
    label: 'Web • 360° photography • 360° video • 3D',
  },
  {
    id: 4,
    color: '#f4d446',
    image: pre,
    description: 'Building chemistry with potential candidates via an interactive web documentary',
    title: 'BASF',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 5,
    color: '#6c59ea',
    image: pre,
    description: 'Gearing up: Ford Mustang of the future in virtual reality',
    title: 'Ford',
    label: 'Virtual reality • 360° video',
  },
  {
    id: 6,
    color: '#90BFD6',
    image: pre,
    description: 'Building brand loyalty through online design tool',
    title: 'IKO',
    label: 'Web • 3D',
  },
  {
    id: 7,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
];

const SwiperCarousel = () => {
  return (
    <div className="swiper-area">
      <Swiper
        modules={[Mousewheel, FreeMode, EffectCoverflow]}
        effect="coverflow"
        direction="horizontal"
        spaceBetween={-120}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        centeredSlides={true}
        mousewheel={{
          enabled: true,
          forceToAxis: false,
          invert: false,
          sensitivity: 1,
          thresholdDelta: 10,
          eventsTarget: 'body',
        }}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumBounce: true,
          momentumRatio: 1,
          momentumVelocityRatio: 1,
        }}
        coverflowEffect={{
          rotate: 10, // Убираем вращение
          stretch: 0, // Растягиваем слайды для панорамного эффекта
          depth: -150, // Глубина 3D
          slideShadows: false, // Убираем тени для чистоты
        }}
        onSlideChange={() => console.log('slide change')}
        className="panorama-swiper"
      >
        {carouselItems.map((item) => (
          <SwiperSlide key={item.id} className="images">
            <div data-color={item.color} className="image">
              <img className="zoomed" src={item.image} alt={item.title} />
            </div>
            <div className="texts">
              <p>{item.description}</p>
              <h3>{item.title}</h3>
              <span className="label">{item.label}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperCarousel;
