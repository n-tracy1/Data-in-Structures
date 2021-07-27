import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//styles can go here for webpack to bundle
import styles from './scss/style.scss';

//render the app and mount it to the dom
render(
    <App />,
    document.getElementById('root')
);