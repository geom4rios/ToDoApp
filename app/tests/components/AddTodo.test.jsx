var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');
import * as actions from 'actions';


//we want to add the raw react component the addTodo property.
var {AddTodo} = require('AddTodo');

describe('AddTodo', () => {
    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should dispatch ADD_TODO with valid data', () => {
        var spy = expect.createSpy();
        var todoText = 'Check mail';
        var action = actions.startAddTodo(todoText);
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);
        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = 'Check mail';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith(action);
    });

    it('should not dispatch ADD_TODO with invalid input', () => {
        var spy = expect.createSpy();
        var todoText = '';
        var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />);

        var $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = todoText;

        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});