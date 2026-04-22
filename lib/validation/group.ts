import { z } from 'zod';

export const createGroupSchema = z.object({
  name: z.string().min(3),
  description: z.string().min(10),
  sportId: z.string().optional()
});
