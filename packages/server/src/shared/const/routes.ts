export const ROUTES = {
	ROOT: "/graphql",
	DOCS: "/api/docs",
	TODOS: {
		ROOT: "/api/todos",
		ALL: "/api/todos/all",
	},
	HEALTH: "/api/health",
} as const;

export type RoutePaths = typeof ROUTES;
