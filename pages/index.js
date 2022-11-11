import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import Hero from "../components/home/Hero";
import ProjectsPreview from "../components/home/ProjectsPreview";
import ServicesShowcase from "../components/services/ServicesShowcase";

import Meta from "../components/home/Meta";
import theme from "../styles/themes/theme";
import { servicesContent } from "../siteInfo";
import ValueShowcase from "../components/home/ValueShowcase";

export default function Home() {
    return (
        <Container maxWidth="xl" disableGutters>
            <Meta />
            <Hero />
            <Grid container>
                <Grid item xs={12} md={5}>
                    <Box
                        className="gradient border-bottom"
                        sx={{
                            padding: {
                                xs: theme.custom.spacing.small,
                                md: theme.custom.spacing.medium,
                            },
                            borderRight: { xs: "none", md: theme.border },
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h2"
                            component="p"
                            sx={{ textAlign: { xs: "center", md: "end" } }}
                        >
                            The journey of a thousand miles begins with a single
                            click.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box
                        className="border-bottom"
                        sx={{
                            padding: {
                                xs: theme.custom.spacing.small,
                                md: theme.custom.spacing.large,
                            },
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            justifyContent: "space-between",
                        }}
                    >
                        <Box>
                            <Typography>
                                We build websites that tell stories. But
                                that&rsquo;s perhaps a bit misleading. In the
                                real world, <em>everything</em> tells a story.
                            </Typography>
                            <br />
                            <Typography>
                                If you&rsquo;re a chef, your menu tells the
                                story of your heritage and your taste. If
                                you&rsquo;re a photographer, your portfolio
                                tells the story of how you see the world and how
                                that vision has changed and changes over time.
                                If you&rsquo;re a novelist... Well, your stories
                                tell stories.
                            </Typography>
                            <br />
                            <Typography>
                                Your website can help that story reach a wider
                                audience. But more than that, in telling your
                                story it becomes part of the story itself.
                                Everything about your website colors it, from
                                the fonts and the images to the animated
                                elements and the use of negative space.
                            </Typography>
                            <br />
                            <Typography>
                                Your website tells the story of who you are.
                            </Typography>
                            <br />
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "space-between",
                                gap: "2rem",
                                flexWrap: "wrap",
                                marginBottom: ".75rem",
                            }}
                        >
                            <Typography>
                                So make sure you tell it well.
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: {
                                        xs: "center",
                                        md: "start",
                                    },
                                    width: "100%",
                                }}
                            >
                                <Link href="/contact">
                                    <Button
                                        endIcon={<ArrowRightAlt />}
                                        variant="outlined"
                                        color="secondary"
                                    >
                                        View Services
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <ProjectsPreview />
            <ValueShowcase />
            <ServicesShowcase services={servicesContent} isPreview />
            <Grid container className="border-bottom">
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: { xs: "start", md: "end" },
                            borderRight: { xs: "none", md: theme.border },
                            padding: {
                                xs: theme.custom.spacing.small,
                                md: theme.custom.spacing.medium,
                            },
                            background: theme.palette.primary.main,
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                alignItems: { xs: "start", md: "end" },
                            }}
                        >
                            <Typography
                                variant="h3"
                                component="p"
                                sx={{
                                    color: theme.palette.custom.light,
                                    textAlign: { xs: "center", md: "end" },
                                }}
                            >
                                Copyediting comes standard.
                            </Typography>
                            <br />
                            <Typography
                                sx={{
                                    maxWidth: "45ch",
                                    color: theme.palette.custom.lightMuted,
                                    textAlign: { xs: "start", md: "end" },
                                }}
                            >
                                Our background in newspaper and fiction editing
                                has given us an ear for language. If you know
                                what you want to tell people but aren&rsquo;t
                                sure quite how to word it, we can help.
                            </Typography>
                        </Box>
                        <br />
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: {
                                    xs: "center",
                                    md: "end",
                                },
                                width: "100%",
                                marginBottom: ".75rem",
                            }}
                        >
                            <Link href="/contact">
                                <Button
                                    endIcon={<ArrowRightAlt />}
                                    variant="contained"
                                    color="secondary"
                                >
                                    get in touch
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: {
                                xs: theme.custom.spacing.small,
                                md: theme.custom.spacing.medium,
                            },

                            backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .85), rgba(255, 252, 235, 0.85)), url(/images/rose4.webp)`,
                            // backgroundSize: "cover",
                            backgroundPosition: { xs: "50% 0%", md: "15% 10%" },
                        }}
                    >
                        <Typography
                            variant="h1"
                            component="p"
                            sx={{
                                maxWidth: "40rem",
                                textAlign: { xs: "center", md: "start" },
                            }}
                        >
                            You won&rsquo;t know what your story is about until
                            it&rsquo;s finished.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}
