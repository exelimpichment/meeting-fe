import { AuthForm } from '@/client/auth-form';

export default function SignInPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <AuthForm authType={'sign-in'} />
      </div>
    </div>
  );
}
