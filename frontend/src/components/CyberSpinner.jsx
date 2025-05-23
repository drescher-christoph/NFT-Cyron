import React from "react";

const CyberSpinner = ({ size = "md" }) => {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-20 h-20"
  };

  return (
    <div className="flex justify-center items-center">
      <div className={`relative ${sizeClasses[size] || sizeClasses.md}`}>
        {/* Hexagon-Hintergrund */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-full h-full border-2 border-purple-900/30 rounded-full"></div>
        </div>
        
        {/* Haupt-Spinner (Hexagon-ähnlich) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="
            w-full h-full rounded-full 
            border-4 border-transparent
            border-t-purple-500 border-r-purple-400
            animate-spin duration-1000
            shadow-[0_0_10px_#a855f7,0_0_20px_#a855f7,0_0_40px_#a855f7]
          "></div>
        </div>
        
        {/* Cyber-Punkte */}
        {[...Array(8)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-2 h-2 bg-purple-400 rounded-full shadow-[0_0_5px_2px_#c084fc]"
            style={{
              top: "50%",
              left: "50%",
              transform: `
                translate(-50%, -50%) 
                rotate(${i * 45}deg) 
                translate(0, -24px)
              `,
              opacity: 0.7,
              animation: `pulse 1.5s ease-in-out ${i * 0.1}s infinite alternate`
            }}
          ></div>
        ))}
        
        {/* Zentrum mit Glow-Effekt */}
        <div className="
          absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
          w-3 h-3 rounded-full bg-purple-300
          shadow-[0_0_10px_#c084fc,0_0_20px_#c084fc]
        "></div>
      </div>
    </div>
  );
};

export default CyberSpinner;