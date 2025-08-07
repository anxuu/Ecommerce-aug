import './Carousel.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



import { Navigation, Pagination, Autoplay } from 'swiper/modules';

function Carousel() {

    return (
        <>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop={true}


            >

                <SwiperSlide>
                    <img src="/product-1-slider.jpg" alt="Product 1" className='imageStyle' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/product-2-slider.jpg" alt="Product 2" className='imageStyle' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/product-3-slider.jpg" alt="Product 3" className='imageStyle' />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/ansar-ecommerce-banner.jpg" alt="Ansars" className='imageStyle' />
                </SwiperSlide>
            </Swiper>
        </>
    );
}

export default Carousel;