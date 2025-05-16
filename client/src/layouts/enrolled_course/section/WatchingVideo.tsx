import React from "react";
import { defineVideoURL } from "@/utilities/url/defineVideoURL";

export default function WatchingVideo({ videoUrl }: { videoUrl: string }) {
  const typeVideo = defineVideoURL(videoUrl);
  return (
    <div className="h-[30rem] w-[55rem] max-w-[50rem] max-h-[30rem]">
      {typeVideo === "youtube" && (
        <iframe
          style={{ height: "100%", width: "100%" }}
          src={videoUrl}
          title="Youtube Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      )}
      {typeVideo === "video" && (
        <video controls>
          <source
            src={videoUrl}
            type="video/mp4"
          />
        </video>
      )}
    </div>
  );
}
