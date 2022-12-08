import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import {
    demoChannelTitle,
    demoChannelUrl,
    demoVideoTitle,
    demoThumbnailUrl,
    demoVideoUrl,
} from "../utils/constant";
const VideoCard = ({
    video: {
        id: { videoId },
        snippet,
    },
}) => (
    <Card
        sx={{
            width: { xs: "340pxy", sm: "358px", md: "320px" },
            boxShadow: "none",
            borderRadius: 0,
        }}
    >
        <Link to={videoId ? `/video/${videoId}` : `/video/cV2gBU6hKfY`}>
            <CardMedia
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={snippet?.title}
                sx={{
                    width: { xs: "100%", sm: "358px", md: "320px" },
                    height: "180px",
                }}
            />
        </Link>
        <CardContent sx={{ backgroundColor: "#1e1e1e", height: "80px" }}>
            <Link to={videoId ? `/video/${videoId}` : demoChannelUrl}>
                <Typography variant="subtitle1" fontWeight="bold" color="#ffff">
                    {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
                </Typography>
            </Link>
            <Link
                to={
                    snippet?.channelId
                        ? `/video/${snippet?.channelId}`
                        : demoChannelUrl
                }
            >
                <Typography variant="subtitle2" fontWeight="bold" color="grey">
                    {snippet?.channelTitle.slice(0, 60) || demoChannelTitle}
                    <CheckCircle
                        sx={{ fontSize: 12, color: "gray", ml: "5px" }}
                    />
                </Typography>
            </Link>
        </CardContent>
    </Card>
);

export default VideoCard;
