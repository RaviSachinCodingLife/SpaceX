import video from "../assets/video/1.mp4";
import video1 from "../assets/video/2.mp4";
import video2 from "../assets/video/3.mp4";
import video3 from "../assets/video/4.mp4";
import video4 from "../assets/video/SpaceX Starlink 253 launch and Falcon 9 first stage landing, 2 May 2025.mp4";
import thumbnail from "../assets/images/StarLink/video_thumbnail.webp"
import thumbnail1 from "../assets/images/StarLink/video_thumbnail_1.webp"
import thumbnail2 from "../assets/images/StarLink/video_thumbnail_2.webp"
import thumbnail3 from "../assets/images/StarLink/video_thumbnail_3.webp"
import thumbnail4 from "../assets/images/StarLink/video_thumbnail_4.webp"


const videoList = [
    {
        id: 1,
        title: 'WHAT IS STARLINK?',
        description: 'High-speed internet, available almost anywhere on Earth.',
        thumbnail: thumbnail,
        videoSrc: video,
    },
    {
        id: 2,
        title: 'OBSTRUCTIONS',
        description: 'Set up Starlink with a clear view of sky.',
        thumbnail: thumbnail1,
        videoSrc: video1,
    },
    {
        id: 3,
        title: 'QUICK START FOR MINI',
        description: 'Get online in minutes.',
        thumbnail: thumbnail2,
        videoSrc: video2,
    },
    {
        id: 4,
        title: 'PERMANENT INSTALLATION FOR STANDARD',
        description: 'Learn how to install Starlink for best performance.',
        thumbnail: thumbnail3,
        videoSrc: video3,
    },
    {
        id: 2,
        title: 'OBSTRUCTIONS',
        description: 'Set up Starlink with a clear view of sky.',
        thumbnail: thumbnail4,
        videoSrc: video4,
    },
];

export { videoList }