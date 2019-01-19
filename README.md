![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)

# Authentication With PassportJS

## Introduction

In previous lessons, we learned how important it is to have your user managed (saved and retrieved) successfully. In this lab, you will do it one more time, just to make sure we are ready to move forward into new knowledge conquers :wink:
Overall, the goal is to understand how authentication and authorization work in a web applications, why these features are useful and to be able to implement signup and login features using Passport.

## Requirements

- Fork this repo
- Clone this repo

## Submission
- Upon completion, run the following commands:

```bash
git add .
git commit -m "feat: iteration 1"
git push origin master
```
- Create Pull Request so your TAs can check up your work.

## Dependencies

- mongoose: mongodb interaction service
- bcrypt: hashing algorithm
- express-session: session cookie
- connect-mongo: store sessions at mongodb
- passport: base authentication middleware
- passport-local: email & password strategy


## Iteration #1: Register user

The repo you cloned comes with a `User` model, `router` and `controller` files already made for you. It also has all the views you need, although some are empty :smile:

You need implements the template validations and save the password hashed at database.

> Check with compass or your terminal if the password is saved hashed properly at the database.

## Iteration #2: The Login Feature

- Implement passport configuration:
  - serializeUser: from user to cookie
  - deserializeUser: from cookie to user
  - auth-local: email/password strategy
- Handle auth-local strategy at authController.login method, authenticate user and redirect to user profile.

## Iteration #3: The Logout Feature

Implement user logout at authController.logout method

## Iteration #3: Protect access

Ensure user authentication at profile and users routes and redirect to login if necessary.

## Iteration #4: Render required information at the navbar

If the user is authenticated you must show his email & logout action at the navigation bar, otherwise show only register and login actions.

## Iteration #5: Delete user

Implements `usersController.delete` action, about the router login and template form is all ready done, but check it implementation! 

## Bonus

If the user is authenticated and tries to navigate to /login or /register we must redirect the user to his profile directly. 