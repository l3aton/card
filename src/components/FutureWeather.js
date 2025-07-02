import '../css/FutureWeather.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const FutureWeather = ({data}) => {
    if (!data) return <p>Завантаження...</p>;



    console.log(data.list);
    return(
        <Swiper
            modules={[Navigation]}
            spaceBetween={10}
            slidesPerView={2}
            navigation
             breakpoints={{
      768: {
        slidesPerView: 5,
        spaceBetween: 50,
      }
    }}
        >

         {data.list.map((item, index) => (
            <SwiperSlide key={index}>
                 <div className='future-w-card'>
                 <img src= {`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} alt="icon"  className='future-w-img'/>
                 <p>{((item.main['temp'])-273.15).toFixed(1)  + ' °C'}</p>
                  <p>{item.weather[0].description}</p>
                 <p>{item['dt_txt']}</p>
                 </div>
            </SwiperSlide>
      ))}
    </Swiper>
    )
}

export default FutureWeather;