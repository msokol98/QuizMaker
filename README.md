# QuizMaker

<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Overview](#overview)
  * [Screenshots](#screenshots)
  * [API Documentation](#api-documentation)
  * [Authentication and Authorization](#authentication-and-authorization)
  * [Database Structure](#database-structure)
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
	
	
**Read**

Purpose:  
	* Retrieves a quiz of a certain id.
	
Endpoint:  
	* GET  http://45.33.84.167:8080/api/quizzes/:id  
 
Note: A valid JSON web token must be provided in the request headers.  

Response:  
	* Responds with a quiz JSON object, including topic, questions and correct answer.
	

**Create**

Purpose:  
	* Creates a new quiz in the database
	
Endpoint:  
	* POST  http://45.33.84.167:8080/api/quizzes
	
Request Body:    
	* A JSON object that represents a quiz. The object properties are a topic (string), questions (array), correct answer (string).
	
Response:  
	* Responds with the quiz id of the newly created quiz so that the website can present the user with a link to the quiz.	

Note: A valid JSON web token must be provided in the request headers.


**Update**

Purpose:  
	* Allows client to add more questions to an existing quiz.
	
Endpoint:  
	* PATCH  http://45.33.84.167:8080/api/quizzes/:id  
	
Request Body:
	* A JSON object that represents the quiz with the added questions.
 
Note: A valid JSON web token must be provided in the request headers.  

Response:  
	* Responds with an appropriate HTTP status code.
	
	
**Destroy**

Purpose:  
	* Deletes a quiz specified by an id.
	
Endpoint:  
	* DELETE  http://45.33.84.167:8080/quizzes/:id  
	
Note: The endpoint does not include "/api" because this endpoint is provided automatically by Spring Data Rest.
Note 2: A valid JSON web token must be provided in the request headers.  
Note 3: Users can only delete their own quizzes.

Response:  
	* Responds with an appropriate HTTP status code.

### Authentication and Authorization

There is a signup API that takes a JSON object representing user details (email, password, first name, last name).  
Spring Security and Spring Data JPA is used to persist the new user in a PostgreSQL database.

There is a login API that takes a JSON object representing an authentication request (email, password). If the 
credentials are valid, then a JSON web token is returned to the client.

The JSON web token should be stored in the client's web browser. When using APIs that require a valid JWT,  
frontend code needs to provide the following request header: Authorization: `Bearer ${jwt}`  

### Database Structure

A relational database persists the following entities:
* User
* Quiz
* Question
* AnswerChoice

User has a one-to-many relationship with Quiz because users can create many quizzes.  
Quiz has a one-to-many relationship with Question beecause a quiz can have many questions.  
Question has a one-to-many relationship with AnswerChoice because a question has at least two answer choices. 

Hibernate and Spring Data JPA are used to automatically map Java objects to entities persisted in a PostgreSQL database.

### Built With
These are the major technologies that I used to create this web application.

* [React](https://reactjs.org/)
* [Spring Boot](https://spring.io/projects/spring-boot)
* [Spring MVC](https://docs.spring.io/spring-framework/docs/3.2.x/spring-framework-reference/html/mvc.html)
* [Spring Security](https://spring.io/projects/spring-security)
* [PostgreSQL](https://www.postgresql.org)
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
