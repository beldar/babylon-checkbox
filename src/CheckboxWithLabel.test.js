import React from 'react';
import CheckboxWithLabel from './CheckboxWithLabel';
import { mount } from 'enzyme';

let component;

const renderComponent = (props) => component = mount(<CheckboxWithLabel {...props} />);

describe('CheckboxWithLabel', () => {
  beforeEach(() => {
    renderComponent();
  });

  it( 'should render a Checkbox and a label component correctly', () => {
    expect(component.find('Checkbox').length).toBe(1);
    expect(component.find('label').length).toBe(1);
  });

  it( 'should pass all props to Checkbox', () => {
    const props = { a:1, b:2 };
    renderComponent(props);
    expect(component.find('Checkbox').props()).toEqual(props);
  });

  it( 'should forward the onclick events on the label to Checkbox', () => {
    const event = { target: {}};
    component.node.check = { onClick: jest.fn() };
    component.find('label').simulate('click', event);
    expect(component.node.check.onClick).toBeCalled();
  });
});
