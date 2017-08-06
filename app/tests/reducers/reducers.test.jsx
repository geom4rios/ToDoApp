var expect = require('expect');
var reducer = require('reducers');
var moment = require('moment');

//we use deep freeze to verify that the parameter passed into df()
//did not change state at any time.
var df = require('deep-freeze-strict');

describe('Reducers', () => {
    describe('searchTextReducer', () => {
        it('should set searchText', () => {
            var action = {
                type: 'SET_SEARCH_TEXT',
                searchText: 'dog'
            };
            var res = reducer.searchTextReducer(df(''), df(action));

            expect(res).toEqual(action.searchText);
        });
    });

    describe('showCompletedReducer', () => {
        it('should toggle completed', () => {
            var action = {
                type: 'TOGGLE_SHOW_COMPLETED'
            }
            var res = reducer.showCompletedReducer(df(false), df(action));

            expect(res).toEqual(true);
        });
    });

    describe('todosReducer', () => {
        it('should add new todo', () => {
            var action = {
                type: 'ADD_TODO',
                todo: {
                    id: 'abc123',
                    text: 'Something to do',
                    completed: false,
                    createdAt: 92343823
                }
            };

            var res = reducer.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(action.todo);
        });

        // defined todos array with realistic todo item
        // generate action
        // call reducer and assert completed flipped.
        it('should update todo', () => {
            var todos = [
                {
                    id: '123',
                    text: "Eat",
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: 125
                }
            ];

            var updates = {
                completed: false,
                completedAt: null
            }

            var action = {
                type: 'UPDATE_TODO',
                id: todos[0].id,
                updates
            };

            var res = reducer.todosReducer(df(todos), df(action));

            expect(res[0].completed).toEqual(updates.completed);
            expect(res[0].completedAt).toEqual(updates.completedAt);
            expect(res[0].text).toEqual(todos[0].text);
        });

        it ('should add existing todos ', () => {
            var todos = [
                {
                    id: '111',
                    text: 'anything',
                    completed: false,
                    completedAt: undefined,
                    createdAt: 33000
                }
            ];

            var action = {
                type: 'ADD_TODOS',
                todos
            };
            var res = reducer.todosReducer(df([]),df(action));

            expect(res.length).toEqual(1);
            expect(res[0]).toEqual(todos[0]);
        });

    });
});