import type {
  ILoginRequest,
  ISignupRequest,
  TAuthResponse,
} from "@/types/auth";
import api from "./agent";

export interface IApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

const Auth = {
  /**
   * Login with email and password
   * @param data - { email, password }
   * @returns AuthResponse
   */
  login: async (data: ILoginRequest): Promise<TAuthResponse> => {
    const res = await api.post<TAuthResponse>("/login", data);
    return res.data;
  },
  /**
   * Sign up with email and password
   * @param data - { email, password, name }
   * @returns AuthResponse
   */
  signup: async (data: ISignupRequest): Promise<TAuthResponse> => {
    const res = await api.post<TAuthResponse>("/signup", data);
    return res.data;
  },
};

export default {
  Auth,
};
