import { Stack, Box } from "@mui/material";
import {VideoCard, ChannelCard, Loader} from './index'
const Videos = ({ videos , direction}) => {
    if (!videos?.length) return <Loader/>
    return (
        <Stack
            direction={direction || "row"}
            flexWrap="wrap"
            gap={2}
            sx={{
                justifyContent: { xs: "center", sm:'start',md:'start' },
            }}
        >
            {videos.map((item, idx) => (
                <Box key={idx}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channelDetail={item} />}
                </Box>
            ))}
        </Stack>
    );
};

export default Videos;
