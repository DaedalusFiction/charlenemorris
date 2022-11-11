import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import Link from "next/link";
import theme from "../../styles/themes/theme";

const Hero = () => {
    return (
        <Box
            className="section border-bottom"
            sx={{
                backgroundImage: {
                    xs: `linear-gradient(to right, rgba(255, 252, 235, .5), rgba(255, 252, 235, 0.75), rgba(255, 252, 235, 1)), url(/images/rose2.webp)`,
                    md: `linear-gradient(to right, rgba(255, 252, 235, 0), rgba(255, 252, 235, 0.5), rgba(255, 252, 235, 1)), url(/images/rose2.webp)`,
                },
                backgroundSize: "cover",
                backgroundPosition: { xs: "50% 0%", md: "0% 0%" },
            }}
        >
            <Container maxWidth="xl">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={5}></Grid>
                    <Grid item xs={12} sm={7}>
                        <Box
                            sx={{
                                padding: {
                                    xs: "15vh 0 22vh 0",
                                    md: "20vh 0 20vh 0",
                                },
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "end",
                            }}
                        >
                            <Typography
                                variant="h1"
                                component="p"
                                sx={{
                                    textAlign: "end",
                                }}
                            >
                                FICTIONAL{" "}
                                <span className="color-accent">WEB.</span>
                            </Typography>
                            <Typography
                                variant="h4"
                                component="h1"
                                sx={{
                                    marginBottom: ".5em",
                                    textAlign: "end",
                                    maxWidth: "35rem",
                                    // color: theme.palette.custom.darkMuted,
                                }}
                            >
                                We create websites that tell stories.
                            </Typography>
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "end",
                                    marginTop: "1rem",
                                }}
                            >
                                <Link href="/projects">
                                    <Button
                                        endIcon={<ArrowRightAlt />}
                                        variant="outlined"
                                        color="secondary"
                                    >
                                        view our work
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Hero;
