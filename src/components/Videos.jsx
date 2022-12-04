import { Stack, Box } from "@mui/material";
import {VideoCard, ChannelCard} from './index'
const Videos = ({ videos }) => {
    return (
        <Stack direction="row" flexWrap = "wrap" gap={2} 
        justifyContent="start"
        >
            {videos.map((item, idx) => (
                <Box key={idx} sx={{width:{md:"320px" , xs: "100%" , boxShadow:'0', borderRadius:"none"}}}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
