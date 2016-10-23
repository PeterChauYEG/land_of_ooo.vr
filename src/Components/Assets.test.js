import React from 'react';
import { shallow } from 'enzyme';

// import component
import Assets from './Assets';

it('renders without crashing', () => {
  shallow(<Assets />);
});
