import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'react-notifications-component/dist/theme.css';
import ReactNotification, { store } from 'react-notifications-component';
import 'animate.css';

function App() {
  return (
    <div className="container">
      <h1>React notification</h1>
      <ReactNotification />
      <Home />
    </div>
  );
}

function Home() {
  const handleOnClickDefault = () => {
    store.addNotification({
      title: 'Wonderful!',
      message: 'Configurable',
      type: 'success',
      insert: 'top',
      container: 'top-right',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],

      dismiss: {
        duration: 2000,
        showIcon: true,
      },
      width: 600,
    });
  };

  const handleOnClick = () => {
    store.addNotification({
      content: MyNotify,
      type: 'success',
      insert: 'bottom',
      container: 'bottom-left',
      animationIn: ['animated', 'fadeIn'],
      animationOut: ['animated', 'fadeOut'],

      dismiss: {
        duration: 2000,
        showIcon: true,
      }
    });
  };

  return (
    <div>
      <button onClick={handleOnClickDefault}>Default</button>
      <button onClick={handleOnClick}>Custom</button>
    </div>
  );
}

function MyNotify() {
  return (
    <div className="bg-primary text-white">
      <h1>New Card Added</h1>
      <h4>Added by me</h4>
    </div>
  );
}
export default App;
