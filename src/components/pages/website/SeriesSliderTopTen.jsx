import useQueryData from "@/components/custom-hook/useQueryData";
import { devImgPath } from "@/components/helpers/functions-general";
import { ChevronLeft, ChevronRight, Dot, Play } from "lucide-react";
import React from "react";
import Slider from "react-slick";

const SeriesSliderTopTen = ({ title = "", isTopTen = true , category}) => {
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className='absolute -top-12 right-3' onClick={onClick}>
        <ChevronRight stroke={"#fff"} size={30} />
      </button>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <button className='absolute -top-12 right-12' onClick={onClick}>
        <ChevronLeft stroke={"#fff"} size={30} />
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
          {category?.data.map((item, key) => (
            <div
              className='slider-item relative group overflow-hidden px-5'
              key={key}
            >
              <img
                src={`${devImgPath}/${item.topseries_image}`}
                alt=''
                className='w-[331px] h-[441px] object-cover'
              />
              <div className='info p-4 text-white absolute top-full transition-all left-5 bg-black bg-opacity-95 flex flex-col justify-center group-hover:top-0 w-[331px] h-[441px] z-40'>
                <h2 className='leading-snug'>{item.topseries_title}</h2>
                <p className='flex items-center mb-5'>
                  {item.topseries_genre} <Dot /> {item.topseries_year}
                  <Dot /> {item.topseries_duration}
                </p>

                <h4>Summary</h4>
                <p className='mb-4'>{item.topseries_summary}</p>

                <h4>Cast</h4>
                <p>{item.topseries_cast}</p>

                <button className='btn btn-accent mt-5 self-start gap-0'>
                  <Play size={20} className='-translate-x-1' /> Play
                </button>
              </div>
              {isTopTen && (
                <p className='absolute -bottom-3 -left-5 text-[200px] mb-0 leading-none font-black text-accent counter group-hover:opacity-0'>
                  {item.topseries_ranking}
                </p>
              )}
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SeriesSliderTopTen;
