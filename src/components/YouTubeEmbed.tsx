interface YouTubeEmbedProps {
  videoId: string;
  title?: string;
  className?: string;
}

const YouTubeEmbed = ({ videoId, title = "Vídeo do YouTube", className = "" }: YouTubeEmbedProps) => {
  return (
    <iframe
      className={`w-full h-full rounded-xl ${className}`}
      src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
};

export default YouTubeEmbed; 