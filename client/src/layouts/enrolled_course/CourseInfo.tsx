import { Image } from "antd";
import React from "react";

export default function CourseInfo({
  banner,
  title,
  overview,
}: {
  banner: string;
  title: string;
  overview: string;
}) {
  console.log("Banner in CourseInfo:", banner);
  return (
    <div>
      <div>
        {banner ? (
          <div className="h-full flex items-center justify-center">
            <Image
              src={banner}
              alt={title}
              // style={{
              //   width: "16rem",
              //   objectFit: "cover",
              //   borderRadius: "10px",
              // }}
            />
          </div>
        ) : (
          <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
      </div>
      <div className="flex p-3">
        <div className="leading-[1.2rem]">
          <p className="text-2xl font-bold">{title}</p>
          <p className="text-gray-500">{overview}</p>
        </div>
      </div>
    </div>
  );
}
