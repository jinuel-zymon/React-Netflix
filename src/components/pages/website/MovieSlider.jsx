import { devImgPath } from '@/components/helpers/functions-general'
import { ChevronLeft, ChevronRight, Dot, Play } from 'lucide-react'
import React from 'react'
import Slider from 'react-slick'

const MovieSlider = ({title="", isTopTen=true}) => {

  function SampleNextArrow(props) {

    const { className, style, onClick } = props;
    return (
      <button
       className='absolute -top-12 right-3'
        onClick={onClick}
      ><ChevronRight stroke={"#fff"} size={30}/>
      </button>
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <button
        className='absolute -top-12 right-12'
         onClick={onClick}
       ><ChevronLeft stroke={"#fff"} size={30}/>
       </button>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  return (
    <section className='pt-24 bg-primary text-white'>
    <div className='px-6'>
      <h2 className='mb-5 pl-4 text-4xl'>{title}</h2>
      <Slider {...settings}>

        <div className="slider-item relative group overflow-hidden px-5">
          <img src={`${devImgPath}/poster-yiyi.jpg`} alt="" className='w-[331px] h-[441px] object-cover'/>
          <div className='info p-4 text-white absolute top-full transition-all left-5 bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>Yi Yi</h2>
              <p className='flex items-center mb-5'>Romance <Dot/> 2022 <Dot/> 1h 50m</p>

              <h4>Summary</h4>
              <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illo a ad dolorum expedita nisi dolorem commodi architecto? Atque, sequi.</p>

              <h4>Cast</h4>
              <p>Nien-Jen Wu, Issei Ogata, Elaine Jin, Kelly Lee, Jonathan Chang, Hsi-Sheng Chen, Su-Yun Ko, Chuan-cheng Tao</p>
              
              <button className='btn btn-accent mt-5 self-start gap-0'><Play size={20} className='-translate-x-1'/> Play</button>
              
          </div>
          {isTopTen &&
          <p className='absolute -bottom-3 -left-5 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>7</p>
          }
        </div>
        <div className="slider-item relative group overflow-hidden px-5">
          <img src={`${devImgPath}/poster-yiyi.jpg`} alt="" className='w-[331px] h-[441px] object-cover'/>
          <div className='info p-4 text-white absolute top-full transition-all left-5 bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>Yi Yi</h2>
              <p className='flex items-center mb-5'>Romance <Dot/> 2022 <Dot/> 1h 50m</p>

              <h4>Summary</h4>
              <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illo a ad dolorum expedita nisi dolorem commodi architecto? Atque, sequi.</p>

              <h4>Cast</h4>
              <p>Nien-Jen Wu, Issei Ogata, Elaine Jin, Kelly Lee, Jonathan Chang, Hsi-Sheng Chen, Su-Yun Ko, Chuan-cheng Tao</p>
              
              <button className='btn btn-accent mt-5 self-start gap-0'><Play size={20} className='-translate-x-1'/> Play</button>
              
          </div>
          {isTopTen &&
          <p className='absolute -bottom-3 -left-5 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>7</p>
          }
        </div>
        <div className="slider-item relative group overflow-hidden px-5">
          <img src={`${devImgPath}/poster-yiyi.jpg`} alt="" className='w-[331px] h-[441px] object-cover'/>
          <div className='info p-4 text-white absolute top-full transition-all left-5 bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>Yi Yi</h2>
              <p className='flex items-center mb-5'>Romance <Dot/> 2022 <Dot/> 1h 50m</p>

              <h4>Summary</h4>
              <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illo a ad dolorum expedita nisi dolorem commodi architecto? Atque, sequi.</p>

              <h4>Cast</h4>
              <p>Nien-Jen Wu, Issei Ogata, Elaine Jin, Kelly Lee, Jonathan Chang, Hsi-Sheng Chen, Su-Yun Ko, Chuan-cheng Tao</p>
              
              <button className='btn btn-accent mt-5 self-start gap-0'><Play size={20} className='-translate-x-1'/> Play</button>
              
          </div>
          {isTopTen &&
          <p className='absolute -bottom-3 -left-5 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>7</p>
          }
        </div>
        <div className="slider-item relative group overflow-hidden px-5">
          <img src={`${devImgPath}/poster-yiyi.jpg`} alt="" className='w-[331px] h-[441px] object-cover'/>
          <div className='info p-4 text-white absolute top-full transition-all left-5 bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>Yi Yi</h2>
              <p className='flex items-center mb-5'>Romance <Dot/> 2022 <Dot/> 1h 50m</p>

              <h4>Summary</h4>
              <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illo a ad dolorum expedita nisi dolorem commodi architecto? Atque, sequi.</p>

              <h4>Cast</h4>
              <p>Nien-Jen Wu, Issei Ogata, Elaine Jin, Kelly Lee, Jonathan Chang, Hsi-Sheng Chen, Su-Yun Ko, Chuan-cheng Tao</p>
              
              <button className='btn btn-accent mt-5 self-start gap-0'><Play size={20} className='-translate-x-1'/> Play</button>
              
          </div>
          {isTopTen &&
          <p className='absolute -bottom-3 -left-5 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>7</p>
          }
        </div>
        <div className="slider-item relative group overflow-hidden px-5">
          <img src={`${devImgPath}/poster-yiyi.jpg`} alt="" className='w-[331px] h-[441px] object-cover'/>
          <div className='info p-4 text-white absolute top-full transition-all left-5 bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>Yi Yi</h2>
              <p className='flex items-center mb-5'>Romance <Dot/> 2022 <Dot/> 1h 50m</p>

              <h4>Summary</h4>
              <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illo a ad dolorum expedita nisi dolorem commodi architecto? Atque, sequi.</p>

              <h4>Cast</h4>
              <p>Nien-Jen Wu, Issei Ogata, Elaine Jin, Kelly Lee, Jonathan Chang, Hsi-Sheng Chen, Su-Yun Ko, Chuan-cheng Tao</p>
              
              <button className='btn btn-accent mt-5 self-start gap-0'><Play size={20} className='-translate-x-1'/> Play</button>
              
          </div>
          {isTopTen &&
          <p className='absolute -bottom-3 -left-5 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>7</p>
          }
        </div>
        <div className="slider-item relative group overflow-hidden px-5">
          <img src={`${devImgPath}/poster-yiyi.jpg`} alt="" className='w-[331px] h-[441px] object-cover'/>
          <div className='info p-4 text-white absolute top-full transition-all left-5 bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>Yi Yi</h2>
              <p className='flex items-center mb-5'>Romance <Dot/> 2022 <Dot/> 1h 50m</p>

              <h4>Summary</h4>
              <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illo a ad dolorum expedita nisi dolorem commodi architecto? Atque, sequi.</p>

              <h4>Cast</h4>
              <p>Nien-Jen Wu, Issei Ogata, Elaine Jin, Kelly Lee, Jonathan Chang, Hsi-Sheng Chen, Su-Yun Ko, Chuan-cheng Tao</p>
              
              <button className='btn btn-accent mt-5 self-start gap-0'><Play size={20} className='-translate-x-1'/> Play</button>
              
          </div>
          {isTopTen &&
          <p className='absolute -bottom-3 -left-5 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>7</p>
          }
        </div>
        <div className="slider-item relative group overflow-hidden px-5">
          <img src={`${devImgPath}/poster-yiyi.jpg`} alt="" className='w-[331px] h-[441px] object-cover'/>
          <div className='info p-4 text-white absolute top-full transition-all left-5 bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>Yi Yi</h2>
              <p className='flex items-center mb-5'>Romance <Dot/> 2022 <Dot/> 1h 50m</p>

              <h4>Summary</h4>
              <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illo a ad dolorum expedita nisi dolorem commodi architecto? Atque, sequi.</p>

              <h4>Cast</h4>
              <p>Nien-Jen Wu, Issei Ogata, Elaine Jin, Kelly Lee, Jonathan Chang, Hsi-Sheng Chen, Su-Yun Ko, Chuan-cheng Tao</p>
              
              <button className='btn btn-accent mt-5 self-start gap-0'><Play size={20} className='-translate-x-1'/> Play</button>
              
          </div>
          {isTopTen &&
          <p className='absolute -bottom-3 -left-5 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>7</p>
          }
        </div>
        <div className="slider-item relative group overflow-hidden px-5">
          <img src={`${devImgPath}/poster-yiyi.jpg`} alt="" className='w-[331px] h-[441px] object-cover'/>
          <div className='info p-4 text-white absolute top-full transition-all left-5 bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
              <h2 className='leading-snug'>Yi Yi</h2>
              <p className='flex items-center mb-5'>Romance <Dot/> 2022 <Dot/> 1h 50m</p>

              <h4>Summary</h4>
              <p className='mb-4'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum illo a ad dolorum expedita nisi dolorem commodi architecto? Atque, sequi.</p>

              <h4>Cast</h4>
              <p>Nien-Jen Wu, Issei Ogata, Elaine Jin, Kelly Lee, Jonathan Chang, Hsi-Sheng Chen, Su-Yun Ko, Chuan-cheng Tao</p>
              
              <button className='btn btn-accent mt-5 self-start gap-0'><Play size={20} className='-translate-x-1'/> Play</button>
              
          </div>
          {isTopTen &&
          <p className='absolute -bottom-3 -left-5 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>7</p>
          }
        </div>




      </Slider>
    </div>
  </section>
  )
}

export default MovieSlider