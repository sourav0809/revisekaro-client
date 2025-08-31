import type { IApiResponse } from "@/agent";

export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ISignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface IAuthPayload {
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
}

export type TAuthResponse = IApiResponse<IAuthPayload>;
