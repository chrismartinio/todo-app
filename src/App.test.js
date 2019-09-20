import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow, mount } from "enzyme"
import toJson from "enzyme-to-json";
import { exportAllDeclaration } from '@babel/types';
import NewTodoForm from './NewTodoForm';
import Todo from './Todo';
import EditTodoForm from './EditTodoForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NewTodoForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Todo />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditTodoForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("matches snapshot", function() {
  let wrapper = shallow(<Todo />);
  let serialized = toJson(wrapper);
  expect(serialized).toMatchSnapshot()
})

