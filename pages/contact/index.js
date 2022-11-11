import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import PageLayout from "../../components/layout/PageLayout";
import ContactForm from "../../components/contact/ContactForm";
import { contactConfig } from "../../siteInfo";

const index = () => {
    return (
        <PageLayout name="Contact Form">
            <Box className="section border-top border-bottom">
                <Container>
                    <Grid container spacing={6}>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <Box>
                                    <Typography variant="h3" component="h2">
                                        Get in Touch
                                    </Typography>
                                    <br />
                                    <Typography>
                                        Ready to get started? Curious to know
                                        more? Just want to shoot the breeze?
                                        Send us your contact info and a short
                                        message, and we&rsquo;ll get back to you
                                        soon!
                                    </Typography>
                                    <br />
                                    <Typography>Thank you so much!</Typography>
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    height: "100%",
                                }}
                            >
                                <Box>
                                    <ContactForm config={contactConfig} />
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            textAlign: "center",
                                            marginTop: "1em",
                                            fontStyle: "italic",
                                        }}
                                    >
                                        Or you can email us at
                                        hello@fictionalweb.com
                                    </Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </PageLayout>
    );
};

export default index;
