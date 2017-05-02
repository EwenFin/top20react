import React from 'react';
import ReactDOM from 'react-dom';
import MusicContainer from './containers/MusicContainer.jsx';

window.onload = function () {
  ReactDOM.render(
    <MusicContainer />,
    document.getElementById('app')
  );
};
