import { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const INITIAL_STATE = {
    user:{
        _id: "64d9236eb05a6d08198a9dad",
    username: "sumeyye",
    email: "sumeyye@gmail.com",
    profilePicture: "",
    coverPicture: "",
    followers: [
        "64d928d0b05a6d08198a9daf",
        "64d928e6b05a6d08198a9db1",
        "64d928f3b05a6d08198a9db3"
    ],
    followings: [],
    isAdmin: true,
    birthday: "",
    hobbies: [],
    createdAt: "2023-08-13T18:39:42.254Z",
    updatedAt: "2023-08-13T19:46:59.797Z",
    __v: 0
    },
    isFetching: false,
    error:false,
};

export const Context = createContext(INITIAL_STATE);

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE);


return (
    <Context.Provider value={
        {
            user: state.user,
            isFetching: state.isFetching,
            error:state.error,
            dispatch,
        }
    }>{children}
    </Context.Provider>

)

};