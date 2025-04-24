const VideoEmbed = ({ videoId }) => {
    return (
      <div className="aspect-w-16 aspect-h-9 w-full">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube Video"
          frameBorder="0"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    );
  };
  
  export default VideoEmbed;
  