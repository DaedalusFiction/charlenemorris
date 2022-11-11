import { Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import theme from "../../styles/themes/theme";
import Meta from "../home/Meta";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
    return (
        <Box>
            <Meta />
            <Navbar />
            <Container
                maxWidth="xl"
                disableGutters
                sx={{
                    position: "relative",
                    borderRight: theme.border,
                    borderLeft: theme.border,
                }}
            >
                {children}
            </Container>
            <Footer />
        </Box>
    );
};

export default Layout;
