export const ADD_TODO = "add_todo";
export const TOGGLE_TODO = "toggle_todo";
export const DELETE_TODO = "delete_todo";
export const UPDATE_TODO = "update_todo";
export const REMOVE_TODO = "remove_todo";
export const CLEAR_TODO = "clear_todo";

export default function todosReducer(state, action) {
  let todos = [...state];
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          let updatedTodo = {
            ...todo,
            done: !todo.done,
          };
          return updatedTodo;
        }
        return todo;
      });
    case UPDATE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          let updatedTodo = {
            ...todo,
            todo: action.payload.todo,
          };
          return updatedTodo;
        }
        return todo;
      });
    case REMOVE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    case CLEAR_TODO:
      return todos.filter((todo) => todo.done === false);
    default:
      return todos;
  }
}
