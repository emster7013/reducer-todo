//build out a simple reducer with just a default return for now.
//In the same file, build initial state object that has a list of todos with the following shape 
// {
//     item: 'Learn about reducers',
//     completed: false,
//     id: 3892987589
//   } Then export the reducer and the initial state object

export const initialState= [
    {
        item: 'Learn about reducers',
        completed: false,
        id:  3892987589
    },

]
export const todoReducer = (state, action) => {
    switch (action.type) {
      case 'ADD':
        return [
          ...state,
          { item: action.item, completed: false, id: Date.now() }
        ];
      case 'TOGGLE_TODO':
        return state.map(todo => {
          if (todo.id === action.id) {
            return {...todo, completed: !action.completed}
          } else {
            return todo;
          }
        })
      case 'CLEAR_COMPLETED':
        return state.filter(todo => {
          return !todo.completed
        })
      default:
        return state;
    }
  };