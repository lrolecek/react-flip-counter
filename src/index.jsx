import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Counter from './Counter';

const App = () => (
  <>
    <Counter />
  </>
);

render(<App />, document.querySelector('#app'));
