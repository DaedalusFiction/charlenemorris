import {
    Box,
    Button,
    Container,
    Divider,
    Grid,
    Paper,
    TextField,
    Typography,
} from "@mui/material";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import theme from "../../styles/themes/theme";
import { OpenInNew } from "@mui/icons-material";

const Contact = () => {
    const [email, setEmail] = useState("");
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [submitError, setSubmitError] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        if (validateEmail(e.target.value)) {
            setError(false);
        } else {
            setError(true);
        }
    };

    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    };

    const handleSendEmail = (e) => {
        e.preventDefault();

        var templateParams = {
            email: email,
        };

        emailjs
            .send(
                "service_tfru8q8",
                "template_fku5ces",
                templateParams,
                "t5M8T5zg8VbDQxPRy"
            )
            .then(
                function (response) {
                    console.log("SUCCESS!", response.status, response.text);
                    setSubmitted(true);
                    setSubmitError(false);
                },
                function (error) {
                    console.log("FAILED...", error);
                    setSubmitError(true);
                }
            );
    };
    return (
        <Box id="contact" sx={{ backgroundColor: theme.palette.primary.main }}>
            <Container maxWidth="md">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                        padding: "10vw 0 5vw 0",
                    }}
                >
                    <Typography
                        variant="h2"
                        sx={{
                            color: "white",
                            textAlign: "center",
                            fontSize: "5rem",
                            fontWeight: "bold",
                        }}
                    >
                        Ready to Get Started?
                    </Typography>
                    <a href="tel:434-825-5038">
                        <Typography
                            sx={{
                                color: "white",
                                textAlign: "center",
                                fontSize: "1.5rem",
                            }}
                        >
                            Call Mon-Fri, 8-5: (804) 240-4959
                        </Typography>
                    </a>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: "1rem",
                            alignItems: "center",
                        }}
                    >
                        {!submitted && (
                            <Box>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        color: "white",
                                        marginBottom: ".5em",
                                        textAlign: "center",
                                    }}
                                >
                                    Share Your Email:
                                </Typography>
                                <Paper sx={{ marginBottom: "1em" }}>
                                    <TextField
                                        // color="secondary"
                                        focused
                                        label="Email"
                                        variant="filled"
                                        onChange={handleEmailChange}
                                        error={error}
                                    />
                                </Paper>
                                <Button
                                    variant="contained"
                                    fullWidth
                                    disabled={error}
                                    size="large"
                                    color="secondary"
                                    onClick={handleSendEmail}
                                >
                                    Send
                                </Button>
                            </Box>
                        )}
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "1.5rem",
                            }}
                        >
                            or
                        </Typography>
                        <Box>
                            <iframe
                                title="request-quote"
                                width="300"
                                scrolling="no"
                                height="400"
                                frameborder="0"
                                src="https://www.freemedicarereport.com/comparison_form/charlenemorris.com?bg_color=D739A4&cta_color=2CF6B3&plan=G"
                            ></iframe>
                        </Box>
                        <Box>
                            <Divider
                                sx={{
                                    background: theme.palette.custom.lightMuted,
                                }}
                            />
                            <Grid container>
                                <Grid item xs={12} md={6}>
                                    <Box
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            gap: "1rem",
                                            padding: "4rem 0",
                                        }}
                                    >
                                        <Typography
                                            variant="h3"
                                            component="p"
                                            sx={{
                                                color: theme.palette.custom
                                                    .light,
                                            }}
                                        >
                                            Sign Up Online!
                                        </Typography>
                                        <Divider
                                            sx={{
                                                background:
                                                    theme.palette.custom
                                                        .lightMuted,
                                                width: "8rem",
                                            }}
                                        />
                                        <Typography
                                            sx={{
                                                color: theme.palette.custom
                                                    .lightMuted,
                                            }}
                                        >
                                            Click on a provider to sign up
                                            online in no time, and get the
                                            personalized care you deserve.
                                        </Typography>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <Box
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            flexDirection: "column",
                                            padding: "4rem 0",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                gap: "1rem",
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: "1rem",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <OpenInNew
                                                    sx={{
                                                        color: theme.palette
                                                            .custom.light,
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: theme.palette
                                                            .custom.light,
                                                        "&:hover": {
                                                            textDecoration:
                                                                "underline",
                                                        },
                                                    }}
                                                >
                                                    <a
                                                        href="https://www.humana.com/AOA/1316926"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Humana
                                                    </a>
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: "1rem",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <OpenInNew
                                                    sx={{
                                                        color: theme.palette
                                                            .custom.light,
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: theme.palette
                                                            .custom.light,
                                                        "&:hover": {
                                                            textDecoration:
                                                                "underline",
                                                        },
                                                    }}
                                                >
                                                    <a
                                                        href="https://agentsite.anthem.com/agentsite/ac/wwwcharlenemorriscom"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Anthem
                                                    </a>
                                                </Typography>
                                            </Box>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    gap: "1rem",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <OpenInNew
                                                    sx={{
                                                        color: theme.palette
                                                            .custom.light,
                                                    }}
                                                />
                                                <Typography
                                                    sx={{
                                                        color: theme.palette
                                                            .custom.light,
                                                        "&:hover": {
                                                            textDecoration:
                                                                "underline",
                                                        },
                                                    }}
                                                >
                                                    <a
                                                        href=" https://app.thinkagent.com/ext?repid=3077075"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                    >
                                                        Aetna
                                                    </a>
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        {submitted && (
                            <Typography sx={{ color: "white" }}>
                                Thank you! We will be in touch shortly.
                            </Typography>
                        )}
                    </Box>
                </Box>
            </Container>
        </Box>
    );
};

export default Contact;
