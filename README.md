# MERN Auth Application

## Description

- User Registration and Login:
   - Users can register and log in to the website.
   - During registration and login, a token is generated for verification and authentication.
   - Your Token is stored in Local storage You can check your Token in Local storage after Login/Registration.
   - User data is stored in a MongoDB database.

- Admin Path:
   - There is a dedicated admin path accessible only to admins.
   - Admins can view the list of registered users.
   - Admins have the ability to update users' email, phone, and name information.
   - Admins can delete users from the database.

   - Don't Worry I will Provide you the Admin User Email or Password. so you can check the admin section.
   - Email    : d@gmail.com
   - Password : Divansu123

- Contact Route:
    - Users can send messages to the server via the contact route.
    - All messages are saved in the database for further reference.

- Services Route:
    - The services route displays data that was manually entered into the MongoDB database.
    - This data is retrieved from MongoDB and shown on the frontend.


## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Divansu-Attri/Mern-Auth.git

 2. Install Dependencies:
    cd server/
    npm install

    cd Client/
    npm install

 3. Firstly Run the server:
      - cd server/
          - nodemon server.js

4. Then Run the Frontend
      - cd Client
           - npm run dev

 4. Open your browser and navigate to http://localhost:5173 


## Technologies Used

- Frontend:
- React
- Vite Tool
- React Toastify

- Backend:
- bcrypt
- cors
- dotenv : I Pushed .env file in github I know its not safe. I am not deploy that's Time this site because its  
           not important for me so that's why I pushed .env file also.
- express
- jsonwebtoken
- mongoose
- nodemon
- zod 
