-- --------------------------------------------------------
-- Host:                         localhost
-- Server version:               10.1.35-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win32
-- HeidiSQL Version:             11.0.0.5919
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for employees_dictionary
CREATE DATABASE IF NOT EXISTS `employees_dictionary` /*!40100 DEFAULT CHARACTER SET latin1 */;
USE `employees_dictionary`;

-- Dumping structure for table employees_dictionary.employee_details
CREATE TABLE IF NOT EXISTS `employee_details` (
  `emp_id` int(11) NOT NULL AUTO_INCREMENT,
  `emp_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL,
  PRIMARY KEY (`emp_id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

-- Dumping data for table employees_dictionary.employee_details: ~2 rows (approximately)
/*!40000 ALTER TABLE `employee_details` DISABLE KEYS */;
INSERT INTO `employee_details` (`emp_id`, `emp_name`, `email`, `phone_number`) VALUES
	(1, 'hemanth', 's@gmail.com', '1234567890'),
	(4, 'qwerty', 'saihemanthjakkula@gmail.com', '+919866698565'),
	(5, 'qwerty', 'saihemanthjakkula@gmail.com', '+919866698565');
/*!40000 ALTER TABLE `employee_details` ENABLE KEYS */;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
