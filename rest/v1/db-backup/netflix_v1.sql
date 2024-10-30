-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 30, 2024 at 08:27 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `netflix_v1`
--

-- --------------------------------------------------------

--
-- Table structure for table `netflix_movies`
--

CREATE TABLE `netflix_movies` (
  `movies_aid` int(11) NOT NULL,
  `movies_title` varchar(150) NOT NULL,
  `movies_year` varchar(10) NOT NULL,
  `movies_genre` varchar(20) NOT NULL,
  `movies_rating` varchar(20) NOT NULL,
  `movies_duration` varchar(15) NOT NULL,
  `movies_summary` text NOT NULL,
  `movies_cast` text NOT NULL,
  `movies_image` varchar(50) NOT NULL,
  `movies_category` varchar(50) NOT NULL,
  `movies_is_active` tinyint(1) NOT NULL,
  `movies_datetime` varchar(20) NOT NULL,
  `movies_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_movies`
--

INSERT INTO `netflix_movies` (`movies_aid`, `movies_title`, `movies_year`, `movies_genre`, `movies_rating`, `movies_duration`, `movies_summary`, `movies_cast`, `movies_image`, `movies_category`, `movies_is_active`, `movies_datetime`, `movies_created`) VALUES
(1, 'kdrama 1', '2000', 'dsdsf', 'sdfdsf', 'dfsf', 'sdfsf', 'sdfdsfsf', 'blog1.jpg', 'kdrama', 1, '2024-10-30 14:29:01', '2024-10-30 14:29:01'),
(2, 'pinoy 1', 'dsdsfs', 'dsfdsfs', 'sdfdsf', 'sdfsdf', 'fdgfdg', 'dfgfdgdg', 'page1_pic3.jpg', 'pinoy', 1, '2024-10-30 14:29:26', '2024-10-30 14:29:26'),
(3, 'international 1', 'dfdsfs', 'fsdfdsf', 'sdfsdfsf', 'sdfsdfs', 'sdfsdfsdf', 'sdfsdfdsfs', 'blog3.jpg', 'international', 1, '2024-10-30 14:30:00', '2024-10-30 14:30:00'),
(4, 'kdrama 2', '2999', 'gfhgfh', 'fghfgh', 'fghgfhgf', 'dsfsfs', 'sdfsdfsdf', 'pusa.jpg', 'kdrama', 1, '2024-10-30 14:43:27', '2024-10-30 14:43:27'),
(5, 'kdrama 3', 'dsfsfs', 'dsfsf', 'dsfsfds', 'dsfdsfds', 'dsfssfds', 'sdfsdfdsdfds', 'page1_pic1.jpg', 'kdrama', 1, '2024-10-30 14:43:54', '2024-10-30 14:43:54'),
(6, 'kdrama 4', '2333', 'sdfsdf', 'sdsdf', 'sdfsddsf', 'dsfsfsdf', 'sdfsdfsdfsdfds', 'bini1.jpg', 'kdrama', 1, '2024-10-30 14:48:33', '2024-10-30 14:48:33'),
(7, 'kdrama 5', 'fdfd', 'fdgfdgf', 'dfgfdgdf', 'dfgfdgdfg', 'dsfdsfdsf', 'sdfdsfsdf', 'trend1.jpg', 'kdrama', 1, '2024-10-30 14:49:44', '2024-10-30 14:49:44'),
(8, 'kdrama 6', 'dfgfdgsdfh', 'dfhggcgvb', 'cvbxvcb', 'vcbcvbv', 'dfgfdgdf', 'gdfgdfgdf', 'trend3.jpg', 'kdrama', 1, '2024-10-30 14:50:09', '2024-10-30 14:50:09'),
(9, 'pinoy 2', 'dsfsdfds', 'sdfsdfds', 'sdfdsfs', 'dsfdsfs', 'fdgdfgdfg', 'dfgfdgdfgfdg', 'slide2.jpg', 'pinoy', 1, '2024-10-30 14:54:27', '2024-10-30 14:54:27'),
(10, 'pinoy 3', 'dsfsfsd', 'fdsfsf', 'sdfdsfds', 'sdfsfsdf', 'dsgfsfsdf', 'sdfsdfsdfsd', 'albert_murray.jpg', 'pinoy', 1, '2024-10-30 14:54:48', '2024-10-30 14:54:48'),
(11, 'pinoy 4', 'fdsfdsfs', 'dsfdsf', 'dsfsdf', 'sdfdsfds', 'dsfsfsdf', 'sdfsdfsdfsd', 'lamok.jpg', 'pinoy', 1, '2024-10-30 14:55:10', '2024-10-30 14:55:10'),
(12, 'pinoy 5', 'sefesdfdsf', 'sdfsdfds', 'dsfdsfsdf', 'dsfsdfds', 'dsfssfsdf', 'sdfsdfsdfsdf', 'blog4.webp', 'pinoy', 1, '2024-10-30 14:55:38', '2024-10-30 14:55:38'),
(13, 'international 2', 'dfdsfdsf', 'sdfsdf', 'sdfsdfsd', 'dfdsf', 'dsfdsfesd', 'sdfsdfsdf', 'board3.jpg', 'international', 1, '2024-10-30 14:57:50', '2024-10-30 14:56:08'),
(14, 'international 3', 'sdffds', 'sdfsdfsd', 'fsdfsdfsd', 'sdfsdfds', 'dsfsdfsdf', 'sdfsdfsdf', 'custode.jpg', 'international', 1, '2024-10-30 14:56:49', '2024-10-30 14:56:49'),
(15, 'international 4', 'dsfsdfdsf', 'sdfsdfds', 'dsfsdfdsf', 'sdfsdfds', 'cxvxcxvcxv', 'xcvxcvxcvxc', 'dreadknight.jpg', 'international', 1, '2024-10-30 14:57:04', '2024-10-30 14:57:04'),
(16, 'international 5', 'dsfdsfsdf', 'dsfsdfsdf', 'sdfsdfsd', 'sdfdsfsd', 'xcvcxvxcv', 'xcvxcvcxvcxv', 'draigo.jpg', 'international', 1, '2024-10-30 14:57:29', '2024-10-30 14:57:29');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_topmovies`
--

CREATE TABLE `netflix_topmovies` (
  `topmovies_aid` int(11) NOT NULL,
  `topmovies_title` varchar(100) NOT NULL,
  `topmovies_year` varchar(10) NOT NULL,
  `topmovies_genre` varchar(20) NOT NULL,
  `topmovies_rating` varchar(20) NOT NULL,
  `topmovies_duration` varchar(10) NOT NULL,
  `topmovies_summary` text NOT NULL,
  `topmovies_cast` text NOT NULL,
  `topmovies_image` varchar(30) NOT NULL,
  `topmovies_category` varchar(20) NOT NULL,
  `topmovies_is_active` tinyint(1) NOT NULL,
  `topmovies_datetime` varchar(20) NOT NULL,
  `topmovies_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `netflix_movies`
--
ALTER TABLE `netflix_movies`
  ADD PRIMARY KEY (`movies_aid`);

--
-- Indexes for table `netflix_topmovies`
--
ALTER TABLE `netflix_topmovies`
  ADD PRIMARY KEY (`topmovies_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `netflix_movies`
--
ALTER TABLE `netflix_movies`
  MODIFY `movies_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `netflix_topmovies`
--
ALTER TABLE `netflix_topmovies`
  MODIFY `topmovies_aid` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
