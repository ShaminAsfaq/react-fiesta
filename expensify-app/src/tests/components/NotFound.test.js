import React from 'react';
import NotFound from '../../components/NotFound';
import { shallow } from 'enzyme';

test('Testing NotFoundComponent', () => {
    const wrapper = shallow(<NotFound />);
    expect(wrapper).toMatchSnapshot();

    // const renderer = new ReactShallowRenderer();
    // renderer.render(<Header />)
    // expect(renderer.getRenderOutput()).toMatchSnapshot();
})


 