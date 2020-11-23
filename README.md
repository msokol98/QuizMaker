# QuizMaker

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Overview](#overview)
  * [Screenshots](#screenshots)
  * [API Documentation](#api-documentation)
  * [Built With](#built-with)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

Accessible at http://45.33.84.167

### Overview

Motivation for QuizMaker web application:

The website allows you to make custom quizzes, which you can then share with your friends. 

How it works:
* Register an account and sign in.
* Click 'Create Quiz' on the homepage or navigation bar.
* Add questions to your quiz, providing incorrect answers and one correct answer.
* Share the quiz link with your friends.

### Screenshots

**Landing page**\
![landing][product-screenshot-landing]

**Creating a quiz**\
![create-quiz][product-screenshot-create-quiz]

**Taking a quiz**\
![taking-quiz][product-screenshot-taking-quiz]

**Quiz feedback**\
![quiz-feedback][product-screenshot-quiz-feedback]

**Browse public quizzes**\
![view-quizzes][product-screenshot-view-quizzes]

**Account portal**\
![account-portal][product-screenshot-account-portal]


### API Documentation

**Index**

Purpose:  
	* Retrieves quizzes created by anyone (sorted by creation timestamp by default)
	
Endpoint:  
	* GET  http://45.33.84.167:8080/api/quizzes
	
Request Params:  
	* topic (string) - Optional. Specifies a topic by which to filter quizzes.  
	* page (integer) - Optional. Used for pagination.  
	* size (integer) - Optional. Specifies how many quizzes to return.  
 
 Note: If page or size are omitted, then no pagination occurs.  
 Note 2: API does not currently provide simultaneous filtering by topic and pagination.   
 
Response:  
	* Responds with an array in JSON format containing the selected quizzes.  
	

### Built With
These are the major technologies that I used to create this web application.

* [React](https://reactjs.org/)
* [Spring Boot](https://spring.io/projects/spring-boot)
* [Ubuntu Server from Linode](https://linode.com)


<!-- CONTACT -->
## Contact

Mitchell Sokol - msokol@live.unc.edu





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[product-screenshot-account-portal]: https://github.com/msokol98/quizmaker/blob/master/screenshots/accountportal.png
[product-screenshot-create-quiz]: https://github.com/msokol98/quizmaker/blob/master/screenshots/createquiz.png
[product-screenshot-landing]: https://github.com/msokol98/quizmaker/blob/master/screenshots/landing.png
[product-screenshot-quiz-feedback]: https://github.com/msokol98/quizmaker/blob/master/screenshots/quizfeedback.png
[product-screenshot-view-quizzes]: https://github.com/msokol98/quizmaker/blob/master/screenshots/takequizzes.png
[product-screenshot-taking-quiz]: https://github.com/msokol98/quizmaker/blob/master/screenshots/takingaquiz.png
