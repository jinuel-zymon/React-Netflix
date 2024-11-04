import { devImgPath } from '@/components/helpers/functions-general'
import { ChevronLeft, ChevronRight, Dot, Play, Search } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Header from './Header';
import Banner from './Banner';
import MovieSlider from './MovieSlider';
import useQueryData from '@/components/custom-hook/useQueryData';
import SpinnerTable from '@/components/partials/spinners/SpinnerTable';
import MovieSliderTopTen from './MovieSliderTopTen';
import SeriesSliderTopTen from './SeriesSliderTopTen';

const Home = () => {

  const {
    isLoading,
    isFetching,
    error,
    data: result,
  } = useQueryData(
    `/v1/movies`, // endpoint
    "get", // method
    "movies"
  );
  const {
    isLoading:topMoviesIsLoading,
    isFetching:topMoviesIsFetching,
    error:topMoviesError,
    data: topmovies,
  } = useQueryData(
    `/v1/top-movies`, // endpoint
    "get", // method
    "top-movies"
  );
  const {
    isLoading:topSeriesIsLoading,
    isFetching:topSeriesIsFetching,
    error:topSeriesError,
    data: topseries,
  } = useQueryData(
    `/v1/top-series`, // endpoint
    "get", // method
    "top-series"
  );

  const getAllKdrama = !isLoading && result?.data.filter((movie) => movie.movies_category === "K-Drama")
  const getAllPinoy = !isLoading && result?.data.filter((movie) => movie.movies_category === "Pinoy Original")
  const getAllInternational = !isLoading && result?.data.filter((movie) => movie.movies_category === "International")


  return (
    <>
    <Header/>

    <Banner/>




    {topMoviesIsLoading ? <SpinnerTable/> : <MovieSliderTopTen title="Top Movies" isTopTen={true} category={topmovies}/>}
    {topSeriesIsLoading ? <SpinnerTable/> : <SeriesSliderTopTen title="Top Series" isTopTen={true} category={topseries}/>}

    {isLoading ? <SpinnerTable/> : <MovieSlider title="Korean Drama" isTopTen={false} category={getAllKdrama}/>}
    {isLoading ? <SpinnerTable/> : <MovieSlider title="Pinoy Drama" isTopTen={false} category={getAllPinoy}/>}
    {isLoading ? <SpinnerTable/> : <MovieSlider title="International Drama" isTopTen={false} category={getAllInternational}/>}
    </>

  )
}

export default Home