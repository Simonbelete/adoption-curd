import * as z from 'zod';

/**
 * Animal DTO
 */
export const AnimalSchema = z.object({
	name: z.string().nonempty()
});
