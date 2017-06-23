import React from 'react';
import Checkbox from './Checkbox';
import { shallow, mount } from 'enzyme';

let component;

const renderComponent = (props) => component = mount(<Checkbox {...props} />);

describe('Checkbox', () => {
  beforeEach(() => {
    renderComponent();
  });

  it( 'should start the checked state initalized by props', () => {
    expect(component.state().checked).toBe(false);
    renderComponent({ checked: true });
    expect(component.state().checked).toBe(true);
  });

  it( 'should change the checked state if its clicked', () => {
    expect(component.state().checked).toBe(false);
    component.simulate('click');
    expect(component.state().checked).toBe(true);
  });

  it( 'should add checkbox--checked class if checked state is true', () => {
    expect(component.find('.checkbox--checked').length).toBe(0);
    component.simulate('click');
    expect(component.find('.checkbox--checked').length).toBe(1);
  });

  it( 'should call onClick prop function if it exists onClick with the right properties', () => {
    const clickHandler = jest.fn();
    const value = '1234';
    const event = { target: {} };
    const expectedEvent = { target: { checked:true, value } };
    renderComponent({ onClick: clickHandler, value });
    component.node.onClick(event);
    expect(clickHandler).toBeCalledWith(expectedEvent);
  });

  it( 'should call onChange prop function if it exists onChange with the right properties', () => {
    const changeHandler = jest.fn();
    const value = '1234';
    const event = { target: {} };
    const expectedEvent = { target: { checked:true, value } };
    renderComponent({ onChange: changeHandler, value });
    component.node.onClick(event);
    expect(changeHandler).toBeCalledWith(expectedEvent);
  });
});
