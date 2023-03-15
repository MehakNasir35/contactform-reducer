
  const initialState = {
    user: []
  };
  

export default function reducer1(state = initialState, action) {
    switch (action.type) {
      case "ADD":
        return { ...state, user: action.payload };
      case "FETCH":
        return { ...state, user: action.payload };
      default:
        return state;
    }
  }
  