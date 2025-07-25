import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

dotenv.config();

const connectionString = process.env.DATABASE_URL as string;
const adapter = new PrismaPg({ connectionString });

export const prismaClient = new PrismaClient({ adapter });
