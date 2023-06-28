import { SafeParseReturnType, z } from 'zod';
import { SignInPayload } from '../../../types/SignInPayload';

const signInSchema = z.object({
  email: z.string().email('invalid email format'),
  password: z.string().min(5, 'min length must be greather than or equal to 5'),
});

const validateSchema = (data: unknown): SafeParseReturnType<unknown, SignInPayload> => 
  signInSchema.safeParse(data);

export default {
  validateSchema,
};