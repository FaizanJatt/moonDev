

How to run?

1. git clone https://github.com/FaizanJatt/moonDev
2. cd moonDev
3. cd After/moonDevAssignment
4. npm run start
5. Type I to run the app on iOS device or simulator or A to run the app on Android device/simulator.

## Technologies utilized:
Expo: Provides a framework for building cross-platform React Native apps.
React Navigation: Enables smooth navigation between screens in the app.
Redux Toolkit: Simplifies state management by providing a set of tools to create reducers and actions.
AsyncStorage: A simple, unencrypted, asynchronous, persistent key-value storage system that is global to the app.
NativeWind: A library that brings Tailwind CSS's utility-first styling approach to React Native.

## Managed redux and created the custom hook for the async storage. All the required features were implemented.
# Intern-React-Native-Assessment

# INSTRUCTIONS:
**[IMPORTANT]:** _**PLEASE USE TYPESCRIPT.  After you are done, please write a brief overview on folder structure (code walkthrough) and mention the bonus task you have picked (if any) in readme.md**_

**PLEASE USE EXPO**

**Completion Time:** 4 Hrs

Please create a seperate public repo in your personal account and share the link

- `Before`: Has existing code.
- `After`: Should have your work/code.

## Objective
Enhance and Refactor the existing app to improve readability, scalability, and maintainability

## Requirements
**1. Navigation Setup: (use react native navigation)**
    - Create two tabs: "Home" and "Cart".
  - Initially, show the "Home" screen with a list of pizzas.
  - The "Cart" tab should display the "Cart" screen with cart items.


**2. Screen Navigation:(use react native navigation)**
  - On the "Home" screen, clicking a list item should open the "Details" screen for that item.
  - On the "Cart" screen, clicking a cart item's name should open the "Details" screen for that item.
  - The "Details" screen should have a back button:
    - If accessed from the "Cart" screen, the back button should return to the "Cart" screen.
    - If accessed from the "Home" screen, the back button should return to the "Home" screen.


**3. Persistence:**
- Ensure that cart data is persistent across sessions using local storage (AsyncStorage) **[Please create a reusable custom hook for this]**.


**4. Code Refactoring:**
- Refactor and clean the code for better readability and scalability.

## Bonus **[OPTIONAL]**

1. **Redux Integration:**
Integrate Redux to manage important states (add, delete, and update cart items).


2. **Basic Styling:**
Add basic styling to all screens to improve the user interface.

_Go for bonus if you have extra time. Spend no more than 4 hours on this assignment, it's okay if you can't complete it just submit whatever you have within 4 hrs, we only wish to understand a brief overview of your skillset._

### All the best ✨
