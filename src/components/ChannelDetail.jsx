import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Videos, ChannelCard } from "./";

export const ChannelDetail = ({ marginTop }) => {
    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState(null);
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        const fetchResults = async () => {
            const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);

            setChannelDetail(data?.items[0]);

            const videosData = await fetchFromAPI(
                `search?channelId=${id}&part=snippet%2Cid&order=date`
            );

            setVideos(videosData?.items);
        };

        fetchResults();
    }, [id]);

    return (
        <Box>
            <Box minHeight="95vh">
                <div
                    style={{
                        background: "rgb(2,0,36)",
                        background:
                            "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(41,9,121,1) 25%, rgba(32,52,150,1) 35%, rgba(26,82,169,1) 54%, rgba(23,98,180,1) 60%, rgba(21,109,188,1) 64%, rgba(16,135,205,1) 73%, rgba(12,155,218,1) 80%, rgba(11,161,222,1) 82%, rgba(0,212,255,1) 100%)",
                        height: "200px",
                        zIndex: 10,
                    }}
                />
                <ChannelCard
                    channelDetail={channelDetail}
                    marginTop={"-170px"}
                />
                <Box display="flex" p="2"  justifyContent='center' >
                    <Box sx={{ mr: { sm: "100px" } }} />
                    <Videos videos={videos} />
                </Box>
            </Box>
        </Box>
    );
};
