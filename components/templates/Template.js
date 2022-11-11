import { Box, Button, Typography } from "@mui/material";
import React from "react";
import theme from "../../styles/themes/theme";
import SizedImage from "../general/SizedImage";
import CheckIcon from "@mui/icons-material/Check";
import Link from "next/link";
import { ArrowRightAlt } from "@mui/icons-material";

const Template = ({ template }) => {
    return (
        <Box
            sx={{
                padding: {
                    xs: theme.custom.spacing.small,
                    md: theme.custom.spacing.medium,
                },
                borderRight: { xs: "none", md: theme.border },
                borderBottom: theme.border,
                display: "flex",
                flexDirection: "column",
                height: "100%",
                justifyContent: "space-between",
            }}
        >
            <Box>
                <Link href={template.href}>
                    <Box
                        sx={{
                            transition: "300ms",
                            "&:hover": {
                                filter: "brightness(70%)",
                            },
                            cursor: "pointer",
                        }}
                    >
                        <SizedImage
                            width="100%"
                            height="15rem"
                            image={template.image}
                        />
                    </Box>
                </Link>
                <Typography
                    variant="h3"
                    sx={{ textAlign: "center", marginTop: "1rem" }}
                >
                    {template.name}
                </Typography>
                <Typography variant="subtitle1" sx={{ textAlign: "center" }}>
                    starting at
                </Typography>
                <Typography
                    variant="h4"
                    sx={{
                        textAlign: "center",
                        color: theme.palette.custom.accent,
                        marginBottom: ".5em",
                    }}
                >
                    {template.price}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        textAlign: "center",
                        color: theme.palette.custom.dark,
                        marginBottom: ".5rem",
                        fontStyle: "italic",
                    }}
                >
                    {template.description}
                </Typography>
                <Box>
                    {template.features.map((feature, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    padding: ".25rem 0",
                                    display: "flex",
                                    gap: ".5rem",
                                }}
                            >
                                <CheckIcon
                                    sx={{
                                        transform: "translateY(3px)",
                                    }}
                                />
                                <Box>
                                    <Typography variant="h6">
                                        {feature.name}
                                    </Typography>
                                    <Typography variant="caption">
                                        {feature.description}
                                    </Typography>
                                </Box>
                            </Box>
                        );
                    })}
                </Box>
            </Box>
            <Box
                sx={{
                    marginTop: "4rem",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Link
                    href={template.button.href}
                    // onClick={() => {
                    //     navigateToTop();
                    // }}
                >
                    <Button
                        color="secondary"
                        variant={template.button.variant}
                        endIcon={<ArrowRightAlt />}
                    >
                        {template.button.text}
                    </Button>
                </Link>
            </Box>
        </Box>
    );
};

export default Template;
