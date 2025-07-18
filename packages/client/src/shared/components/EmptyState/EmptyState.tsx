import { Box, CircularProgress, Typography } from "@mui/material";

interface EmptyStateProps {
	loading?: boolean;
	error?: string | null;
	empty?: boolean;
	emptyMessage?: string;
}

export const EmptyState = ({ loading, error, empty, emptyMessage = "Nothing found." }: EmptyStateProps) => {
	if (!loading && !error && !empty) return null;

	return (
		<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="40vh" gap={2}>
			{loading && <CircularProgress />}
			{error && <Typography color="error">{error}</Typography>}
			{!loading && !error && empty && <Typography>{emptyMessage}</Typography>}
		</Box>
	);
};
