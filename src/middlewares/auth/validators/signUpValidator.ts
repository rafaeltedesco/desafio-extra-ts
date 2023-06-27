import { SafeParseReturnType, z } from 'zod';
import { SignUpPayload } from '../../../types/SignUpPayload';

const signUpSchema = z.object({
  username: z.string().min(3, 'min length must be greather than or equal to 3'),
  email: z.string().email('invalid email format'),
  password: z.string().min(5, 'min length must be greather than or equal to 5'),
});

const validateSchema = (data: unknown): SafeParseReturnType<unknown, SignUpPayload> => 
  signUpSchema.safeParse(data);

export default {
  validateSchema,
};