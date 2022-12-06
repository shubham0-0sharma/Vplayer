import { useState, useEffect } from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Sidebar, Videos } from ".";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import { useParams } from "react-router-dom";


const SearchFeed = () => {
    const { searchTerm } = useParams()
    const [videos, setVideos] = useState([]);
    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${searchTerm}`).then(
            (data) => {
                setVideos(data.items);
            }
        );
    }, [searchTerm]);
    return (
        <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
            <Typography
                fontWeight="bold"
                mb={2}
                variant="h4"
                sx={{ color: "whitesmoke" }}
            >
                Search Results for:
                <span style={{ color: "#FC1503" }}> {searchTerm}</span>
            </Typography>
            <Videos videos={videos} />
        </Box>
    );
};

export default SearchFeed;
