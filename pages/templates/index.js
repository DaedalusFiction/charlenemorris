import { ArrowRightAlt } from "@mui/icons-material";
import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Link from "next/link";
import React from "react";
import PageLayout from "../../components/layout/PageLayout";
import Template from "../../components/templates/Template";
import { templatesContent } from "../../siteInfo";
import theme from "../../styles/themes/theme";

const index = () => {
    return (
        <PageLayout name="TEMPLATES">
            <Grid container className="border-top border-bottom ">
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "end",
                            backgroundColor: theme.palette.primary.main,
                            padding: theme.custom.spacing.small,
                            borderRight: {
                                xs: "none",
                                md: theme.border,
                            },
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                textAlign: { xs: "center", md: "end" },
                                maxWidth: "30rem",
                                color: theme.palette.custom.light,
                            }}
                        >
                            There is nothing new under the sun
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box
                        sx={{
                            height: "100%",
                            backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .85), rgba(255, 252, 235, 0.85)), url(/images/rose4.webp)`,
                            backgroundPosition: {
                                xs: "50% 0%",
                                md: "0% 100%",
                            },
                            padding: {
                                xs: theme.custom.spacing.small,
                                md: theme.custom.spacing.medium,
                            },
                        }}
                    >
                        <Typography>
                            But that doesn&rsquo;t mean there isn&rsquo;t room
                            for you to put your own spin on things. All of our
                            templates are built exclusively by us in Next.js and
                            MUI, two of the latest JavaScript and CSS
                            frameworks. This means that your website will be
                            extremely fast, will look great on any mobile
                            device, and will be optimized for search engines and
                            accessibility.
                        </Typography>
                        <br />
                        <Typography>
                            A templated website holds it&rsquo;s own, but it can
                            also be a great starting point. Like every website
                            we build, small changes are as simple as letting us
                            know what you&rsquo;d like changed, while larger
                            changes, such as adding pages, reorganizing layout,
                            or updating the aesthetic, can be accomplished at an
                            hourly rate or an agreed-upon price.
                        </Typography>
                        <br />
                        <Typography>
                            If you&rsquo;re on a budget, or if for any reason
                            you&rsquo;d prefer to start small, a template can be
                            a great choice.
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
            <Grid container>
                {templatesContent.map((template, index) => {
                    return (
                        <Grid item xs={12} md={4} key={index}>
                            <Template template={template} />
                        </Grid>
                    );
                })}
                <Grid item xs={12}>
                    <Box
                        className="border-bottom"
                        sx={{
                            backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .85), rgba(255, 252, 235, 0.85)), url(/images/rose3.webp)`,
                            // backgroundSize: "cover",
                            backgroundPosition: {
                                xs: "50% 0%",
                                md: "25% 30%",
                            },
                            height: "10rem",
                        }}
                    ></Box>
                </Grid>
            </Grid>
            <Grid container className="border-bottom">
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{
                            padding: {
                                xs: theme.custom.spacing.small,
                                md: theme.custom.spacing.medium,
                            },
                            backgroundColor: theme.palette.primary.main,
                            display: "flex",
                            justifyContent: "end",
                            borderRight: { xs: "none", md: theme.border },
                            height: "100%",
                        }}
                    >
                        <Typography
                            variant="h1"
                            sx={{
                                color: theme.palette.custom.light,
                                textAlign: { xs: "center", md: "end" },
                            }}
                        >
                            Close, but no cigar?
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        className="gradient"
                        sx={{
                            padding: {
                                xs: theme.custom.spacing.small,
                                md: theme.custom.spacing.medium,
                            },
                            height: "100%",
                        }}
                    >
                        <Typography sx={{ maxWidth: "45ch" }}>
                            Try our hybrid plan instead. Leverage all the
                            utility of a template, but fine tune it to your
                            liking.
                        </Typography>
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: {
                                    xs: "center",
                                    md: "start",
                                },
                                width: "100%",
                                marginTop: "2rem",
                            }}
                        >
                            <Link href="/contact">
                                <Button
                                    color="secondary"
                                    variant="outlined"
                                    endIcon={<ArrowRightAlt />}
                                >
                                    go hybrid
                                </Button>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default index;
