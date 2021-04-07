export const initialState = {
  todos: [],
};

// action objesi:
// {
//     type:"ADD_TODO",
//     payload:todo //bir todo gondereceksin onu da ekleyeceksin
// }

const reducer = (state, action) => {
  //aldıgı state ve actiona gore yeni bir state degeri olusturmak
  // dısardan constın, bir değerin degerini kafasına göre değiştirmez.
  //sideEffect içermezler. pure functionlardır. aldıgı her aynı input için aynı output üretir

  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [action.payload, ...state.todos],
      };

    //steti dogrudan degistirmiyoruz. kopyasını olusturuyoruz
    case "REMOVE_TODO":
      return {
        ...state,
        todos: [...state.todos].filter(todo => todo.id !== action.payload),
        //filter arrayi degistiriyor
      };

    case "COMPLETE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo;
          }
          return {
            ...todo,
            isCompleted: !todo.isCompleted,
          };
        }),
      };
    case "UPDATE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.todoId) {
            return todo;
          }
          return {
            ...todo,
            content: action.payload.newValue,
          };
        }),
      };

    default:
      return {
        ...state,
      };
  }
};

export default reducer;
