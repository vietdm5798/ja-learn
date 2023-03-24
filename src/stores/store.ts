import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import notificationReducer from "@/stores/slices/notificationSlice";

export const store = configureStore({
  reducer: {
    notification: notificationReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
