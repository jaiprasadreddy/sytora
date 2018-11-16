import React from 'react';

export default function Flag_mv(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="M2,32c0,9.8,4.7,18.5,12,24h36c7.3-5.5,12-14.2,12-24S57.3,13.5,50,8H14C6.7,13.5,2,22.2,2,32z" fill="#699635" />
      <g fill="#ed4c5c">
        <path d="m14 8h36c-5-3.8-11.2-6-18-6s-13 2.2-18 6" />
        <path d="m32 62c6.8 0 13-2.2 18-6h-36c5 3.8 11.2 6 18 6" />
      </g>
      <path d="m43 49.6c-8.4-1.6-14.7-8.9-14.7-17.6s6.3-16 14.7-17.6c-1.2-.2-2.4-.4-3.7-.4-10.1 0-18.3 8.1-18.3 18 0 9.9 8.2 18 18.3 18 1.3 0 2.5-.1 3.7-.4" fill="#fff" />
    </svg>
  );
}