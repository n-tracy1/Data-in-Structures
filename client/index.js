//will be starter of fronted and where the react begins

import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

//styles can go here for webpack to bundle

//render the app and mount it to the dom
render(
    <App />,
    document.getElementById('root')
);