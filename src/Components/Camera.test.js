import React from 'react';
import { shallow } from 'enzyme';

// import component
import Camera from './Camera';

it('renders without crashing', () => {
  shallow(<Camera />);
});
