import React from 'react';
import ExpenseDashBoard from '../../components/ExpenseDashBoard';
import { shallow } from 'enzyme';

test('Testing NotFoundComponent', () => {
    const wrapper = shallow(<ExpenseDashBoard />);
    expect(wrapper).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})


 
