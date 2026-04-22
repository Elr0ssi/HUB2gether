import { z } from 'zod';

export const createMatchSchema = z.object({
  title: z.string().min(3),
  sportId: z.string().min(1),
  mindset: z.enum(['competitive', 'casual', 'discovery']),
  locationName: z.string().min(2),
  startAt: z.string().min(5),
  endAt: z.string().min(5),
  maxPlayers: z.coerce.number().min(2).max(50)
});
