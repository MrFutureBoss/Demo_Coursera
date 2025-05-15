import api from "@/utilities/api";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { isAxiosError } from "axios";
import { Authen, AuthenState, JwtPayload } from "@/store/interface/authen";
import { jwtDecode } from "jwt-decode";

const isClient = typeof window !== "undefined";

export const login = createAsyncThunk(
  'authen/login',
  async (
    info: { email: string, password: string } = { email: "", password: "" },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const params = { email: info.email, password: info.password };
      const { data } = await api.post(`/auth/login`, params, { withCredentials: true, });
      if (isClient) {
        localStorage.setItem('accessToken', data.token);
        console.log(data.role_id, typeof(data.role_id));
      }
      return fulfillWithValue(data.token);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data ?? error.message);
      }
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(String(error));

    }
  }
);

export const logout = createAsyncThunk(
  'authen/logout',
  async (
    { navigate, role }: { navigate: string, role: number },
    { rejectWithValue, fulfillWithValue }
  ) => {
    try {
      const { data } = await api.post(`/auth/logout`, { withCredentials: true, });
      if (isClient) {
        console.log("logout");
        localStorage.removeItem('accessToken');
      }
      return fulfillWithValue(data);
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data ?? error.message);
      }
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(String(error));

    }
  }
);

export const getUserFromToken = createAsyncThunk(
  "authen/getUserFromToken",
  async (_, { rejectWithValue }) => {
    try {
      const token = localStorage.getItem("accessToken");
      console.log('[getUserFromToken] Token from localStorage:', token);
      if (!token) return rejectWithValue("No token found");
      const payload = jwtDecode<JwtPayload>(token);
      console.log('[getUserFromToken] Decoded payload:', payload);
      const authenObj = {
        id: payload.id,
        email: payload.email,
        role: payload.role,
        token,
      } as Authen;
      console.log('[getUserFromToken] Authen object to return:', authenObj);
      return authenObj;
    } catch (error: unknown) {
      if (isAxiosError(error)) {
        return rejectWithValue(error.response?.data ?? error.message);
      }
      if (error instanceof Error) {
        return rejectWithValue(error.message);
      }
      return rejectWithValue(String(error));
    }
  }
);

const decodeToken = (token: string | null): Authen | null => { // Thêm null vào kiểu của token
  if (!token || !isClient) return null;
  try {
    const payload = jwtDecode<JwtPayload>(token);
    return {
      id: Number(payload.id),
      email: String(payload.email),
      role: String(payload.role),
      token: String(token),
    };
  } catch {
    return null;
  }
};

const initialState: AuthenState = {
  authen: isClient ? decodeToken(localStorage.getItem('accessToken')) : null,
  loading: false,
  error: null,
};

const authenSlice = createSlice({
  name: 'authen',
  initialState,
  reducers: {
    authenReset: (state) => {
      state.authen = null;
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = false;
        state.error = null;
      })
      .addCase(login.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      })
      .addCase(getUserFromToken.pending, (state) => {
        state.loading = true;
      })
      .addCase(getUserFromToken.fulfilled, (state, action: PayloadAction<Authen>) => {
        state.loading = false;
        state.authen = action.payload;
        state.error = null;
      })
      .addCase(getUserFromToken.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      })
      .addCase(logout.pending, (state) => {
        state.loading = true;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = false;
        state.authen = null;
      })
      .addCase(logout.rejected, (state, action: PayloadAction<unknown>) => {
        state.loading = false;
        state.error = typeof action.payload === 'string' ? action.payload : "Unknown error";
      })
  },
});

export const { authenReset } = authenSlice.actions;
export default authenSlice.reducer;
