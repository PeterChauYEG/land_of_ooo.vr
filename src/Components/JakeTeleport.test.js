import React from 'react';
import { shallow } from 'enzyme';

// import component
import JakeTeleport from './JakeTeleport';

it('renders without crashing', () => {
  shallow(<JakeTeleport />);
});
