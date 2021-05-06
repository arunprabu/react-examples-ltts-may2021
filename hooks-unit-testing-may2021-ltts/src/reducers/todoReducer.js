// reducer is a fn that takes in current state and action
// returns state mandatorily

function todoReducer(state = [], action){

  switch(action.type){
    case 'ADD_TODO': 
      return [
        ...state,
        {
          id: new Date(),
          text: action.data,
          completed: false
        }
      ];
    
    case 'EDIT_TODO':
      return state;
    
    case 'DELETE_TODO':
      return state;

    default:
      return state;
  }

}

export default todoReducer;