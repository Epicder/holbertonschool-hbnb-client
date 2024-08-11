### HBnB Evolution Project: Part 3 - Front-end Web Development

In this phase, you'll be focusing on the front-end development of your application using HTML5, CSS3, and JavaScript ES6. Your task is to design and implement an interactive user interface that connects with the back-end services you have developed in previous parts of the project.

#### Objectives

- Develop a user-friendly interface following provided design specifications.
- Implement client-side functionality to interact with the back-end API.
- Ensure secure and efficient data handling using JavaScript.
- Apply modern web development practices to create a dynamic web application.

#### Learning Goals

- Understand and apply HTML5, CSS3, and JavaScript ES6 in a real-world project.
- Learn to interact with back-end services using AJAX/Fetch API.
- Implement authentication mechanisms and manage user sessions.
- Use client-side scripting to enhance user experience without page reloads.

#### Tasks Breakdown

1. **Design (Task 1)**
   - Complete [provided HTML and CSS files](./base_files) to match the given design specifications.
   - Create pages for Login, List of Places, Place Details, and Add Review.

2. **Login (Task 2)**
   - Implement login functionality using the back-end API.
   - Store the JWT token returned by the API in a cookie for session management.

3. **List of Places (Task 3)**
   - Implement the main page to display a list of all places.
   - Fetch places data from the API and implement client-side filtering based on country selection.
   - Ensure the page redirects to the login page if the user is not authenticated.

4. **Place Details (Task 4)**
   - Implement the detailed view of a place.
   - Fetch place details from the API using the place ID.
   - Provide access to the add review form if the user is authenticated.

5. **Add Review (Task 5)**
   - Implement the form to add a review for a place.
   - Ensure the form is accessible only to authenticated users, redirecting others to the index page.

#### Resources

- [HTML5 Documentation](https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5)
- [CSS3 Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS)
- [JavaScript ES6 Features](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [Handling Cookies in JavaScript](https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie)
- [Client-Side Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)

#### Sample Design

index.html
![hbnb_index.png](./hbnb_index.png)

place.html with embeded add_review.html
![place_full.png](./place_full.png)

