import {configureStore} from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";
const store = configureStore({
    reducer:{
        loginUser: usersSlice
    }
});
export default store;