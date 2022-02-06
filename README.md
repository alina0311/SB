# THE BOARD GAMES SHELF
This project is a website about Board Games created using **React**.

## Restricting and Allowing Access
**Public Routes:**
- Home _/home_
- Sign up _/signup_
- Log in _/login_
- Forget Password _/forget-password_
- Not Found Page / 404 page 

**Private Routes:**
- Profile _/profile_
- Collection _/collection_

## Authentification
For this, **Firebase** was used.

The following are **reusable components**:
- Header (Navbar)
- Footer
- Boardgame

## State Manager
- React Hooks (firebase authentification, search functionality)


## Functionalities
1. A user can log in, sign up and log out.
2. A user can view their profile.
3. If a user forgot their password, they can reset it and they will be sent a link to their email address to restore it.
4. On the **Collection** page, a user can view all the board games and the details for each one of them: name, number of players, year, game duration, theme, mechanics and a rating.
5. On the **Collection** page, a user can search the board games list by name, mechanics or theme.
6. If a user enters a bad request, the **Not Found Page** will appear.

## How to run the app?
Use _npm start_.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
