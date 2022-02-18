const initialState = {
    accesstoken: "",
    userInfo: null,
}

const userReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case "SET_TOKEN": {
            return { ...state, accesstoken: payload };
        }
        case "SET_USER_INFO": {
            return { ...state, userInfo: payload };
        }
        case "RESET": {
            return initialState;
        }
        default: {
            return state;
        }
    }
};

export default userReducer;