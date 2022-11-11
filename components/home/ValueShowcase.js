import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import theme from "../../styles/themes/theme";

const ValueShowcase = () => {
    return (
        <Grid container className="border-bottom">
            <Grid item xs={12}>
                <Typography
                    className="border-bottom"
                    variant="h1"
                    component="h3"
                    sx={{
                        textAlign: "center",
                        padding: theme.custom.spacing.medium,
                    }}
                >
                    The value we provide
                </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box
                    sx={{
                        borderRight: { xs: "none", md: theme.border },
                        height: "100%",
                        backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .5), rgba(255, 252, 235, 0.5)), url(/images/rose4.webp)`,
                        // backgroundSize: "cover",
                        backgroundPosition: {
                            xs: "50% 30%",
                            md: "45% 60%",
                        },
                    }}
                ></Box>
            </Grid>
            <Grid item xs={12} md={6}>
                <Box
                    sx={{
                        padding: {
                            xs: theme.custom.spacing.small,
                            md: theme.custom.spacing.medium,
                        },
                        borderRight: { xs: "none", md: theme.border },
                    }}
                >
                    <Typography>
                        When we go about creating a website, we have two goals
                        in mind: One, make it easy for people to find it, and
                        two, make sure that people enjoy their time there,
                        whether they&rsquo;re visiting it for the first time or
                        the fiftieth.
                    </Typography>
                    <br />
                    <Typography>
                        That&rsquo;s why we use Next.js and MUI for every
                        project we work on. Next.js provides server-side
                        rendered (SSR) pages that are easily discovered and
                        indexed by Google&rsquo;s web crawlers. They load in the
                        blink of an eye, without all of the bloat that comes
                        with a website made in a content management system like
                        Wordpress or Wix.
                    </Typography>
                    <br />
                    <Typography>
                        It&rsquo;s also why we take advantage of MUI&rsquo;s
                        clean, responsive, and intuitive design frameworks. This
                        means that our websites have a sharp, familiar,
                        intuitive feel, while providing all of the tools we need
                        to make your website stand out from the crowd.
                    </Typography>
                    <br />
                    <Typography>
                        Want to learn more? Schedule a free consultation call
                        and let us show you how we can help your online presence
                        reach the world.
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: {
                                xs: "center",
                            },
                            width: "100%",
                            margin: "3rem 0 2rem 0",
                        }}
                    >
                        <Link href="/contact">
                            <Button
                                endIcon={<ArrowRightAlt />}
                                variant="outlined"
                                color="secondary"
                            >
                                get in touch
                            </Button>
                        </Link>
                    </Box>
                </Box>
            </Grid>
            <Grid item xs={12} md={3}>
                <Box
                    sx={{
                        height: "100%",
                        backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .5), rgba(255, 252, 235, 0.5)), url(/images/rose2.webp)`,
                        // backgroundSize: "cover",
                        backgroundPosition: {
                            xs: "50% 30%",
                            md: "25% 30%",
                        },
                    }}
                ></Box>
            </Grid>
        </Grid>
    );
};

export default ValueShowcase;
