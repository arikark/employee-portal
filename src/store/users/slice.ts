import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./interfaces";

interface UsersState {
  data: User;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: UsersState = {
  data: {
    id: "",
    name: "",
  },
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    reset: (state, _action: PayloadAction<User>) => {
      state.data = { id: "", name: "" };
    },
  },
  extraReducers: {},
});

export const { reset } = usersSlice.actions;
export default usersSlice.reducer;
