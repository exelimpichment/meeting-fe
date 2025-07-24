'use client';

import { AUTH_TYPES, AuthType } from '@/client/auth/constants';
import { zodResolver } from '@hookform/resolvers/zod';
import { UrlGenerator } from '@/client/common/utils';
import { useMutation } from '@tanstack/react-query';
import { AuthService } from '@/client/auth/fetchers';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { z } from 'zod';

// Define schema for form validation
const authFormSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

// Define form data type based on the schema
type AuthFormData = z.infer<typeof authFormSchema>;

export const useAuthForm = () => {
  const router = useRouter();
  const [authError, setAuthError] = useState<string | null>(null);

  // setup form with validation
  const form = useForm<AuthFormData>({
    resolver: zodResolver(authFormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const authMutation = useMutation({
    mutationFn: ({
      data,
      authType,
    }: {
      data: AuthFormData;
      authType: AuthType;
    }) =>
      authType === AUTH_TYPES.SIGN_IN
        ? AuthService.loginUser(data)
        : AuthService.registerUser(data),

    onSuccess: (_, variables) => {
      if (variables.authType === AUTH_TYPES.SIGN_IN) {
        router.push(UrlGenerator.conversations());
      } else {
        router.push(UrlGenerator.signIn());
      }
    },

    onError: (error: Error) => {
      setAuthError(error.message || 'Authentication failed');
    },
  });

  // handle form submission with authType parameter
  const onSubmit = (authType: AuthType) => {
    return form.handleSubmit((data) => {
      setAuthError(null);
      authMutation.mutate({ data, authType });
    });
  };

  return {
    form,
    onSubmit,
    authError,
    isLoading: authMutation.isPending,
  };
};
