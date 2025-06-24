import { z } from "zod";


const BountyBaseSchema = {
  title: z.string().min(3, {message: "Title must be at least 3 characters long"}),
  description: z
    .string()
    .min(10, {message: "Description must be at least 10 characters"})
    .max(255, {message: "Description must not exceed 255 characters"}),
  targetId: z
    .number({invalid_type_error: "TargetId must be a number"})
    .int({message: "TargetId must be an integer"}),
  planet: z.string().min(2, {message: "Planet must be at least 2 characters"}),
  reward: z
    .number({invalid_type_error: "Reward must be a number"})
    .int({message: "Reward must be an integer"})
    .min(1, {message: "Reward must be greater than 0"}),
};

export const CreateBountySchema = z.object(BountyBaseSchema);
export const UpdateBountySchema = CreateBountySchema.partial();


export type CreateBountySchemaType = z.infer<typeof CreateBountySchema>
export type UpdateBountySchemaType = z.infer<typeof UpdateBountySchema>
