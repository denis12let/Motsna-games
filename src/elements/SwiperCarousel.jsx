import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, FreeMode, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/free-mode';
import 'swiper/css/effect-coverflow';

import pre from '../assets/images/forest.png';

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
    id: 8,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 9,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 10,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 11,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 12,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 13,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 14,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 15,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 16,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 17,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 18,
    color: '#FF6B6B',
    image: pre,
    description: 'Turning an Open Day into a covid-safe virtual experience',
    title: 'Voka Open Bedrijvendag',
    label: 'Web • 360° photography • 360° video',
  },
  {
    id: 19,
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
        spaceBetween={60}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        preloadImages={true}
        loopAdditionalSlides={6}
        lazy={false}
        centeredSlides={true}
        speed={200}
        freeMode={{
          enabled: true,
          momentum: true,
          momentumRatio: 0.1,
          momentumBounce: true,
          momentumBounceRatio: 0.8,
          minimumVelocity: 1,
          sticky: false,
        }}
        mousewheel={{
          enabled: true,
          forceToAxis: false,
          invert: false,
          sensitivity: 1,
          eventsTarget: 'body',
        }}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: -200,
          modifier: 0.5,
          slideShadows: false,
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
