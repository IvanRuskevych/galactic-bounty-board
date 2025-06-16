import bcrypt from "bcrypt";


export const passwordUtils = {
    hashedPassword: (password: string) => bcrypt.hash(password, 10),
    comparePassword: (password: string, hashedPassword: string) => bcrypt.compare(password, hashedPassword),
}