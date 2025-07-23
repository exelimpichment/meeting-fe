export interface AuthFormData {
  email: string;
  password: string;
}

export class AuthService {
  static async loginUser(
    data: AuthFormData,
  ): Promise<{ success: boolean; user: { email: string } }> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, user: { email: data.email } });
      }, 1000);
    });
  }

  static async registerUser(
    data: AuthFormData,
  ): Promise<{ success: boolean; user: { email: string } }> {
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, user: { email: data.email } });
      }, 1000);
    });
  }
}
