import React, { useState, useEffect } from 'react';

interface InstagramEmbedProps {
  postId: string;
  title?: string;
  className?: string;
}

const InstagramEmbed: React.FC<InstagramEmbedProps> = ({ 
  postId, 
  title = "Vídeo do Instagram",
  className = "" 
}) => {
  const [iframeError, setIframeError] = useState(false);

  const handleIframeError = () => {
    setIframeError(true);
  };

  const openInstagram = () => {
    window.open(`https://www.instagram.com/p/${postId}/`, '_blank');
  };

  if (iframeError) {
    return (
      <div className={`w-full ${className}`}>
        <div className="max-w-sm mx-auto">
          <div className="w-full aspect-[9/16] border-2 border-dashed border-pink-300 rounded-lg flex items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <button
                onClick={openInstagram}
                className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Ver no Instagram
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="max-w-sm mx-auto">
        <iframe
          src={`https://www.instagram.com/p/${postId}/embed/`}
          title={title}
          className="w-full aspect-[9/16] border-0 rounded-lg"
          allowTransparency={true}
          allowFullScreen={true}
          scrolling="no"
          frameBorder="0"
          loading="lazy"
          onError={handleIframeError}
        />
      </div>
    </div>
  );
};

export default InstagramEmbed; 