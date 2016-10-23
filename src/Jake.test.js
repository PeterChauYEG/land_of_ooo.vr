import React from 'react';
import { shallow } from 'enzyme';

// import component 
import Jake from './Jake';

it('renders without crashing', () => {
  shallow(<Jake />);
});
