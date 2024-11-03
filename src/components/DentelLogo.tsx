import React from 'react';

const DentCallLogo: React.FC = () => (
  <div className="flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Shield shape with rounded corners */}
      <path d="M20 2C10 2 4 6 4 6V22C4 30 20 38 20 38C20 38 36 30 36 22V6C36 6 30 2 20 2Z" fill="url(#shield-gradient)" />
      
      {/* Stylized tooth */}
      <path d="M14 12C14 12 17 16 20 16C23 16 26 12 26 12V28C26 28 23 32 20 32C17 32 14 28 14 28V12Z" fill="white" />
      
      {/* Digital elements */}
      <path d="M16 20H24M16 24H24" stroke="#0066FF" strokeWidth="2" strokeLinecap="round" />
      
      {/* Gradient definition */}
      <defs>
        <linearGradient id="shield-gradient" x1="20" y1="2" x2="20" y2="38" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0080FF" />
          <stop offset="1" stopColor="#0066FF" />
        </linearGradient>
      </defs>
    </svg>
    <div className="flex flex-col ml-2 items-center">
      <span className="text-2xl font-bold text-[#0066FF]">Meditel</span>
      <span className="text-xs text-[#0066FF] mt-[-2px]">Simplify with AI</span>
    </div>
  </div>
);

export default DentCallLogo;
