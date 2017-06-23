import React from 'react';
import { mount } from 'enzyme';
import App from './App';

describe('App', () => {
  it( 'should render a CheckboxWithLabel component with the right props', () => {
    const component = mount(<App />);
    const cwl = component.find('CheckboxWithLabel');
    expect(cwl.length).toBe(1);
    const propsToCheck = {
      id: 'my-checkbox',
      value: 'is-checked',
      checked: true,
      label: 'Select this checkbox',
    };
    Object.keys(propsToCheck).forEach( key => {
      expect(cwl.props()[key]).toEqual(propsToCheck[key]);
    });
  })
})
