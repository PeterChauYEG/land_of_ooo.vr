import React from 'react';
import { shallow } from 'enzyme';

// import component
import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});
