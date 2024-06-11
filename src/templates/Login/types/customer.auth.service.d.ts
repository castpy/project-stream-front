export interface CustomerAuthService {
  email: string;
  password: string;
}

export interface CustomerAuthServiceResponse {
  token: string;
}