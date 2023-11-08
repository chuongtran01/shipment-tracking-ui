export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  id: string;
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  organizationId: string;
  accessToken: string;
  refreshToken: string;
}

export interface RegistrationRequest {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  organizationId: string;
  password: string;
}
