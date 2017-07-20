var expect = require('expect');
var reducer = require('reducers');

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
});