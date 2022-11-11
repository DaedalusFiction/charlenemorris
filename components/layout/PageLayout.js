import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Meta from "../home/Meta";

const PageLayout = ({ name, children }) => {
    return (
        <Box sx={{ paddingTop: "8rem" }}>
            <Meta siteName={name} />

            <Box className="gradient">
                <Typography
                    variant="h1"
                    sx={{ textAlign: "center", paddingBottom: "4rem" }}
                >
                    {name}
                </Typography>
            </Box>
            {children}
        </Box>
    );
};

export default PageLayout;
