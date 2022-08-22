# Flashcard Project - Using Redux ToolKit

This flashcard app project demonstrates the use of Redux and Redux Toolkit to manage the complex state of a flashcard-style quiz app.

The user can create topics using a drop-down menu which can be assigned to Quiz Title.

After creating a quiz title, and  a card with both front and back colors, the user can then navigate to Quizzes page to see the quizzes created and attached to a specific title.

Clicking on the front or back keyword will flip the card and will show a different color e.g. Black or Blue depending what the user had selected.

## Project knowledge requirements

You should be familiar with React and Redux and Redux Toolkit concepts

## Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## To Run this application follow these steps & run the command in the project root directory

### `npm install`

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

## Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

## To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over

## Questions

Is this appropriately scoped? Does it have too many features? Too few?
