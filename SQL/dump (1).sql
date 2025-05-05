-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: elearning
-- ------------------------------------------------------
-- Server version	9.3.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `e_category`
--

DROP TABLE IF EXISTS `e_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_code` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `category` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `detail` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `team_id` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `status` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pi_approved` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_category`
--

LOCK TABLES `e_category` WRITE;
/*!40000 ALTER TABLE `e_category` DISABLE KEYS */;
INSERT INTO `e_category` VALUES (1,'DS1','Data & Schema','Related to data organization, structure, and attributes, including tags, codes, and metadata that define product details, system records, or compliance requirements.','1048','Active','Pending',1,'2025-03-27'),(2,'CGFG2','Category GFG','675','1048','Active','Pending',1,'2025-03-26'),(10,'DF10','Documents & Forms','Includes various types of records, templates, reports, and authorization forms necessary for business transactions, compliance, and internal processes.','1048','Active','Pending',1,'2025-03-27'),(11,'FP11','Financial & Payments','Covers all processes related to monetary transactions, including payments, invoicing, refunds, credits, and financial adjustments.','1048','Active','Pending',1,'2025-03-27'),(12,'O12','Other','A general category for items that do not fit into predefined classifications but are still relevant to business operations.','1048','Active','Pending',1,'2025-03-27'),(13,'GUCL13','Guidelines for Using the Cennos\'s Logo - 2025','General instructions on the proper usage of the Cennos logo in 2025, ensuring brand consistency and visibility.','1288','Active','Pending',2,'2025-04-01'),(14,'SPR14','Standards for the Public Report in 2025','Guidelines for structuring and presenting public reports, focusing on key standards for 2025.','1288','Active','Pending',2,'2025-04-01'),(15,'CT15','Cennos - Tips for reply email','Best practices and suggestions for replying to emails professionally and effectively within the Cennos company.','1288','Active','Pending',2,'2025-04-01'),(16,'HLC16','How to use Lucid Chart','A step-by-step guide on using Lucid Chart, a diagramming tool, to create visual charts and workflows','1288','Active','Pending',2,'2025-04-01'),(17,'HVBA17','How to use VBA code and using Chat GPT to write VBA code','Instructions on utilizing VBA (Visual Basic for Applications) code and integrating Chat GPT to assist in code writing.','1288','Active','Pending',2,'2025-04-01'),(18,'TRPA18','Training RPA for QAs 2024','A training program for Quality Assurance (QA) teams on the use of Robotic Process Automation (RPA) in 2024.','1288','Active','Pending',2,'2025-04-01'),(19,'HCGP19','How to use ChatGPT, Gemini, Perplexity to write emails','A guide on using AI tools like ChatGPT, Gemini, and Perplexity to compose emails effectively.','1288','Active','Pending',2,'2025-04-01'),(20,'UCGP20','Using Chat GPT & Gemini to reply ticket or email to customer','Instruction on responding to customer queries using AI tools like Chat GPT and Gemini.','1288','Active','Pending',2,'2025-04-01'),(21,'CSEO21','Cennos - SEO Keywords','A training on identifying and using SEO (Search Engine Optimization) keywords for enhancing online visibility and search rankings.','1288','Active','Pending',2,'2025-04-01'),(22,'GUG22','Grammarly User Guide','A guide to using Grammarly, an AI-powered writing assistant, to enhance writing accuracy and professionalism.','1288','Active','Pending',2,'2025-04-01'),(23,'UGTG23','Using Google Translate in Google Meet','Instructions on how to integrate and use Google Translate during Google Meet sessions for real-time translation.','1288','Active','Pending',2,'2025-04-01'),(24,'HAIV24','How to record, add subtitle and AI voice using Veed.co','A tutorial on using Veed.co for recording videos, adding subtitles, and generating AI voiceovers.','1288','Active','Pending',2,'2025-04-01'),(25,'UGCG25','Using Gemini, Chat GPT, Perplexity - Create Quiz','A guide on leveraging AI tools like Gemini, Chat GPT, and Perplexity to create quizzes for training or assessments.','1288','Active','Pending',2,'2025-04-01'),(26,'SRMT26','Shift Report Management Training (WF only)','Training for managing and organizing shift reports within the Workforce system (WF).','1288','Active','Pending',2,'2025-04-01'),(27,'CDCI27','Cennos Data Cleanup and Invoice Standardization Sep 2024 V1.0','A guide for cleaning up data and standardizing invoices for Cennos as of September 2024.','1288','Active','Pending',2,'2025-04-01'),(28,'TISO28','Training ISO document','An instructional guide on using ISO Document system','1288','Active','Pending',2,'2025-04-01'),(29,'TRPA29','Training RPA projects completed in August (2024)','A review of RPA projects completed in August 2024, detailing achievements and lessons learned.','1288','Active','Pending',2,'2025-04-01'),(30,'EAI30','Effective tips for using AI for searching','Practical advice on how to effectively utilize AI-powered tools for searching and information retrieval.','1288','Active','Pending',2,'2025-04-01'),(31,'NLT31','Nhu Luong Test','Nhu Luong Test','1288','Active','Pending',2,'2025-04-26');
/*!40000 ALTER TABLE `e_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `e_class`
--

DROP TABLE IF EXISTS `e_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_class` (
  `id` int NOT NULL AUTO_INCREMENT,
  `prev_class` int DEFAULT NULL,
  `code` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  `instructor` int DEFAULT NULL,
  `duration` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_date` datetime DEFAULT NULL,
  `end_date` datetime DEFAULT NULL,
  `participants` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `status` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'Active',
  `updated_at` date DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_class`
--

LOCK TABLES `e_class` WRITE;
/*!40000 ALTER TABLE `e_class` DISABLE KEYS */;
INSERT INTO `e_class` VALUES (1,NULL,'CLASS001',1,1,'30','2025-05-01 09:00:00','2025-05-31 18:00:00','1,2,3','Active','2025-04-28',1),(2,NULL,'CLASS002',2,2,'30','2025-05-15 10:00:00','2025-06-15 18:00:00','4,5','Active','2025-04-28',2);
/*!40000 ALTER TABLE `e_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `e_class_check`
--

DROP TABLE IF EXISTS `e_class_check`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_class_check` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int DEFAULT NULL,
  `class_id` int DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  `section_id` int DEFAULT NULL,
  `quiz_id` int DEFAULT NULL,
  `status` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` date DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_class_check`
--

LOCK TABLES `e_class_check` WRITE;
/*!40000 ALTER TABLE `e_class_check` DISABLE KEYS */;
INSERT INTO `e_class_check` VALUES (1,1,1,1,1,1,'Completed','2025-04-28',1),(2,4,2,2,4,2,'In Progress','2025-04-28',2);
/*!40000 ALTER TABLE `e_class_check` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `e_course`
--

DROP TABLE IF EXISTS `e_course`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_course` (
  `id` int NOT NULL AUTO_INCREMENT,
  `topic_name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `banner` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `overview` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `type` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `team_group` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `team` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `version` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `language` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `certificate` int DEFAULT NULL,
  `status` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_course`
--

LOCK TABLES `e_course` WRITE;
/*!40000 ALTER TABLE `e_course` DISABLE KEYS */;
INSERT INTO `e_course` VALUES (1,'Introduction to PHP','https://netweb.vn/wp-content/uploads/2019/07/php-la-gi-1-1.jpg','Learn PHP from scratch','Comprehensive PHP course for beginners','Course','IT','1,2','1.0','English','2025-05-01 09:00:00','2025-05-31 23:59:59',1,'Publish','2025-04-28 10:00:00',1),(2,'UI Design Fundamentals','https://moontelict.com/wp-content/uploads/2024/11/course_1662637290-1.jpg','Basic principles of UI design','Learn color theory, typography and layout','Course','IT','1,2','1.0','English','2025-05-15 10:00:00','2025-06-15 23:59:59',1,'Publish','2025-04-28 11:00:00',2),(15,'React Masterclass','https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80','Become a React expert','Learn React hooks, context API, and advanced state management','Course','IT','1','3.0','English','2025-09-05 10:00:00','2025-10-20 23:59:59',1,'Publish','2025-04-30 09:00:00',1),(16,'UX Research Methods','https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80','Learn professional UX research','Master user interviews, surveys, and usability testing','Course','IT','1','2.1','English','2025-07-15 09:00:00','2025-08-30 23:59:59',1,'Publish','2025-04-30 10:00:00',2),(17,'Docker for Developers','https://vntalking.com/wp-content/uploads/2020/06/docker-la-gi.png','Containerization fundamentals','Learn Docker from basics to deployment strategies','Course','IT','1','1.5','English','2025-08-01 14:00:00','2025-09-15 23:59:59',1,'Publish','2025-04-30 11:00:00',1),(18,'Technical Writing','https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80','Documentation skills','Learn to write clear technical documentation','Course','IT','1','1.0','English','2025-06-20 09:00:00','2025-06-22 17:00:00',1,'Publish','2025-04-30 12:00:00',6),(19,'Advanced CSS','https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80','Modern CSS techniques','Master CSS Grid, Flexbox, and animations','Test','IT','1','2.2','English','2025-07-01 10:00:00','2025-08-10 23:59:59',1,'Pending','2025-04-30 13:00:00',1),(20,'Business Analytics','https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80','Data-driven decision making','Learn to analyze business data with Excel and Power BI','Course and Test','IT','1','1.3','English','2025-08-10 09:00:00','2025-09-25 23:59:59',1,'Publish','2025-04-30 14:00:00',3),(21,'Standards for the Public Report in 2025 - Apr.2025','https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=400&q=80','Cybersecurity penetration testing','<p>This training session is designed to introduce and align all teams with the standardized guidelines for creating Public Reports in 2025. Participants will gain a clear understanding of the structure, format, and content requirements necessary to ensure consistency and accuracy across all team reports. </p><p>By the end of this training, attendees will be equipped with the knowledge and tools needed to: </p><p>- Apply the standard Public Report format effectively. </p><p>- Maintain a professional and unified reporting style. </p><p>- Avoid common mistakes and improve report quality. </p><p><strong><em>This training is essential for any team member involved in the creation, review, or submission of public-facing reports.</em></strong></p>','Course and Test','IT','1','1.0','English','2025-09-10 14:00:00','2025-11-10 23:59:59',1,'Publish','2025-04-30 15:00:00',5);
/*!40000 ALTER TABLE `e_course` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `e_course_quiz`
--

DROP TABLE IF EXISTS `e_course_quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_course_quiz` (
  `id` int NOT NULL,
  `name` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(11) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  `lesson_id` int DEFAULT NULL,
  `detail` text COLLATE utf8mb4_unicode_ci,
  `time` int DEFAULT NULL,
  `score` text COLLATE utf8mb4_unicode_ci,
  `quizzes` text COLLATE utf8mb4_unicode_ci,
  `max_attempt` int DEFAULT '1',
  `pass_score` double DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_course_quiz`
--

LOCK TABLES `e_course_quiz` WRITE;
/*!40000 ALTER TABLE `e_course_quiz` DISABLE KEYS */;
INSERT INTO `e_course_quiz` VALUES (1,'JS Basics Quiz','chapter',201,5,'Test JavaScript fundamentals',30,'{\"total\":100,\"pass\":60}','[{\"question\":\"What is closure in JS?\",\"options\":[\"Function inside function\",\"Scope retention\",\"Both\"],\"answer\":\"Both\",\"score\":20}]',3,60,'2025-05-05 01:29:25',101),(2,'PHP Arrays Test','practice',202,3,'PHP array manipulation',20,'{\"total\":50,\"pass\":25}','[{\"question\":\"How to count array elements?\",\"options\":[\"count()\",\"sizeof()\",\"Both\"],\"answer\":\"Both\",\"score\":10}]',2,50,'2025-05-05 01:29:25',102),(3,'AJAX Implementation','project',203,7,'Test AJAX knowledge',45,'{\"total\":80,\"pass\":48}','[{\"question\":\"AJAX stands for?\",\"options\":[\"Async JS and XML\",\"Async JS and XHR\"],\"answer\":\"Async JS and XML\",\"score\":15}]',1,60,'2025-05-05 01:29:25',103),(4,'PHP OOP Quiz','chapter',202,6,'Object Oriented PHP',40,'{\"total\":100,\"pass\":70}','[{\"question\":\"What is encapsulation?\",\"options\":[\"Data hiding\",\"Code organization\",\"Both\"],\"answer\":\"Both\",\"score\":25}]',2,70,'2025-05-05 01:29:25',102),(5,'JS DOM Manipulation','practice',201,4,'Document Object Model',25,'{\"total\":60,\"pass\":36}','[{\"question\":\"How to select element by ID?\",\"options\":[\"getElementById()\",\"querySelector()\",\"Both\"],\"answer\":\"Both\",\"score\":12}]',3,60,'2025-05-05 01:29:25',101);
/*!40000 ALTER TABLE `e_course_quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `e_lesson`
--

DROP TABLE IF EXISTS `e_lesson`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_lesson` (
  `id` int NOT NULL AUTO_INCREMENT,
  `course_id` int DEFAULT NULL,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_lesson`
--

LOCK TABLES `e_lesson` WRITE;
/*!40000 ALTER TABLE `e_lesson` DISABLE KEYS */;
INSERT INTO `e_lesson` VALUES (1,1,'PHP Basics','2025-04-28 10:30:00',1),(2,1,'Working with Databases','2025-04-28 10:30:00',1),(3,2,'Color Theory','2025-04-28 11:30:00',2),(4,2,'Typography','2025-04-28 11:30:00',2);
/*!40000 ALTER TABLE `e_lesson` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `e_lesson_section`
--

DROP TABLE IF EXISTS `e_lesson_section`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_lesson_section` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `type` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `time` int DEFAULT NULL,
  `content` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `detail` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `lesson_id` int DEFAULT NULL,
  `course_id` int DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_lesson_section`
--

LOCK TABLES `e_lesson_section` WRITE;
/*!40000 ALTER TABLE `e_lesson_section` DISABLE KEYS */;
INSERT INTO `e_lesson_section` VALUES (1,'PHP Syntax','Video',15,'php_syntax.mp4','Learn basic PHP syntax',1,1,'2025-04-28 10:45:00',1),(2,'Variables','Text',10,'variables.txt','Understanding PHP variables',1,1,'2025-04-28 10:45:00',1),(3,'MySQL Connection','Slide',20,'mysql_connect.mp4','Connecting PHP to MySQL',2,1,'2025-04-28 10:45:00',1),(4,'Color Wheel','Document',10,'color_wheel.jpg','Understanding the color wheel',3,2,'2025-04-28 11:45:00',2);
/*!40000 ALTER TABLE `e_lesson_section` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `e_quiz`
--

DROP TABLE IF EXISTS `e_quiz`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_quiz` (
  `id` int NOT NULL AUTO_INCREMENT,
  `type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `quiz_id` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `team_id` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `question` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `question_image` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `answers` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `options` mediumtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `description` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `category_code` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_category_code` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `correct_feedback` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `correct_url` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `incorrect_feedback` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `incorrect_url` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `status` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_quiz`
--

LOCK TABLES `e_quiz` WRITE;
/*!40000 ALTER TABLE `e_quiz` DISABLE KEYS */;
INSERT INTO `e_quiz` VALUES (1,'Matching Information','QUIZ002','4,5','Which color scheme uses colors that are next to each other on the color wheel?',NULL,'[\"Create Onboard training\",\"Import\",\"Template\",\"Report\",\"Quiz\"]','[\"Create Onboard training\",\"Import\",\"Template\",\"Report\",\"Quiz\"]','Color theory basics','1','2','Correct! Analogous colors are next to each other',NULL,'Incorrect. Try again!',NULL,'Active',2,'2025-04-28 12:00:00'),(3,'Text Answer','QUIZ003','1,2','Match the following tab to their corresponding functions in the Onboard training Section?',NULL,'[\"Can understand and generate human-like text, quickly finding information on a topic by asking questions\",\"Powerful search engine for structured data, can understand natural language queries, and return relevant data and insights\",\"Provides concise, accurate answers to questions and searches across many websites to find the most relevant information\"]','[\"Chat GPT\",\"Gemini\",\"Perplexity\"]',NULL,'2','3','Correct! Analogous colors are next to each other',NULL,'Please view more details in this document',NULL,'Active',1,'2025-04-28 12:00:00');
/*!40000 ALTER TABLE `e_quiz` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `e_quiz_assign`
--

DROP TABLE IF EXISTS `e_quiz_assign`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_quiz_assign` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int DEFAULT NULL,
  `fullname` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `test_id` int DEFAULT NULL,
  `answers` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `text_result` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `score` double NOT NULL DEFAULT '0',
  `total_score` double DEFAULT NULL,
  `attempt` int DEFAULT '0',
  `is_scored` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `class_id` int DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_quiz_assign`
--

LOCK TABLES `e_quiz_assign` WRITE;
/*!40000 ALTER TABLE `e_quiz_assign` DISABLE KEYS */;
INSERT INTO `e_quiz_assign` VALUES (1,1,'John Doe',1,'1:a,2:b','Passed',8.5,10,1,'Yes',1,'2025-04-28 14:00:00'),(2,4,'Jane Smith',2,'1:a,2:a','Passed',9,10,1,'Yes',2,'2025-04-28 15:00:00');
/*!40000 ALTER TABLE `e_quiz_assign` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `e_quiz_result`
--

DROP TABLE IF EXISTS `e_quiz_result`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_quiz_result` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int DEFAULT NULL,
  `test_id` int DEFAULT NULL,
  `score` double DEFAULT NULL,
  `attempt` int DEFAULT NULL,
  `class_id` int DEFAULT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_quiz_result`
--

LOCK TABLES `e_quiz_result` WRITE;
/*!40000 ALTER TABLE `e_quiz_result` DISABLE KEYS */;
INSERT INTO `e_quiz_result` VALUES (1,1,1,8.5,1,1,'2025-04-28 14:00:00'),(2,4,2,9,1,2,'2025-04-28 15:00:00');
/*!40000 ALTER TABLE `e_quiz_result` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `e_sub_category`
--

DROP TABLE IF EXISTS `e_sub_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `e_sub_category` (
  `id` int NOT NULL AUTO_INCREMENT,
  `category_id` int DEFAULT NULL,
  `sub_category_code` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `sub_category` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `detail` varchar(500) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `pi_approved` varchar(11) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `team_id` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci,
  `updated_at` date DEFAULT NULL,
  `updated_by` int DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `e_sub_category`
--

LOCK TABLES `e_sub_category` WRITE;
/*!40000 ALTER TABLE `e_sub_category` DISABLE KEYS */;
INSERT INTO `e_sub_category` VALUES (1,1,'SUBCAT001','Web Development','Frontend and backend web development','Active','Yes','1,2','2025-04-28',1),(2,1,'SUBCAT002','Mobile Development','Android and iOS development','Active','Yes','1,3','2025-04-28',1),(3,2,'SUBCAT003','UI Design','User interface design principles','Active','Yes','4','2025-04-28',2);
/*!40000 ALTER TABLE `e_sub_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `profiles`
--

DROP TABLE IF EXISTS `profiles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `profiles` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `bio` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `mail` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `facebook` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `skype` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `phone` varchar(11) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `banner` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `avatar` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '../web/images/avatar/ugly.png',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `profiles`
--

LOCK TABLES `profiles` WRITE;
/*!40000 ALTER TABLE `profiles` DISABLE KEYS */;
INSERT INTO `profiles` VALUES (1,1,'Senior PHP Developer with 10 years experience','john.doe@company.com','johndoe','johndoe.skype','1234567890','banner1.jpg','../web/images/avatar/john.jpg'),(2,2,'Creative UI/UX Designer','jane.smith@company.com','janesmith','janesmith.skype','0987654321','banner2.jpg','../web/images/avatar/jane.jpg');
/*!40000 ALTER TABLE `profiles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'admin'),(2,'member'),(3,'leader'),(4,'softskill'),(5,'HR');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `fullname` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `content` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `image` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '../web/images/team.jpg',
  `position` int NOT NULL DEFAULT '2',
  `status_team` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `work_shift` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `catalog` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `work_group` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `group_mail` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `teamid` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `customer` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `customer_code` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `teamgroup` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT 'Undefined',
  `leaders` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `supervisor` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `project_manager` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'Dev Team','Development Team','Web and application development team','../web/images/team_dev.jpg',1,'Activated','Day shift 1','IT','Development','dev@company.com','1','Internal','INT001','IT','Mai','Ngoc','Tu'),(2,'Design Team','Design Team','UI/UX design team','../web/images/team_design.jpg',1,'Activated','Day shift 2','Design','Creative','design@company.com','2','Internal','INT001','Creative','Thang','','');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `employee_id` int DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `fullname` mediumtext CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `mission_id` int DEFAULT NULL,
  `auth_key` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `password_reset_token` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `role_id` int DEFAULT NULL,
  `team_id` int DEFAULT NULL,
  `day` int DEFAULT NULL,
  `month` int DEFAULT NULL,
  `year` int DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `mail_pass` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `team` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `mission` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `qualify` int DEFAULT NULL,
  `qualify_date` date DEFAULT NULL,
  `ip` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `ip_new` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `otp` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `date_verify` date DEFAULT NULL,
  `attempt` int DEFAULT NULL,
  `first_login` date DEFAULT NULL,
  `resendotp` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `changepass` varchar(11) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '0',
  `meeting_level` varchar(1) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci NOT NULL DEFAULT '0',
  `otppass` int DEFAULT NULL,
  `dateotppass` datetime DEFAULT NULL,
  `otppassview` int DEFAULT NULL,
  `otppassviewve` datetime DEFAULT NULL,
  `workday` date DEFAULT NULL,
  `gmail` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `secretkey` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `totp` int NOT NULL DEFAULT '0',
  `active` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `manage_team` text CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci,
  `office` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `work_mode` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `work_shift` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `phone` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `discord` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_unicode_ci DEFAULT NULL,
  `end_date` date DEFAULT NULL,
  `discord_uid` bigint DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3 COLLATE=utf8mb3_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,1001,'johndoe','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','John Doe',1,'authkey1',NULL,1,1,15,5,1990,'john.doe@company.com','mailpass1','2025-04-28 08:00:00','Dev','Developer',1,'2025-01-15','192.168.1.1','192.168.1.1','123456','2025-04-28',0,'2025-01-15',NULL,'0','1',NULL,NULL,NULL,NULL,'2025-01-15','john.doe@gmail.com','secret1',1,'Yes','1,2','Headquarters','Office','Day','1234567890','johndoe#1234',NULL,123456789012345678),(2,1002,'janesmith','$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi','Jane Smith',2,'authkey2',NULL,1,2,20,6,1985,'jane.smith@company.com','mailpass2','2025-04-28 08:00:00','Design','Designer',1,'2025-01-20','192.168.1.2','192.168.1.2','654321','2025-04-28',0,'2025-01-20',NULL,'0','1',NULL,NULL,NULL,NULL,'2025-01-20','jane.smith@gmail.com','secret2',1,'Yes','2','Headquarters','Hybrid','Day','0987654321','janesmith#5678',NULL,987654321098765432);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-05-05 16:15:10
