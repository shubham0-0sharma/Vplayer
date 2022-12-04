import { Card, CardContent, Typography, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
import {
    demoChannelTitle,
    demoChannelUrl,
    demoVideoTitle,
    demoThumbnailUrl,
    demoVideoUrl,
} from "./utils/constant";
const VideoCard = ({video:{id:{videoId}, snippet}}) => (

<Card>
    <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
    <CardMedia image={snippet?.thumbnails?.high?.url} 
    alt ={ snippet.title}
    sx = {{width:{md:"358px",xs:'100%'},height: '180px'}}/>
    </Link>
    <CardContent sx={{ backgroundColor: '#1e1e1e', height:'106px'}}>
        <Link to={videoId?`/video/${videoId}`:demoChannelUrl}>
            <Typography variant="subtitle1" fontWeight="bold" color = "#ffff">
                {snippet?.title.slice(0,60)||
                demoVideoTitle.slice(0,60)}
            </Typography>

        </Link>
        <Link to={snippet?.channelId?`/video/${snippet?.channelId}`:demoChannelUrl}>
            <Typography variant="subtitle2" fontWeight="bold" color = "grey">
                {snippet?.channelTitle.slice(0,60)||
                demoChannelTitle.slice(0,60)}
            <CheckCircle sx ={{fontSize:12,color:"gray", ml:'5px'}}/>
            </Typography>


        </Link>

    </CardContent>
</Card>

);

export default VideoCard;
