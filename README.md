# 📦 Shipping Box App

## 🚀 Overview
This is a React-based shipping box management application. It allows users to enter details about shipping boxes, calculate shipping costs based on destination, and view saved boxes.

## 🛠️ Features
- Form to add a box (Receiver Name, Weight, Box Color, Destination Country).
- Dynamic Color Picker (with RGB format conversion).
- Automatic shipping cost calculation using predefined multipliers.
- List view to display saved boxes.
- Persistent storage using LocalStorage.

## 🎨 Tech Stack
- React.js (Functional Components & Hooks)
- React Context API (State Management)
- React Colorful (Color Picker)
- LocalStorage (for data persistence)
- CSS for styling

## 📦 Installation

1. Clone the repository: git clone https://github.com/aditya-arch/react-assignment.git

2. Navigate to the project folder: cd shipping-box-app
3. Install dependencies: npm install
4. Create a .env file in the root directory with the following:

   REACT_APP_SWEDEN_MULTIPLIER=7.35 
   REACT_APP_CHINA_MULTIPLIER=11.53 
   REACT_APP_BRAZIL_MULTIPLIER=15.63 
   REACT_APP_AUSTRALIA_MULTIPLIER=50.09

5. Start the development server: npm start
6. Open your browser and navigate to http://localhost:3000.
