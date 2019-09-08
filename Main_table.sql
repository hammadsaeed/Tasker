-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 08, 2019 at 09:08 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Test_Assignment`
--

-- --------------------------------------------------------

--
-- Table structure for table `Main_table`
--

CREATE TABLE `Main_table` (
  `PrimaryID` int(11) NOT NULL,
  `ParentID` int(11) DEFAULT NULL,
  `Name` varchar(100) NOT NULL,
  `Description` varchar(1000) NOT NULL,
  `Status` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Main_table`
--

INSERT INTO `Main_table` (`PrimaryID`, `ParentID`, `Name`, `Description`, `Status`) VALUES
(1, NULL, 'Changing the parent-Id ', 'Lets see if the child tasks also move', 'Completed'),
(3, 4, 'This is 2xsub', 'This is a third task of the test data', 'Completed'),
(4, 1, 'Need to disable the confirm button', 'If the text fields are left empty then, the user shoulnt be able to press confirm', 'Completed'),
(5, NULL, 'Parent', 'Tasks under it', 'Done'),
(6, 5, '2nd subclass', 'This is the sub class for the second parent,for testing', 'Done'),
(7, 6, 'thrid', 'this is the third task for the primaryid check', 'In Progress'),
(8, 1, 'Anotherone', 'Another one with the same parent Id as one of the previous ones', 'Completed'),
(10, NULL, 'Changing the name', 'Changing the name of primary ID 10 ', 'Completed'),
(11, 5, '5th Test', 'Testing for a child task under PrimaryID 5', 'Completed'),
(12, 5, '5th Test', 'Testing for a child task under PrimaryID 5', 'Completed'),
(13, NULL, 'Should update data', 'Final test, last error was a typo at the api side', 'Done'),
(14, 4, 'Another child', 'testing the status updator', 'Completed'),
(15, 8, '2nd task', 'still testing the status updator', 'Completed'),
(16, 10, 'drop down ', 'test for Drop down list', 'Completed'),
(17, NULL, 'testing', 'Testing from the website itself', 'Done'),
(18, 17, 'gin and tea ', 'queen Elizabeth ', 'Completed'),
(19, 13, 'sub 13', 'Testing subTask for 13', 'Completed'),
(20, NULL, 'Checking Pagination', 'Creating 6 task to see if 5 rows are shown at once', 'Done'),
(21, 20, 'Checking if this works', 'With removing parent ID', 'In Progress');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Main_table`
--
ALTER TABLE `Main_table`
  ADD PRIMARY KEY (`PrimaryID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Main_table`
--
ALTER TABLE `Main_table`
  MODIFY `PrimaryID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
