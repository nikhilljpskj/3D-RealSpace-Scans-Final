-- Database: `3DRealSpaceScans`

-- Table structure for table `bookings`
CREATE TABLE `bookings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `contactMethod` enum('Call','Text','Email') NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `serviceLocation` varchar(255) DEFAULT NULL,
  `accessInstructions` text DEFAULT NULL,
  `scanType` enum('Residential','Commercial') NOT NULL,
  `preferredDate` datetime NOT NULL,
  `backupDate` datetime DEFAULT NULL,
  `purpose` varchar(255) NOT NULL,
  `projectScope` text DEFAULT NULL,
  `numberOfRooms` varchar(255) DEFAULT NULL,
  `outputFormats` varchar(255) DEFAULT NULL,
  `additionalServices` text DEFAULT NULL,
  `completionDate` date DEFAULT NULL,
  `specialInstructions` text DEFAULT NULL,
  `budgetRange` decimal(10,2) DEFAULT NULL,
  `projectTimeline` enum('Flexible','Urgent','Standard') NOT NULL,
  `deliveryPreferences` text DEFAULT NULL,
  `termsAccepted` tinyint(1) DEFAULT 0,
  `privacyConsent` tinyint(1) DEFAULT 0,
  `showcaseConsent` tinyint(1) DEFAULT 0,
  `status` int(10) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table structure for table `files`
CREATE TABLE `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `booking_id` int(11) NOT NULL,
  `file_path` varchar(550) DEFAULT NULL,
  `file_type` varchar(500) DEFAULT NULL,
  `upload_date` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  KEY `booking_id` (`booking_id`),
  CONSTRAINT `files_ibfk_1` FOREIGN KEY (`booking_id`) REFERENCES `bookings` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Table structure for table `users`
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(250) DEFAULT NULL,
  `mobile` varchar(20) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `isAdmin` tinyint(1) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;