import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    userData:{},
    userAppoinments:[],
}
export const usersSlice = createSlice ({
    name:"loginUser",
    initialState,
    reducers:{
        setUserData:(state,action) => {
            state.userData = action.payload
        },
        setUserAppointments: (state, action)=> {
            state.userAppoinments = action.payload
        }    
    }
});
export const {setUserData,setUserAppointments} = usersSlice.actions;
export default usersSlice.reducer