import { SafeParseReturnType, z } from 'zod';
import { ShortUrlPayload } from '../../../types/ShortUrlPayload';

const signInSchema = z.object({
  url: z.string().url('invalid url'),
});

const validateSchema = (data: unknown): SafeParseReturnType<unknown, ShortUrlPayload> => 
  signInSchema.safeParse(data);

export default {
  validateSchema,
};