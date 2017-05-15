import { createStore } from 'redux'
import todoApp from './reducers'
import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters } from './actions'

const initialState = {
    visibilityFilter: VisibilityFilters.SHOW_ALL,
    todos: []
}

let store = createStore(todoApp , initialState); // initial state is optional
console.log('initial ',store.getState()); //prints initial state

//logs all state change
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

store.dispatch(addTodo('first textttttttttttttttttttttttt'));
store.dispatch(toggleTodo(0));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

// Stop listening to state updates
 unsubscribe();



