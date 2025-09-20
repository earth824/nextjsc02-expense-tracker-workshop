import { signInFormSchema, signUpFormSchema } from '@/lib/schemas/auth.schema';
import z from 'zod';

export type SignUpFormInput = z.infer<typeof signUpFormSchema>;
export type SignInFormInput = z.infer<typeof signInFormSchema>;
