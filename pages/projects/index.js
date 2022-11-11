import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import Project from "../../components/projects/Project";
import { projectsContent } from "../../siteInfo";
import theme from "../../styles/themes/theme";

const index = () => {
    return (
        <PageLayout name="OUR WORK">
            <Grid container className="border-top border-bottom">
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: {
                                xs: theme.custom.spacing.small,
                                md: theme.custom.spacing.medium,
                            },
                            borderRight: { xs: "none", md: theme.border },
                            height: "100%",
                            backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .85), rgba(255, 252, 235, 0.85)), url(/images/rose2.webp)`,
                            // backgroundSize: "cover",
                            backgroundPosition: {
                                xs: "50% 30%",
                                md: "25% 30%",
                            },
                        }}
                    >
                        <Typography
                            sx={{ textAlign: { xs: "start", md: "end" } }}
                        >
                            Fictional Web collaborates with artists, academics,
                            craftspeople, musicians, authors, and designers to
                            create websites that further their unique image and
                            vision.
                        </Typography>
                        <br />
                        <Typography
                            sx={{ textAlign: { xs: "start", md: "end" } }}
                        >
                            Have a look at some of our past projects, and when
                            you&rsquo;re fully convinced, reach out to us and
                            let us know who you are and how we can help.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: {
                                xs: theme.custom.spacing.small,
                                md: theme.custom.spacing.medium,
                            },
                            backgroundColor: theme.palette.primary.main,
                            // borderRight: { xs: "none", md: theme.border },
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h2"
                            component="p"
                            sx={{
                                color: theme.palette.custom.light,
                                maxWidth: "35rem",
                            }}
                        >
                            Everything we create is our best work
                        </Typography>
                        <Typography
                            variant="h5"
                            component="p"
                            sx={{
                                color: theme.palette.custom.light,
                                maxWidth: "35rem",
                                marginTop: { xs: "4rem", md: "12rem" },
                            }}
                        >
                            (...but here are a few examples, just in case)
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Box>
                {projectsContent.map((project, index) => {
                    return <Project project={project} key={index} />;
                })}
            </Box>
        </PageLayout>
    );
};

export default index;
