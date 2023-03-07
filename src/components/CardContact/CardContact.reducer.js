
import pic1 from '../../images/pic1.png';
import pic2 from '../../images/pic2.png';
import pic3 from '../../images/pic3.png';

// let usersArray = [{
//   "name": "Erafi Ahonaf",
//   "email": "erafi@gmail.com",
//   "number": "01875510966",
//   "btnClass": "danger",
//   "gender": "Male",
//   "imageSource": `${pic1}`,
//   "maritalStatus": "married",
//   "age":23,
// }, {
//   "name": "Ishan Sarkar",
//   "email": "ishan@gmail.com",
//   "number": "01719058105",
//   "btnClass": "warning",
//   "gender": "Female",
//   "imageSource": `${pic2}`,
//   "maritalStatus": "married",
//   "age":26,

// }, {
//   "name": "John Doe",
//   "email": "jdoe@gmail.com",
//   "number": "01875510966",
//   "btnClass": "danger",
//   "gender": "Male",
//   "imageSource": `${pic3}`,
//   "maritalStatus": "single",
//   "age":19,
// }]

const initialState = {
  user: [],
  searchUser:{}
};

const createUser = (state, action) => {
  return [...state.user, action.payload]; //Copying state array 
}



export default function reducer1(state = initialState, action) {
  switch (action.type) {
    case "SET_USERS":
      return { ...state, user: action.payload };
    case "ADD-USER":
      let newArray = createUser(state, action)
      return { ...state, user: newArray };
    case "SEARCH_USER":
      return { ...state, searchUser: action.payload };
    default:
      return state;
  }
}
