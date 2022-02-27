# OGL Software Developer Test
Provided in this project is a framework running basic services which can be consumed via an API.

The code base contains a consumable product inventory system, alongside partial implementation of a customer details module.

Your tasks will involve:
 
- consuming the existing services using a React frontend webpage.

- extending the functionality of the backend services

---

Please try to complete as many of the below tasks as possible. 

*Do not worry about completing all tasks, please submit code to the last point your system was working.*

*If you have any implementation questions please enquire via HR who pass on to the dev team.*

Opportunity to discuss possible solutions to tasks not achieved will be provided. 

In addition, feel free to annotate the code with any thoughts or questions you may wish to bring up during the following interview. 

---

The backend services use Spring Boot with Spring Web MVC, Spring Data JPA and an H2 embedded database.

You should have JDK 11 installed on your machine, we recommend: https://adoptopenjdk.net/.

The database structure is discarded when the services are stopped and rebuilt from
`src/main/resources/schema.sql` and `src/main/resources/data.sql` when started.

## Running the Backend
### Via IDE
The code provided is a Maven project

If using IntelliJ Idea Ultimate, VSCode, Netbeans, Eclipse etc. then the IDE should detect the maven 
structure and provide the nessecary controls to build and run as per your IDE's instructions.

If in doubt, refer to the terminal commands below.

### Via Terminal
Compile
```shell script
mvn clean package
```

Run
```shell script
mvn spring-boot:run
```
The backend will now be available to consume from http://localhost:8080.

CD into react_frontend
Run npm start


## Submission
Package all your sources into a zip or tarball with instructions on how
to run your frontend.

## Tasks
### Part 1. Get the services running 
Using the instructions above, confirm the services are running and are reachable.

When you believe the services are running, you can confirm this by navigating to the following example URL in a browser:

http://localhost:8080/product

You should be presented with a JSON object of product data.

### Part 2. Products
These tasks involve consuming the pre-provided implementation of products in the API, hooking into a user interface and making minor changes to the data structure. 
##### Task 2.1 - Product List User Interface

User Story - *As a user, I want to see a listing of my products in the system.* 

Details - Using the React framework create a simple user interface webpage (Ideally a Single Page Application) that allows the existing <b>Product</b> data (id, sku and price) from the above URL to be displayed in a list.

The services framework is designed to be decoupled from any UI layer.

##### Task 2.2 - Changing the data schema

User Story - *As a user, I want to see descriptions against my products.*

Details - Review the SQL files in the resources directory.

Based on the existing code, add a new "description" column to the Product table.

The new column should be a text field, max size 255 chars and not nullable.

Review the class `com.ogl.devtest.product.Product`.

Based on the existing code, add code to support the new "description" field.

Update your UI to consume and display the new field. 

##### Task 2.3 - Creating Products

User Story - *As a user, I want the ability to add products to my inventory.*

Details - Provide functionality in your UI that allows the user to capture the following information to be saved as a new Product record:
        
- An SKU
- A description
- A price

The `/product` endpoint will allow product data to be saved by making a <b>POST</b> request.

The endpoint accepts a JSON object representing a product with the same fields as the Product class (id, sku, description and price).

Hint: leave id null to have the database auto-assign its value.

##### Task 2.4 - Updating Products

User Story - *As a user, I want the ability to update product details in my inventory.*

Details - Provide functionality in your UI that allows the user to select an existing Product record, update any of the sku, description and price fields and save those changes back.

Hint: Using the same endpoint as above with the <b>id</b> field set will overwrite any product data matching that id.  

### Part 3. Customers
These tasks involve extending the services to implement endpoints for serving customer data, and implementing some more complex data structures.
##### Task 3.1 Customer Endpoints
User Story - *As a user I want to view, create and edit a list of all my customers.*

Detail - Using the existing code as a guide, add the ability for the services to expose the customer data to the same capabilities of the product classes.

Update your User Interface with an option to list, create and update customers as per the Product tasks above.

##### Task 3.2 Add Extra Fields to Customer
*As a user I would like to see my customer's addresses.*

An address should include a street, city, county and postcode.

Please provide any validation as you would consider appropriate.

### Part 4. Advanced

These tasks involve implementing some more advanced features.

##### Task 4.1 Add the ability to sort customers
*As a user I would like to be able to sort customers by either name or by postcode as a minimum. *
Note - you may if you wish, add any additional fields at your discretion

Expose this ability in the UI as you see fit

##### Task 4.2 Provide a duplication check

*As a user I would like the system to identify if the customer details I'm adding are already in the system. Specifically, checking the name and postcode of the customer  *

Alter the process for adding and changing customers to take account of the above and provide a warning in the UI as you see appropriate
