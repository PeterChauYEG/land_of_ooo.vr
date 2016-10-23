import React from 'react';
import { shallow } from 'enzyme';

// import component
import VRScene from './VRScene';

it('renders without crashing', () => {
  shallow(<VRScene />);
})