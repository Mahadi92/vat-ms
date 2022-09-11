import React from "react";

interface PropsType {
  size?: string | number;
}

const BrandIco = ({ size = "72" }) => {
  return (
    <svg
      width={size.toString()}
      height={size.toString()}
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M71.6097 7.10034H35.8927L30.944 14.8462L56.7635 30.7682L71.6097 7.10034Z"
        fill="#00B5DE"
      />
      <path
        d="M30.944 14.8462L7.061 0V35.7169L15.4523 40.4505L56.7635 30.7682L30.944 14.8462Z"
        fill="#00DECC"
      />
      <path
        d="M64.5093 38.0837L56.7635 33.3502L40.8415 58.9545L64.5093 73.8007V38.0837Z"
        fill="#FF5529"
      />
      <path
        d="M56.7635 33.3502L15.2372 43.2476L0.390976 66.4851H36.1079L40.8415 58.9545L56.7635 33.3502Z"
        fill="#FF9640"
      />
    </svg>
  );
};

export default BrandIco;
