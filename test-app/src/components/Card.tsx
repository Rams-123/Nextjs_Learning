import React from "react";

const Card = ({ children }: { children: React.ReactNode }) => {
  const cardStyle = {
    padding: "100px",
    margin: "10px",
    boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    border: "1px solid #ddd",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    // <div style={cardStyle}>{children}</div>
    <div className="w-full flex p-[100px] m-3 items-center justify-center border border-gray-700 bg-blue-300">
      {children}
    </div>
  );
};

export default Card;
