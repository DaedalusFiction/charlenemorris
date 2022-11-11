import { Box } from "@mui/system";
import React from "react";
import SizedImage from "../general/SizedImage";

const ProjectPreview = ({ project, expanded }) => {
    return (
        <Box
            sx={{
                filter: expanded ? "sepia(0%)" : "sepia(100%) brightness(65%)",
                transition: "300ms",
                "&:hover": { filter: "none" },
            }}
        >
            <SizedImage
                height={expanded ? "20rem" : "7rem"}
                width="100%"
                image={project.image}
            />
        </Box>
    );
};

export default ProjectPreview;
