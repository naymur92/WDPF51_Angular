-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 19, 2022 at 11:38 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `beefirm`
--

-- --------------------------------------------------------

--
-- Table structure for table `bookings`
--

CREATE TABLE `bookings` (
  `b_id` mediumint(6) NOT NULL,
  `b_p_id` smallint(4) NOT NULL,
  `b_p_name` varchar(30) NOT NULL,
  `b_customer_name` varchar(20) NOT NULL,
  `b_custome_address` varchar(500) NOT NULL,
  `b_p_price` mediumint(5) NOT NULL,
  `b_p_quantity` smallint(4) NOT NULL,
  `b_total_price` mediumint(7) NOT NULL,
  `b_time` datetime NOT NULL DEFAULT current_timestamp(),
  `b_status` varchar(10) NOT NULL DEFAULT 'Pending'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bookings`
--

INSERT INTO `bookings` (`b_id`, `b_p_id`, `b_p_name`, `b_customer_name`, `b_custome_address`, `b_p_price`, `b_p_quantity`, `b_total_price`, `b_time`, `b_status`) VALUES
(1, 18, 'Bee With Frame', 'Naymur Rahman', 'Banasree', 1000, 4, 4000, '2022-11-20 03:25:25', 'Pending'),
(2, 21, 'Mustured Flower Honey', 'Kamrul Hasan', 'Alamdanga', 8000, 4, 32000, '2022-11-20 03:28:48', 'Pending'),
(3, 21, 'Mustured Flower Honey', 'Dipu', 'Barisal', 8000, 3, 24000, '2022-11-20 03:30:49', 'Pending'),
(4, 16, 'Black Seed Honey', 'Naymur', 'Dhaka', 18000, 2, 36000, '2022-11-20 04:15:40', 'Pending');

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `p_id` smallint(4) NOT NULL,
  `p_name` varchar(30) NOT NULL,
  `p_price` mediumint(6) NOT NULL,
  `p_category` varchar(20) NOT NULL,
  `p_stock` mediumint(6) NOT NULL,
  `p_thumbnail` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`p_id`, `p_name`, `p_price`, `p_category`, `p_stock`, `p_thumbnail`) VALUES
(16, 'Black Seed Honey', 18000, 'honey_item', 10, '4.jpg'),
(17, 'Lichi Flower Honey', 12000, 'honey_item', 22, '7.jpg'),
(18, 'Bee With Frame', 1000, 'firm_item', 1500, '3.jpg'),
(19, 'Bee Box With Frame', 4000, 'firm_item', 200, '1.jpg'),
(20, 'Frame', 250, 'firm_item', 2500, '2.jpg'),
(21, 'Mustured Flower Honey', 8000, 'honey_item', 15, '5.jpg'),
(22, 'Sundarban Honey', 16000, 'honey_item', 22, '6.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` smallint(3) NOT NULL,
  `name` varchar(20) NOT NULL,
  `email` varchar(30) NOT NULL,
  `password` varchar(64) NOT NULL,
  `user_type` varchar(10) NOT NULL DEFAULT 'manager'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `password`, `user_type`) VALUES
(1, 'Naymur rahman', 'naymur@example.com', 'abcd1234', 'admin'),
(2, 'Kamrul Hasan', 'kamrul@example.com', 'abcd1234', 'manager'),
(3, 'Alauddin Alo', 'alauddin@example.com', 'abcd1234', 'manager'),
(4, 'Fahim Ahmed', 'fahim@example.com', 'abcd1234', 'worker'),
(5, 'Durjoy', 'durjoy@example.com', 'abcd1234', 'manager'),
(6, 'Shibli Ahmed', 'shibli@example.com', 'abcd1234', 'worker'),
(19, 'Habib Hossain', 'habib@example.com', 'abcd1234', 'worker'),
(20, 'werqewfr', 'naim.mict@gmail.com', 'asdfasdfasdf', 'sdfasdfasd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bookings`
--
ALTER TABLE `bookings`
  ADD PRIMARY KEY (`b_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bookings`
--
ALTER TABLE `bookings`
  MODIFY `b_id` mediumint(6) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `p_id` smallint(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` smallint(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
