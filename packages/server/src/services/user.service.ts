import { Context } from "~/context";
import { UserCreateInput, UserRole } from "~/graphql/generated/graphql";
import { userRepository } from "~/repositories";
import { requireAuth, requireRoleAdmin } from "~/utils";

export const userService = {
	createUser: (input: UserCreateInput) => {
		return userRepository.create(input);
	},

	getCurrentUser: (ctx: Context) => {
		const user = requireAuth(ctx);
		console.log("BE getCurrentUser user", user);
		return userRepository.findById(user.id);
	},

	getHunterByIdWithBounties: (userId: string) => {
		return userRepository.findById(userId, { include: { bountiesCreated: true, bountiesAccepted: true } });
	},

	getAllHuntersWithAcceptedBounties: (ctx: Context) => {
		requireAuth(ctx);
		requireRoleAdmin(ctx);
		return userRepository.findAll({
			where: { role: UserRole.Hunter },
			include: {
				bountiesAccepted: {
					include: {
						createdBy: true,
					},
				},
			},
		});
	},
};
