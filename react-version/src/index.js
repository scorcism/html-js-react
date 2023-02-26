import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <>
      <div>
        <h2>Online Friends</h2>
        <ul>
        <OnlineFriend fullName={"Rohan das"}/>
        <OnlineFriend fullName={"Bhu"}/>
        <OnlineFriend fullName={"Gambit"}/>
        <OnlineFriend fullName={"Prashant"}/>
        </ul>
      </div>
    </>
    );
}

function OnlineFriend({fullName}){
  return  (
    <li>
      <img src="./person.png"/>
      <span>{fullName}</span>
    </li>
  )
}
