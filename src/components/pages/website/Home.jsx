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

  const getAllKdrama = !isLoading && result?.data.filter((movie) => movie.movies_category === "kdrama")
  const getAllPinoy = !isLoading && result?.data.filter((movie) => movie.movies_category === "pinoy")
  const getAllInternational = !isLoading && result?.data.filter((movie) => movie.movies_category === "international")


  return (
    <>
    <Header/>

    <Banner/>

    {/* <MovieSlider title="Top in the Philippines"/>
    <MovieSlider title="Top Movie"/>
    <MovieSlider title="Top Series"/> */}

    {isLoading ? <SpinnerTable/> : <MovieSlider title="Korean Drama" isTopTen={false} category={getAllKdrama}/>}
    {isLoading ? <SpinnerTable/> : <MovieSlider title="Pinoy Drama" isTopTen={false} category={getAllPinoy}/>}
    {isLoading ? <SpinnerTable/> : <MovieSlider title="International Drama" isTopTen={false} category={getAllInternational}/>}
    </>

  )
}

export default Home