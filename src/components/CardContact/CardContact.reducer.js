
const initialState = {
  user: [],
  count: 0,
  setUser: {}
};


export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case "ADD":
      return { ...state, user: action.payload };
    case "FETCH":
      console.log(action.payload.length)
      return { ...state, user: action.payload, count: action.payload.length };
    case "SET-USER":
      return { ...state, setUser: action.payload };
    default:
      return state;
  }
}
