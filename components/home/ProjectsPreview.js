import { Box, Button, Chip, Fade, Grid, Typography } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import { navigateToTop } from "../../utility/navigateToTop";
import Link from "next/link";
import theme from "../../styles/themes/theme";
import { projectsContent } from "../../siteInfo";
import ProjectPreview from "../projects/ProjectPreview";
import { useState } from "react";

const Portfolio = () => {
    const [focusedProject, setFocusedProject] = useState(0);

    const handlePreviewClick = (index) => {
        setFocusedProject(index);
    };
    return (
        <Box className="border-bottom">
            <Grid container>
                <Grid
                    item
                    xs={12}
                    md={4}
                    sx={{
                        borderRight: { xs: "none", md: theme.border },
                    }}
                >
                    <Box
                        sx={{
                            padding: {
                                xs: theme.custom.spacing.small,
                                md: theme.custom.spacing.large,
                            },
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            height: "100%",
                            backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .85), rgba(255, 252, 235, 0.85)), url(/images/rose3.webp)`,
                            // backgroundSize: "cover",
                            backgroundPosition: { xs: "50% 0%", md: "55% 90%" },
                        }}
                    >
                        <Box>
                            <Typography variant="h3">
                                All writing is rewriting.
                            </Typography>
                            <br />
                            <Typography>
                                When we build your website, we take care of the
                                entire process. We design, develop, deploy, and
                                maintain everything ourselves without any
                                outside contracts.
                            </Typography>
                            <br />
                            <Typography>
                                And because we maintain everything we create,
                                changing something is as easy as letting us know
                                what you&rsquo;d like changed.
                            </Typography>
                            <br />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                width: "100%",
                                justifyContent: { xs: "center", md: "end" },
                                marginBottom: ".75rem",
                            }}
                        >
                            <Link href="/projects">
                                <Button
                                    color="secondary"
                                    endIcon={<ArrowRightAltIcon />}
                                    variant="outlined"
                                >
                                    See All Projects
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={8}
                    sx={{
                        background: theme.palette.primary.main,
                        padding: theme.custom.spacing.small,
                    }}
                >
                    <Box>
                        <Typography
                            variant="h2"
                            sx={{
                                color: theme.palette.background.default,
                                textAlign: "center",
                                marginBottom: theme.custom.spacing.small,
                            }}
                        >
                            PROJECTS
                        </Typography>
                        <Grid container sx={{}} spacing={2}>
                            <Grid item xs={12} md={8}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        gap: ".5rem",
                                    }}
                                >
                                    {projectsContent.map((project, index) => {
                                        return (
                                            <Box
                                                key={index}
                                                onClick={() => {
                                                    handlePreviewClick(index);
                                                }}
                                                sx={{ cursor: "pointer" }}
                                            >
                                                <ProjectPreview
                                                    expanded={
                                                        index === focusedProject
                                                    }
                                                    project={project}
                                                />
                                                <Fade
                                                    in={
                                                        index === focusedProject
                                                    }
                                                >
                                                    <Box
                                                        sx={{
                                                            display: {
                                                                xs:
                                                                    index ===
                                                                    focusedProject
                                                                        ? "block"
                                                                        : "none",
                                                                md: "none",
                                                            },
                                                        }}
                                                    >
                                                        <Box
                                                            sx={{
                                                                paddingTop: {
                                                                    xs: ".5rem",
                                                                    md:
                                                                        focusedProject *
                                                                            7.5 +
                                                                        "rem",
                                                                },
                                                                paddingBottom:
                                                                    "1.5rem",
                                                                transition:
                                                                    "300ms",
                                                            }}
                                                        >
                                                            <Typography
                                                                variant="caption"
                                                                sx={{
                                                                    color: theme
                                                                        .palette
                                                                        .custom
                                                                        .lightMuted,
                                                                }}
                                                            >
                                                                [
                                                                {
                                                                    projectsContent[
                                                                        focusedProject
                                                                    ].type
                                                                }
                                                                ]
                                                            </Typography>
                                                            <Typography
                                                                variant="h3"
                                                                sx={{
                                                                    color: theme
                                                                        .palette
                                                                        .custom
                                                                        .light,
                                                                    marginBottom:
                                                                        ".25em",
                                                                }}
                                                            >
                                                                {
                                                                    projectsContent[
                                                                        focusedProject
                                                                    ].name
                                                                }
                                                            </Typography>
                                                            <Box
                                                                sx={{
                                                                    display:
                                                                        "flex",
                                                                    gap: ".5rem",
                                                                    marginBottom:
                                                                        ".75rem",
                                                                }}
                                                            >
                                                                {projectsContent[
                                                                    focusedProject
                                                                ].technologies.map(
                                                                    (
                                                                        technology,
                                                                        index
                                                                    ) => {
                                                                        return (
                                                                            <Chip
                                                                                size="small"
                                                                                key={
                                                                                    index
                                                                                }
                                                                                label={
                                                                                    technology
                                                                                }
                                                                            />
                                                                        );
                                                                    }
                                                                )}
                                                            </Box>
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    color: theme
                                                                        .palette
                                                                        .custom
                                                                        .lightMuted,
                                                                    marginBottom:
                                                                        ".75em",
                                                                }}
                                                            >
                                                                {
                                                                    projectsContent[
                                                                        focusedProject
                                                                    ]
                                                                        .description
                                                                }
                                                            </Typography>
                                                            <Typography
                                                                sx={{
                                                                    color: theme
                                                                        .palette
                                                                        .custom
                                                                        .light,
                                                                    textDecoration:
                                                                        "underline",
                                                                }}
                                                            >
                                                                <Link
                                                                    href={
                                                                        projectsContent[
                                                                            focusedProject
                                                                        ].href
                                                                    }
                                                                >
                                                                    Visit
                                                                    Website
                                                                </Link>
                                                            </Typography>
                                                        </Box>
                                                    </Box>
                                                </Fade>
                                            </Box>
                                        );
                                    })}
                                </Box>
                            </Grid>
                            <Grid item xs={8} md={4}>
                                <Box
                                    sx={{
                                        display: { xs: "none", md: "block" },
                                        paddingTop:
                                            focusedProject * 7.5 + "rem",
                                        transition: "300ms",
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            color: theme.palette.custom
                                                .lightMuted,
                                        }}
                                    >
                                        [{projectsContent[focusedProject].type}]
                                    </Typography>
                                    <Typography
                                        variant="h3"
                                        sx={{
                                            color: theme.palette.custom.light,
                                            marginBottom: ".25em",
                                        }}
                                    >
                                        {projectsContent[focusedProject].name}
                                    </Typography>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            gap: ".5rem",
                                            marginBottom: ".75rem",
                                        }}
                                    >
                                        {projectsContent[
                                            focusedProject
                                        ].technologies.map(
                                            (technology, index) => {
                                                return (
                                                    <Chip
                                                        size="small"
                                                        key={index}
                                                        label={technology}
                                                    />
                                                );
                                            }
                                        )}
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: theme.palette.custom
                                                .lightMuted,
                                            marginBottom: ".75em",
                                        }}
                                    >
                                        {
                                            projectsContent[focusedProject]
                                                .description
                                        }
                                    </Typography>

                                    <Typography
                                        sx={{
                                            color: theme.palette.custom.light,
                                            textDecoration: "underline",
                                        }}
                                    >
                                        <Link
                                            href={
                                                projectsContent[focusedProject]
                                                    .href
                                            }
                                        >
                                            Visit Website
                                        </Link>
                                    </Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Portfolio;
