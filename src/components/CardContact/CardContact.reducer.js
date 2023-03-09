let newArray = []
const initialState = {
  user: [],
  searchUser: {},
  selectUser:{}
};

const createUser = (state, action) => {
  return [...state.user, action.payload]; //Copying state array 
}

const removeUser = (state, action) => {
  newArray = [...state.user]
  let index = action.payload.id - 1
  newArray.splice(index, 1);
  return newArray
}

const updateUser = (state, action) => {
  newArray = [...state.user]
  let index = action.payload.id - 1
  newArray[index] = action.payload
  return newArray
}

export default function reducer1(state = initialState, action) {
  switch (action.type) {
    //fetch users data from API
    case "SET_USERS":
      return { ...state, user: action.payload };
    //add a new user
    case "ADD_USER":
      newArray = createUser(state, action)
      return { ...state, user: newArray };
    //search user by id
    case "SEARCH_USER":
      return { ...state, searchUser: action.payload };
    //clear previous searched user
    case "CLEAR_USER":
      return { ...state, searchUser: {} };
    //edit user details
    case "EDIT_USER":
      newArray = updateUser(state, action)
      return { ...state,user: newArray };
    case "SELECT_USER":
      return { ...state, selectUser: action.payload };
    //delete user details
    case "DELETE_USER":
      newArray = removeUser(state, action)
      return { ...state, user: newArray };
    default:
      return state;
  }
}
