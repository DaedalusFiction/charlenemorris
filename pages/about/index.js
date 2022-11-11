import { Box, Button, Grid, Link, Typography } from "@mui/material";
import SizedImage from "../../components/general/SizedImage";
import { aboutContent } from "../../siteInfo";
import PageLayout from "../../components/layout/PageLayout";
import theme from "../../styles/themes/theme";

const index = () => {
    return (
        <PageLayout name="ABOUT">
            <Grid container className="border-top border-bottom">
                <Grid item xs={12} md={3}>
                    <Box
                        sx={{
                            borderRight: { xs: "none", md: theme.border },
                            height: "100%",
                            backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .5), rgba(255, 252, 235, 0.5)), url(/images/rose2.webp)`,
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
                        <Typography variant="h3" component="h2">
                            {aboutContent.name}
                        </Typography>
                        <br />
                        <Typography>
                            Websites can be expensive. And building one
                            yourself, especially if you want something fast,
                            reliable, and uniquely yours, always seems to take
                            more time and effort than website builders such as
                            Wordpress, Wix, and Squarespace would have you
                            believe. That&rsquo;s why, when we founded Fictional
                            Web in the Spring of 2022, we had one goal in mind:
                            Find a way to quickly and reliably generate quality
                            websites for artists.
                        </Typography>
                        <br />
                        <Typography>
                            But we didn&rsquo;t stop there. We wanted to work
                            with everyone in the arts, from musicians to
                            craftspeople to designers and authors. And the more
                            we worked with people, the more we realize that just
                            about everything is artistic in some way.
                        </Typography>
                        <br />
                        <Typography>
                            If you&rsquo;re going to do anything meaningful on
                            your own these days, you almost certainly need a
                            website. And there are a lot of people out there who
                            are working incredibly hard on what they do, but
                            might not have the energy or resources to build a
                            quality website on their own or hire a large agency
                            to help them with it. Their work is meaningful, and
                            we want to make sure that they have a solid
                            opportunity to say what they want to say, to show
                            the world what they want to show it.
                        </Typography>
                        <br />
                        <Typography>
                            If you have a story to tell&mdash;and we&rsquo;re
                            pretty sure you do&mdash;then consider letting us be
                            the ones to help you tell it.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Box
                        sx={{
                            height: "100%",
                            backgroundImage: `linear-gradient(to right, rgba(255, 252, 235, .5), rgba(255, 252, 235, 0.5)), url(/images/rose3.webp)`,
                            // backgroundSize: "cover",
                            backgroundPosition: {
                                xs: "50% 30%",
                                md: "75% 30%",
                            },
                        }}
                    ></Box>
                </Grid>
            </Grid>
        </PageLayout>
    );
};

export default index;
