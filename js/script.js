// Global variables to track the active video and its thumbnail
let activeVideo = null;
let activeThumbnail = null;

// Define your video data
const videos = [
    { thumbnail: "2TikTokProduct/Thumbnails/LocalGlobal.jpeg", video: "2TikTokProduct/Videos/LocalGlobal.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/MetricsAreEverything.jpeg", video: "2TikTokProduct/Videos/MetricsAreEverything.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/TimeToValue.jpeg", video: "2TikTokProduct/Videos/TimeToValue.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/StorySoMe.jpeg", video: "2TikTokProduct/Videos/StorySoMe.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/ChurnRate.jpeg", video: "2TikTokProduct/Videos/ChurnRate.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/ConversionRate.jpeg", video: "2TikTokProduct/Videos/ConversionRate.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/CAC.jpeg", video: "2TikTokProduct/Videos/CAC.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/CLV.jpeg", video: "2TikTokProduct/Videos/CLV.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/StoryVolumeButton.jpeg", video: "2TikTokProduct/Videos/StoryVolumeButton.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/FindingBetaTesters.jpeg", video: "2TikTokProduct/Videos/FindingBetaTesters.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/StoryStartupRoles.jpeg", video: "2TikTokProduct/Videos/StoryStartupRoles.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/MyBiggestTeam.jpeg", video: "2TikTokProduct/Videos/MyBiggestTeam.mp4" },
];
  
const videoThumbnailsContainer = document.getElementById("video-thumbnail-row");
  
// Create the thumbnail-video pairs
videos.forEach(({ thumbnail, video }) => {
    // Container for each pair
    const container = document.createElement("div");
    container.style.display = "inline-block";
  
    // Create thumbnail image
    const img = document.createElement("img");
    img.src = thumbnail;
    img.alt = "Click to play";
    img.classList.add("tikTok");
    img.style.cursor = "pointer";
  
    // Create video element (initially hidden)
    const videoElement = document.createElement("video");
    videoElement.controls = true;
    videoElement.classList.add("tikTok");
    videoElement.style.display = "none"; // Hide video initially
    videoElement.autoplay = true;
  
    // Set the video source
    const source = document.createElement("source");
    source.src = video;
    source.type = "video/mp4";
    videoElement.appendChild(source);
  
    // When the thumbnail is clicked...
    img.onclick = () => {
        // If there's an active video that's not this one, pause it, reset, and hide it
        if (activeVideo && activeVideo !== videoElement) {
            activeVideo.pause();
            activeVideo.currentTime = 0;
            activeVideo.style.display = "none";
            if (activeThumbnail) {
                activeThumbnail.style.display = "block";
            }
        }

        // Hide the thumbnail, show the video, and start playback
        img.style.display = "none";
        videoElement.style.display = "block";
        videoElement.play();

        // Set the current video as active
        activeVideo = videoElement;
        activeThumbnail = img;
    };
  
    // Append thumbnail and video to the container, then add it to the page
    container.appendChild(img);
    container.appendChild(videoElement);
    videoThumbnailsContainer.appendChild(container);
});