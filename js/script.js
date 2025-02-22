// Define your video data
const videos = [
    { thumbnail: "2TikTokProduct/Thumbnails/LocalGlobal.jpeg", video: "2TikTokProduct/Videos/LocalGlobal.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/MetricsAreEverything.jpeg", video: "2TikTokProduct/Videos/MetricsAreEverything.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/TimeToValue.jpeg", video: "2TikTokProduct/Videos/TimeToValue.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/StoryTime.jpeg", video: "2TikTokProduct/Videos/StoryTime.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/ChurnRate.jpeg", video: "2TikTokProduct/Videos/ChurnRate.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/ConversionRate.jpeg", video: "2TikTokProduct/Videos/ConversionRate.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/CAC.jpeg", video: "2TikTokProduct/Videos/CAC.mp4" },
    { thumbnail: "2TikTokProduct/Thumbnails/CLV.jpeg", video: "2TikTokProduct/Videos/CLV.mp4" }
  ];
  
  const videoThumbnailsContainer = document.getElementById("video-thumbnail-row");
  
  // Function to create a thumbnail-video pair
  videos.forEach(({ thumbnail, video }) => {
    // Create a container for each thumbnail-video pair
    const container = document.createElement("div");
    container.style.display = "inline-block";
  
    // Create the thumbnail image with the "tikTok" class
    const img = document.createElement("img");
    img.src = thumbnail;
    img.alt = "Click to play";
    img.classList.add("tikTok"); // Add the shared class
    img.style.cursor = "pointer";
  
    // Create the video element with the same "tikTok" class, initially hidden
    const videoElement = document.createElement("video");
    videoElement.controls = true;
    videoElement.classList.add("tikTok"); // Add the shared class
    videoElement.style.display = "none"; // Hide video initially
    videoElement.autoplay = true;  // Ensure autoplay is enabled
  
    // Set the video source
    const source = document.createElement("source");
    source.src = video;
    source.type = "video/mp4";
    videoElement.appendChild(source);
  
    // When the thumbnail is clicked, hide it and show the video
    img.onclick = () => {
      img.style.display = "none"; // Hide thumbnail
      videoElement.style.display = "block"; // Show video
      videoElement.play(); // Start playback immediately
    };
  
    // Append the thumbnail and video to the container
    container.appendChild(img);
    container.appendChild(videoElement);
  
    // Add the container to the main thumbnails container
    videoThumbnailsContainer.appendChild(container);
});