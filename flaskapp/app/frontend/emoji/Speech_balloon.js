import React from 'react';

export default function Speech_balloon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64" width={64} height={64} {...props}>
      <path d="M55.4,5H8.6C4.9,5,2,7.9,2,11.5v29.8c0,3.6,2.9,6.5,6.6,6.5h6.9V59l10.4-11.2h29.6c3.6,0,6.6-2.9,6.6-6.5V11.5
      		C62,7.9,59.1,5,55.4,5z" fill="#4fd1d9" />
      <g fill="#fff">
        <circle cx={16} cy="26.4" r="4.2" />
        <circle cx={32} cy="26.4" r="4.2" />
        <circle cx={48} cy="26.4" r="4.2" />
      </g>
    </svg>
  );
}