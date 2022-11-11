import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import NativeImage from "../../components/general/NativeImage";
import theme from "../../styles/themes/theme";

const Project = ({ project, index }) => {
    return (
        <Grid container direction={project.reversed ? "row-reverse" : "row"}>
            <Grid item xs={12} md={5}>
                <Box
                    sx={{
                        padding: { xs: "none", md: theme.custom.spacing.small },
                        borderRight: {
                            xs: "none",
                            md: !project.reversed ? theme.border : "none",
                        },
                        borderLeft: {
                            xs: "none",
                            md: project.reversed ? theme.border : "none",
                        },
                        borderBottom: {
                            xs: "none",
                            md: theme.border,
                        },

                        height: "100%",
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <NativeImage maxSize={800} image={project.image} />
                </Box>
            </Grid>
            <Grid item xs={12} md={7}>
                <Box
                    className="border-bottom gradient"
                    sx={{
                        height: "100%",
                        padding: theme.custom.spacing.medium,
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="caption">[{project.type}]</Typography>
                    <Typography variant="h2" component="h3">
                        {project.name}
                    </Typography>
                    <br />
                    <Typography
                        variant="body2"
                        sx={{
                            whiteSpace: "pre-wrap",
                            maxWidth: "65ch",
                        }}
                    >
                        {project.details}
                    </Typography>
                    <br />
                    <Typography
                        sx={{
                            textDecoration: "underline",
                            // textAlign: project.reversed ? "end" : "start",
                        }}
                    >
                        <Link href={project.href}>Visit Website</Link>
                    </Typography>
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box
                    className="border-bottom"
                    sx={{
                        height: "8rem",
                        backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .85), rgba(255, 252, 235, 0.85)), url(${project.dividerImageUrl})`,
                        // backgroundSize: "cover",
                        backgroundPosition: {
                            xs: "20% 40%",
                            md: "25% 40%",
                        },
                    }}
                ></Box>
            </Grid>
        </Grid>
    );
};

export default Project;
