import React from 'react';

const DentelLogo: React.FC = () => (
  <div className="flex items-center">
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0C8.954 0 0 8.954 0 20s8.954 20 20 20 20-8.954 20-20S31.046 0 20 0zm0 36c-8.837 0-16-7.163-16-16S11.163 4 20 4s16 7.163 16 16-7.163 16-16 16z" fill="#0066FF"/>
      <path d="M28 14h-4v-4h-8v4h-4v12h4v4h8v-4h4V14zm-8 12h-4v-8h4v8z" fill="#0066FF"/>
      <path d="M13 26c2 3 4 4 7 4s5-1 7-4" stroke="#0066FF" strokeWidth="2" strokeLinecap="round"/>
    </svg>
    <span className="ml-2 text-2xl font-bold text-blue-600">DenTel</span>
  </div>
);

export default DentelLogo;