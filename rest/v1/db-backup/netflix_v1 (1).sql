-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 15, 2024 at 08:39 AM
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
(1, 'kdrama 1', '2000', 'Drama', 'PG', 'dfsf', 'sdfsf', 'sdfdsfsf', 'blog1.jpg', 'K-Drama', 1, '2024-11-04 10:17:21', '2024-10-30 14:29:01'),
(2, 'pinoy 1', 'dsdsfs', 'Action', 'PG', 'sdfsdf', 'fdgfdg', 'dfgfdgdg', 'page1_pic3.jpg', 'Pinoy Original', 1, '2024-11-04 10:17:13', '2024-10-30 14:29:26'),
(3, 'international 1', 'dfdsfs', 'Drama', 'PG', 'sdfsdfs', 'sdfsdfsdf', 'sdfsdfdsfs', 'blog3.jpg', 'International', 1, '2024-11-04 12:31:34', '2024-10-30 14:30:00'),
(4, 'kdrama 2', '2999', 'Romance', 'PG', 'fghgfhgf', 'dsfsfs', 'sdfsdfsdf', 'pusa.jpg', 'K-Drama', 1, '2024-11-04 10:18:31', '2024-10-30 14:43:27'),
(5, 'kdrama 3', 'dsfsfs', 'Drama', 'PG', 'dsfdsfds', 'dsfssfds', 'sdfsdfdsdfds', 'page1_pic1.jpg', 'K-Drama', 1, '2024-11-04 10:18:38', '2024-10-30 14:43:54'),
(6, 'kdrama 4', '2333', 'Drama', 'PG', 'sdfsddsf', 'dsfsfsdf', 'sdfsdfsdfsdfds', 'bini1.jpg', 'K-Drama', 1, '2024-11-04 10:19:24', '2024-10-30 14:48:33'),
(9, 'pinoy 2', 'dsfsdfds', 'Drama', 'PG', 'dsfdsfs', 'fdgdfgdfg', 'dfgfdgdfgfdg', 'slide2.jpg', 'Pinoy Original', 1, '2024-11-04 10:16:25', '2024-10-30 14:54:27'),
(10, 'pinoy 3', 'dsfsfsd', 'Drama', 'PG', 'sdfsfsdf', 'dsgfsfsdf', 'sdfsdfsdfsd', 'albert_murray.jpg', 'Pinoy Original', 1, '2024-11-04 10:16:59', '2024-10-30 14:54:48'),
(11, 'pinoy 4', 'fdsfdsfs', 'Romance', 'PG', 'sdfdsfds', 'dsfsfsdf', 'sdfsdfsdfsd', 'lamok.jpg', 'Pinoy Original', 1, '2024-11-04 13:05:27', '2024-10-30 14:55:10'),
(13, 'international 2', 'dfdsfdsf', 'Drama', 'PG', 'dfdsf', 'dsfdsfesd', 'sdfsdfsdf', 'board3.jpg', 'International', 1, '2024-11-04 12:31:38', '2024-10-30 14:56:08'),
(14, 'international 3', 'sdffds', 'Action', 'PG', 'sdfsdfds', 'dsfsdfsdf', 'sdfsdfsdf', 'custode.jpg', 'International', 1, '2024-11-04 12:31:42', '2024-10-30 14:56:49');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_settings_category`
--

CREATE TABLE `netflix_settings_category` (
  `category_aid` int(11) NOT NULL,
  `category_title` varchar(50) NOT NULL,
  `category_is_active` tinyint(1) NOT NULL,
  `category_datetime` varchar(20) NOT NULL,
  `category_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_settings_category`
--

INSERT INTO `netflix_settings_category` (`category_aid`, `category_title`, `category_is_active`, `category_datetime`, `category_created`) VALUES
(2, 'International', 1, '2024-11-04 13:34:14', '2024-11-04 09:00:38'),
(3, 'Pinoy Original', 1, '2024-11-04 13:35:00', '2024-11-04 09:58:41'),
(5, 'K-Drama', 1, '2024-11-04 09:58:59', '2024-11-04 09:58:59'),
(6, 'Thai', 1, '2024-11-04 13:35:26', '2024-11-04 13:35:18');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_settings_genre`
--

CREATE TABLE `netflix_settings_genre` (
  `genre_aid` int(11) NOT NULL,
  `genre_title` varchar(50) NOT NULL,
  `genre_is_active` tinyint(1) NOT NULL,
  `genre_datetime` varchar(20) NOT NULL,
  `genre_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_settings_genre`
--

INSERT INTO `netflix_settings_genre` (`genre_aid`, `genre_title`, `genre_is_active`, `genre_datetime`, `genre_created`) VALUES
(4, 'Romance', 1, '2024-11-04 10:15:12', '2024-11-04 08:24:27'),
(5, 'Action', 1, '2024-11-04 08:27:07', '2024-11-04 08:27:07'),
(6, 'Drama', 1, '2024-11-04 10:15:20', '2024-11-04 10:15:20');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_settings_ratings`
--

CREATE TABLE `netflix_settings_ratings` (
  `ratings_aid` int(11) NOT NULL,
  `ratings_title` varchar(50) NOT NULL,
  `ratings_is_active` tinyint(1) NOT NULL,
  `ratings_datetime` varchar(20) NOT NULL,
  `ratings_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_settings_ratings`
--

INSERT INTO `netflix_settings_ratings` (`ratings_aid`, `ratings_title`, `ratings_is_active`, `ratings_datetime`, `ratings_created`) VALUES
(3, 'PG', 1, '2024-11-04 15:29:29', '2024-11-04 09:28:41');

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
  `topmovies_ranking` varchar(20) NOT NULL,
  `topmovies_is_active` tinyint(1) NOT NULL,
  `topmovies_datetime` varchar(20) NOT NULL,
  `topmovies_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_topmovies`
--

INSERT INTO `netflix_topmovies` (`topmovies_aid`, `topmovies_title`, `topmovies_year`, `topmovies_genre`, `topmovies_rating`, `topmovies_duration`, `topmovies_summary`, `topmovies_cast`, `topmovies_image`, `topmovies_ranking`, `topmovies_is_active`, `topmovies_datetime`, `topmovies_created`) VALUES
(4, 'cccc', 'cccc', 'cccc', 'ccccc', 'dsfffd', 'dfsdfs', 'sdfsfs', 'varagyr.jpg', '1', 1, '2024-10-31 07:51:18', '2024-10-31 07:50:29'),
(5, 'heeeee', 'dsfdsf', 'dsfdsfsd', 'fdsdfds', 'dfdfs', 'fgvdxvxczv', 'xcvcxzvzcxv', 'paragon.jpg', '2', 1, '2024-10-31 08:20:01', '2024-10-31 08:20:01'),
(6, 'dsfsfs', 'dsfddsfsd', 'dsfsdfds', 'dsfsdf', 'dsfsdf', 'fdgdsgdf', 'gfdgfdgfdg', 'albert_murray.jpg', '3', 1, '2024-10-31 08:20:54', '2024-10-31 08:20:54'),
(7, 'llllll', 'ghjgjhg', 'ghjhgj', 'ghjghj', 'ghjhgjhgj', 'vbvvvbc', 'cvbcvbvccvb', 'blog3.jpg', '4', 1, '2024-10-31 08:21:46', '2024-10-31 08:21:46'),
(8, 'fghhhhhggg', 'hghgf', 'gfhgfh', 'gfhfgh', 'fdghgfhfg', 'gfhgfh', 'fhfhfhfgh', 'slide3.jpg', '5', 1, '2024-10-31 08:22:54', '2024-10-31 08:22:20');

-- --------------------------------------------------------

--
-- Table structure for table `netflix_topseries`
--

CREATE TABLE `netflix_topseries` (
  `topseries_aid` int(11) NOT NULL,
  `topseries_title` varchar(100) NOT NULL,
  `topseries_year` varchar(10) NOT NULL,
  `topseries_genre` varchar(20) NOT NULL,
  `topseries_rating` varchar(20) NOT NULL,
  `topseries_duration` varchar(10) NOT NULL,
  `topseries_summary` text NOT NULL,
  `topseries_cast` text NOT NULL,
  `topseries_image` varchar(30) NOT NULL,
  `topseries_ranking` varchar(20) NOT NULL,
  `topseries_is_active` tinyint(1) NOT NULL,
  `topseries_datetime` varchar(20) NOT NULL,
  `topseries_created` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `netflix_topseries`
--

INSERT INTO `netflix_topseries` (`topseries_aid`, `topseries_title`, `topseries_year`, `topseries_genre`, `topseries_rating`, `topseries_duration`, `topseries_summary`, `topseries_cast`, `topseries_image`, `topseries_ranking`, `topseries_is_active`, `topseries_datetime`, `topseries_created`) VALUES
(2, 'series 1', 'sadsadsad', 'sadsad', 'sadasd', 'sadsadsa', 'sadada', 'sadadsad', 'paragon.jpg', '1', 1, '2024-10-31 09:36:05', '2024-10-31 09:18:44'),
(3, 'series 2', 'sadad', 'asdad', 'asdsad', 'asdasd', 'sadsad', 'asdsad', 'Rectangle 2.png', '2', 1, '2024-10-31 09:19:16', '2024-10-31 09:19:16'),
(10, 'dfdsfdsf', 'dfsdf', 'dsfsdfsd', 'dsfsdfds', 'dsfsdf', 'fgfdgdfgd', 'ffdgdfgdfg', 'albert_murray.jpg', '4', 1, '2024-10-31 09:40:00', '2024-10-31 09:40:00'),
(11, 'seriesssssss', 'dfgdfgdfg', 'dfgdfg', 'fdgfdg', 'dfgdfgdf', 'ghfgh', 'fghfghgfh', 'slide2.jpg', '5', 1, '2024-10-31 09:41:28', '2024-10-31 09:40:25'),
(12, 'another series', 'sdfdsfsdf', 'sdfsdfds', 'sdfsdf', 'sdfsdffds', 'dfsfdsf', 'dsfsdfsdfd', 'pusa.jpg', '3', 1, '2024-10-31 09:42:44', '2024-10-31 09:42:44');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `netflix_movies`
--
ALTER TABLE `netflix_movies`
  ADD PRIMARY KEY (`movies_aid`);

--
-- Indexes for table `netflix_settings_category`
--
ALTER TABLE `netflix_settings_category`
  ADD PRIMARY KEY (`category_aid`);

--
-- Indexes for table `netflix_settings_genre`
--
ALTER TABLE `netflix_settings_genre`
  ADD PRIMARY KEY (`genre_aid`);

--
-- Indexes for table `netflix_settings_ratings`
--
ALTER TABLE `netflix_settings_ratings`
  ADD PRIMARY KEY (`ratings_aid`);

--
-- Indexes for table `netflix_topmovies`
--
ALTER TABLE `netflix_topmovies`
  ADD PRIMARY KEY (`topmovies_aid`);

--
-- Indexes for table `netflix_topseries`
--
ALTER TABLE `netflix_topseries`
  ADD PRIMARY KEY (`topseries_aid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `netflix_movies`
--
ALTER TABLE `netflix_movies`
  MODIFY `movies_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `netflix_settings_category`
--
ALTER TABLE `netflix_settings_category`
  MODIFY `category_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `netflix_settings_genre`
--
ALTER TABLE `netflix_settings_genre`
  MODIFY `genre_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `netflix_settings_ratings`
--
ALTER TABLE `netflix_settings_ratings`
  MODIFY `ratings_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `netflix_topmovies`
--
ALTER TABLE `netflix_topmovies`
  MODIFY `topmovies_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `netflix_topseries`
--
ALTER TABLE `netflix_topseries`
  MODIFY `topseries_aid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
