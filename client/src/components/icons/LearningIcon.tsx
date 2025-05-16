import { RiSlideshow2Line } from "react-icons/ri";
import { RxVideo } from "react-icons/rx";
import { MdOutlineAssignment } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa";

import React from 'react'

export default function LearningIcon({ type, className }: { type: string, className?: string }) {
    let icon;
    switch (type) {
        case "Video":
            icon = <RxVideo />;
            break;
        case "Slide":
            icon = <RiSlideshow2Line />;
            break;
        case "Document":
            icon = <IoBookOutline/>;
            break;
        case "Test":
            icon = <MdOutlineAssignment />;
            break;
        case "Done":
            icon = <FaCheck />;
            break;
        default:
            icon = <></>;
    }
  return (
    <div className={className}>
        {icon}
    </div>
  )
}
