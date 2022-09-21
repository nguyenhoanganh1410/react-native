import { SET_PHONE } from "./Actions";
import { phones } from "../data/imageData";
//innite state
const initState = {
  phone: phones[0],
};

//depatch
const Reducer = (state, action) => {
  switch (action.type) {
    case SET_PHONE:
      return {
        ...state,
        phone: action.payload,
      };
  }
};

export { initState };
export default Reducer;
