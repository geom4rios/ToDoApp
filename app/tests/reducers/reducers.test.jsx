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
                text: 'Walk the dog'
            };

            var res = reducer.todosReducer(df([]), df(action));

            expect(res.length).toEqual(1);
            expect(res[0].text).toEqual(action.text);
        });

        // defined todos array with realistic todo item
        // generate action
        // call reducer and assert completed flipped.
        it('should toggle todo', () => {
            var todosArray = [
                {
                    id: 1,
                    text: "Eat",
                    completed: false,
                    createdAt: moment().unix(),
                    completedAt: undefined
                },
                {
                    id: 2,
                    text: "Walk",
                    completed: true,
                    createdAt: moment().unix(),
                    completedAt: undefined
                }
            ]

            var action = {
                type: 'TOGGLE_TODO',
                id: 2
            };

            var res = reducer.todosReducer(df(todosArray), df(action));

            expect(res[1].completed).toEqual(false);
            expect(res[1].completedAt).toEqual(undefined);
        })

    });
});