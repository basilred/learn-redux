import { combineReducers } from 'redux';
import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilters } from './actions';
const { SHOW_ALL } = VisibilityFilters;

interface ITodo { text: string, completed: boolean };

function todos(state: any = [], action: { type: string, text?: string, index?: number, filter?: any }) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false,
        },
      ];

    case TOGGLE_TODO:
      return state.map((todo: ITodo, index: number) => {
        if (index === action.index) {
          return Object.assign({}, todo, { completed: !todo.completed });
        }
        return todo;
      });

    default:
      return state;
  }
};

function visibilityFilter(state = SHOW_ALL, action: any) {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter;
    default:
      return state;
  }
};

const todoApp = combineReducers({
  visibilityFilter,
  todos,
});

export default todoApp;
