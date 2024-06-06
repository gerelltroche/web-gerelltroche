import { Box, Typography, Grid, Paper } from "@mui/material";

export default function Home() {
	return (
		<>
			<Box sx={{ my: 4 }}>
				<Typography
					variant="h2"
					component="h1"
					gutterBottom
				>
					Contact
				</Typography>
				<Typography
					variant="h5"
					component="p"
				>
					Showcasing my projects and skills
				</Typography>
			</Box>

			<Box
				sx={{ my: 4 }}
				id="projects"
			>
				<Typography
					variant="h4"
					component="h2"
					gutterBottom
				>
					Projects
				</Typography>
				<Grid
					container
					spacing={3}
				>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
					>
						<Paper sx={{ p: 2 }}>
							<Typography
								variant="h6"
								component="h3"
							>
								Project 1
							</Typography>
							<Typography variant="body1">Description of Project 1</Typography>
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
					>
						<Paper sx={{ p: 2 }}>
							<Typography
								variant="h6"
								component="h3"
							>
								Project 2
							</Typography>
							<Typography variant="body1">Description of Project 2</Typography>
						</Paper>
					</Grid>
					<Grid
						item
						xs={12}
						sm={6}
						md={4}
					>
						<Paper sx={{ p: 2 }}>
							<Typography
								variant="h6"
								component="h3"
							>
								Project 3
							</Typography>
							<Typography variant="body1">Description of Project 3</Typography>
						</Paper>
					</Grid>
				</Grid>
			</Box>
		</>
	);
}
