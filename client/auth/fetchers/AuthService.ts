import { env } from '@/lib/env';

export interface AuthFormData {
  email: string;
  password: string;
}

export class AuthService {
  static async loginUser(data: AuthFormData) {
    console.log(data);

    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}/api/auth/sign-in`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    return response.json();
  }

  static async registerUser(data: AuthFormData) {
    console.log(data);
    const response = await fetch(
      `${env.NEXT_PUBLIC_BASE_URL}/api/auth/sign-up`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    );

    if (!response.ok) {
      throw new Error('Failed to register');
    }

    return response.json();
  }
}
