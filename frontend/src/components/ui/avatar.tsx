import React from "react";
export function Avatar({ children }) {
    return <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">{children}</div>;
  }
  
export function AvatarImage({ src, alt }) {
    return <img src={src} alt={alt} className="w-full h-full object-cover" />;
  }
  
export function AvatarFallback({ children }) {
    return <div className="flex items-center justify-center w-full h-full text-white bg-gray-500">{children}</div>;
  }
  