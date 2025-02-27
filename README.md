# Quiz App Quizzy

## Description
This is a dynamic quiz application built with **React**, **TypeScript**, and **Vite**. Users can select a category and difficulty level before starting the quiz. The app fetches questions from the **Open Trivia Database API** and provides interactive answer validation with real-time feedback.

## Features
- **Category & Difficulty Selection** – Choose quiz settings before starting.
- **Dynamic Question Fetching** – Questions are retrieved from an API.
- **Answer Feedback** – Highlights correct and incorrect answers.
- **Score Tracking** – Keeps track of user performance.
- **Result Page** – Displays final quiz results.

## Installation and Running the Project

### **1. Clone the Repository**
```sh
git clone https://github.com/smnmnssn/my-react-app
cd my-react-app
```
### **2. Install dependencies**

#### Run the following command to install all required dependencies:
```sh
npm install
npm install react-router
```

#### Start the Development Server:
```sh
npm run dev
```
#### Build for Production:
```sh
npm run build
npm run preview
```

#### This is used in this project: 
```sh
React	
TypeScript	
Vite
React Router
Tailwind CSS	
Open Trivia DB API
```
#### Project Structure:
```sh
src/
│── Components/
│   ├── Question/
│   │   ├── QuestionNumber.tsx
│   │   ├── QuestionTextBox.tsx
│   │   ├── QuestionAnswerBox.tsx
│   │   ├── AnswerFeedback.tsx
│   ├── Result/
│   │   ├── ResultBox.tsx
│   ├── Start/
│   │   ├── StartBox.tsx

│── Pages/
│   ├── QuizPage.tsx
│   ├── StartPage.tsx
│   ├── ResultPage.tsx
│── api.ts (Handles API requests)
│── App.tsx
│── main.tsx
```