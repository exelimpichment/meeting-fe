import { z } from 'zod';

// define the schema for environment variables
const envSchema = z.object({
  // SERVER VARIABLES

  // CLIENT VARIABLES
  NEXT_PUBLIC_BASE_URL: z.string().url().default('http://localhost:3000'),
});

// validate environment variables
const parseEnv = () => {
  // combine server and client environment variables
  const env = {
    NEXT_PUBLIC_BASE_URL:
      process.env.NEXT_PUBLIC_BASE_URL || process.env.BASE_URL,
  };

  const result = envSchema.safeParse(env);

  if (!result.success) {
    console.error('❌ Invalid environment variables:');
    console.error(result.error.flatten().fieldErrors);
    throw new Error('Invalid environment variables');
  }

  return result.data;
};

// export validated environment variables
export const env = parseEnv();

// export types for TypeScript
export type Env = z.infer<typeof envSchema>;
