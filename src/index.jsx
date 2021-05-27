import React from 'react';
import { render } from 'react-dom';
import './style.css';

import Counter from './Counter';

const App = () => (
  <>
    <div className="page-center">
      <Counter />
    </div>
  </>
);

render(<App />, document.querySelector('#app'));
