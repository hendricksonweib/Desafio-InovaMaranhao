import React from 'react';
import "../style/global.css"
interface YouTubeVideoProps {
  videoUrl: string;
}

const YouTubeVideo: React.FC<YouTubeVideoProps> = ({ videoUrl }) => {
  // Extract the video ID from the YouTube URL
  const videoId = videoUrl.split('v=')[1]?.split('&')[0];

  if (!videoId) {
    return <div>Invalid YouTube URL</div>;
  }

  return (

    <div className="youtube-video">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video player"
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
