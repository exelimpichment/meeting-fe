'use client';

import GoogleLogo from '@/public/google-logo.svg';
import AppleLogo from '@/public/apple-logo.svg';
import { UrlGenerator } from '@/client/common';
import { Button } from '@/client/ui/button';
import { Input } from '@/client/ui/input';
import { Label } from '@/client/ui/label';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/client/ui/card';
import { useAuthForm } from '@/client/auth';
import { AuthType } from '@/client/auth/constants';

interface AuthFormProps extends React.ComponentProps<'div'> {
  authType: AuthType;
}

export function AuthForm({ className, authType, ...props }: AuthFormProps) {
  const { form, onSubmit, authError, isLoading } = useAuthForm();
  const {
    register,
    formState: { errors },
  } = form;

  return (
    <div className={cn('flex flex-col gap-6', className)} {...props}>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">{cardTitle[authType]}</CardTitle>
          <CardDescription>{cardDescription[authType]}</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit(authType)}>
            <div className="grid gap-6">
              <div className="flex flex-col gap-4">
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  disabled
                >
                  <AppleLogo />
                  {appleButtonText[authType]}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  className="w-full"
                  disabled
                >
                  <GoogleLogo />
                  {googleButtonText[authType]}
                </Button>
              </div>
              <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t">
                <span className="bg-card text-muted-foreground relative z-10 px-2">
                  Or continue with
                </span>
              </div>
              <div className="grid gap-6">
                {authError && (
                  <div className="text-destructive text-sm font-medium">
                    {authError}
                  </div>
                )}
                <div className="grid gap-3">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    {...register('email')}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-destructive text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="grid gap-3">
                  <div className="flex items-center">
                    <Label htmlFor="password">Password</Label>
                    <Link
                      href="#"
                      className="ml-auto text-sm underline-offset-4 hover:underline"
                    >
                      Forgot your password?
                    </Link>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    {...register('password')}
                    aria-invalid={!!errors.password}
                  />
                  {errors.password && (
                    <p className="text-destructive text-xs">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? 'Loading...' : submitButtonText[authType]}
                </Button>
              </div>
              <div className="text-center text-sm">
                {accountToggleText[authType].text}{' '}
                <Link
                  href={accountToggleText[authType].href}
                  className="underline underline-offset-4"
                >
                  {accountToggleText[authType].link}
                </Link>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

const cardTitle = {
  'sign-in': 'Welcome back',
  'sign-up': 'Create an account',
};

const cardDescription = {
  'sign-in': 'Login with your Apple or Google account',
  'sign-up': 'Sign up with your Apple or Google account',
};

const appleButtonText = {
  'sign-in': 'Login with Apple',
  'sign-up': 'Sign up with Apple',
};

const googleButtonText = {
  'sign-in': 'Login with Google',
  'sign-up': 'Sign up with Google',
};

const submitButtonText = {
  'sign-in': 'Login',
  'sign-up': 'Sign up',
};

const accountToggleText = {
  'sign-in': {
    text: "Don't have an account?",
    link: 'Sign up',
    href: UrlGenerator.signUp(),
  },
  'sign-up': {
    text: 'Already have an account?',
    link: 'Login',
    href: UrlGenerator.signIn(),
  },
};
