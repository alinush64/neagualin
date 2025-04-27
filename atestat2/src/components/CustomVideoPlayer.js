import { useEffect, useRef } from "react";

export default function CustomVideoPlayer({ videoSrc }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        
      });
    }
  }, []);

  return (
    <div className="video-wrapper">
      <video
        ref={videoRef}
        className="w-full"
        controls
        autoPlay
      >
        <source src={videoSrc} type="video/mp4" />
      </video>
    </div>
  );
}
