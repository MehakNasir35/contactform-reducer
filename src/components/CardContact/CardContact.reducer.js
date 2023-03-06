
let usersArray = [{
    "name": "Erafi Ahonaf",
    "email": "erafi@gmail.com",
    "number": "01875510966",
    "btnClass": "btn-success",
    "type": "Professional",
    "imageSource": "pic2.png",
  }, {
    "name": "Ishan Sarkar",
    "email": "ishan@gmail.com",
    "number": "01719058105",
    "btnClass": "btn-primary",
    "type": "Personal",
    "imageSource": "pic1.png",
  }, {
    "name": "John Doe",
    "email": "jdoe@gmail.com",
    "number": "01875510966",
    "btnClass": "btn-success",
    "type": "Professional",
    "imageSource": "pic3.png",
  }]
  
  const initialState = {
    user: []
  };
  

export default function reducer1(state = initialState, action) {
    switch (action.type) {
      case "ADD":
        return { ...state, user: action.payload };
      case "FETCH":
        return { ...state, user: usersArray };
      default:
        return state;
    }
  }
  