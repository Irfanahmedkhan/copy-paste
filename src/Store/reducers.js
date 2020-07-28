import { ADD_OBJ_PAGE_1, REMOVE_OBJ_PAGE_1 , ADD_OBJ_PAGE_2 , REMOVE_OBJ_PAGE_2 } from './actions.js';

const initialState = {
  obj: {
    "Data1": {
      "Date": "01/02/2021 (Monday)",
      "demand": 18
    },
    "Data2": {
      "Date": "01/02/2021 (Tuesday)",
      "demand": 28
    },
    "Data3": {
      "Date": "01/02/2021 (Wednesday)",
      "demand": 38
    },
    "Data4": {
      "Date": "01/02/2021 (Thursday)",
      "demand": 48
    },
    "Data5": {
      "Date": "01/02/2021 (Friday)",
      "demand": 58
    },
    "Data6": {
      "Date": "01/02/2021 (Saturday)",
      "demand": 68
    },
    "Data7": {
      "Date": "01/02/2021 (Friday)",
      "demand": 78
    }
  }
  
};
function Page1(state = initialState, action) {
switch(action.type) {
  case ADD_OBJ_PAGE_1:
    return {
      obj: {...state.obj, ...action.data}
    };
  case REMOVE_OBJ_PAGE_1:
    return {
      obj: delete state[action.keyName]
    };
  default:
    return state;
  }
}

const initialState2 = {
  obj: {
  "Data": {
    "UnitName": "Admin Units",
    "Personnel": 48,
    "Assignment" : 67
  },
  "Data2": {
    "UnitName": "Clinic Units",
    "Personnel": 76,
    "Assignment": 44
  },
    "Data3": {
      "UnitName": "Clinic AM Units",
      "Personnel": 38,
      "Assignment": 58
    },
      "Data4": {
        "UnitName": "Clinic PM Units",
        "Personnel": 45,
        "Assignment": 65
      }
}
  
};
function Page2(state = initialState2, action) {
switch(action.type) {
  case ADD_OBJ_PAGE_2:
    return {
      obj: {...state.obj, ...action.data}
    };
  case REMOVE_OBJ_PAGE_2:
    delete state.obj[action.keyName]
    return {
      obj: state.obj
    };
  default:
    return state;
  }
}
export {
  Page1,
  Page2
}