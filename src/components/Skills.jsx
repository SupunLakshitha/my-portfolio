import laravel from '../assets/laravel.png';
import framerMotion from '../assets/framer_motion.png';
import vue from '../assets/vue.png';
import reactIcon from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import firebase from '../assets/firebase.png';
import python from '../assets/python.png';
import vite from '../assets/vite.png';

// Inline SVG icons — no external URLs needed, always loads, fully colored
const Icons = {
  // --- Programming Languages ---
  Java: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#EA2D2E" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zM44.629 84.455s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/>
      <path fill="#EA2D2E" d="M69.802 61.271c6.025 6.929-1.58 13.171-1.58 13.171s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 0-42.731 10.67-22.324 34.186z"/>
      <path fill="#EA2D2E" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zM90.609 93.041c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0 .001.364-.328 1.468-.617z"/>
      <path fill="#EA2D2E" d="M76.491 1.587s12.968 12.97-12.303 32.923c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815 8.548-12.834 32.229-19.059 26.998-39.667z"/>
      <path fill="#EA2D2E" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/>
    </svg>
  ),
  C: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#659AD3" d="M115.4 30.7L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.4 1 3.5l106.8-62c-.6-1.2-1.5-2.1-2.4-2.7z"/>
      <path fill="#03599C" d="M10.7 95.3c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c0-.9-.1-1.9-.6-2.8l-106.6 62z"/>
      <path fill="#fff" d="M85.3 76.1C81.1 83.5 73.1 88.5 64 88.5c-13.5 0-24.5-11-24.5-24.5s11-24.5 24.5-24.5c9.1 0 17.1 5 21.3 12.5l13-7.5c-6.8-11.9-19.6-20-34.3-20-21.8 0-39.5 17.7-39.5 39.5s17.7 39.5 39.5 39.5c14.6 0 27.4-8 34.2-19.8l-12.9-7.6z"/>
    </svg>
  ),
  JavaScript: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#F0DB4F" d="M1.408 1.408h125.184v125.185H1.408z"/>
      <path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.104 5.332 17.54 6.545 18.873 11.531 1.297 6.104-4.486 8.08-10.234 7.378-4.236-.881-6.592-3.034-9.139-6.949-4.688 2.713-4.688 2.713-9.508 5.485 1.143 2.499 2.344 3.63 4.26 5.795 9.068 9.198 31.76 8.746 35.83-5.176.165-.478 1.261-3.666.38-8.581zM69.462 58.943H57.753l-.048 30.272c0 6.438.333 12.34-.714 14.149-1.713 3.558-6.152 3.117-8.175 2.427-2.059-1.012-3.106-2.451-4.319-4.485-.333-.584-.583-1.036-.667-1.071l-9.52 5.83c1.583 3.248 3.915 6.069 6.902 7.901 4.462 2.678 10.459 3.499 16.731 2.059 4.082-1.189 7.604-3.652 9.448-7.401 2.666-4.915 2.094-10.864 2.07-17.444.06-10.735.001-21.468.001-32.237z"/>
    </svg>
  ),
  HTML5: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/>
      <path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/>
      <path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/>
      <path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.336-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/>
    </svg>
  ),
  CSS3: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#1572B6" d="M18.814 114.123L9.052 1.261h109.896l-9.773 112.862-45.274 12.58z"/>
      <path fill="#33A9DC" d="M64.001 117.062l36.559-10.136 8.338-93.346H64.001z"/>
      <path fill="#fff" d="M64 75.095H46.675l-1.15-12.945H64V49.488H32.77l.227 2.503 2.316 26.289H64zm0 18.68l-.048.013-15.316-4.14-.979-10.975H34.816l1.928 21.609 27.193 7.697.063-.017z"/>
      <path fill="#EBEBEB" d="M63.952 75.095v12.637h16.011l-1.51 16.849-14.501 3.915v13.332l27.2-7.548.2-2.232 3.145-35.233.325-3.72H63.952zm0-25.607v12.638h31.663l.263-2.94.601-6.693.201-3.005z"/>
    </svg>
  ),
  PHP: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#6181B6" d="M0 64c0 18.593 28.654 33.667 64 33.667 35.346 0 64-15.074 64-33.667 0-18.593-28.654-33.667-64-33.667C28.654 30.333 0 45.407 0 64z"/>
      <path fill="#fff" d="M45.987 77.33l1.026-5.293c.34-1.758.68-3.573 1.077-5.785.341-1.758.624-3.233.794-4.31h-7.665l-2.218 11.38h-6.64l4.38-21.85h6.698l-1.56 7.927h7.665c.34-1.419.68-2.78 1.02-4.024.567-2.098 1.304-3.903 2.898-3.903h11.04l-1.077 5.576-7.268.057c-.397 0-.624.17-.737.794-.17.908-.34 1.701-.51 2.495l-.283 1.361h7.665l-1.077 5.576h-7.552l-1.247 6.327h-6.47v-.001zM75.482 55.471h6.698l-1.56 7.927h7.665c.34-1.419.68-2.78 1.02-4.024.567-2.098 1.304-3.903 2.898-3.903h11.04l-1.077 5.576-7.268.057c-.397 0-.624.17-.737.794-.17.908-.34 1.701-.51 2.495l-.283 1.361h7.665l-1.077 5.576h-7.552l-1.247 6.327h-6.47l1.026-5.293c.34-1.758.68-3.573 1.077-5.785.341-1.758.624-3.233.794-4.31h-7.665l-2.218 11.38h-6.64l4.38-21.178z"/>
    </svg>
  ),
  Python: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <linearGradient id="pyGrad1" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
        <stop offset="0" stopColor="#5A9FD4"/><stop offset="1" stopColor="#306998"/>
      </linearGradient>
      <linearGradient id="pyGrad2" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)">
        <stop offset="0" stopColor="#FFD43B"/><stop offset="1" stopColor="#FFE873"/>
      </linearGradient>
      <path fill="url(#pyGrad1)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/>
      <path fill="url(#pyGrad2)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/>
    </svg>
  ),
  SQL: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#00618A" d="M0 0h128v128H0z"/>
      <path fill="#fff" d="M27 95V58h-7v37h7zm15-37h-7v37h7V58zm45 37V58H53v37h34zm-27-30h20v23H60V65zm42-7h-7v37h7V58zm-7 0V51h-7v7h7zm7 0h7V51h-7v7z"/>
      <path fill="#00618A" d="M60 65h20v23H60V65z"/>
      <path fill="#F29111" d="M27 40v12h74V40H27zm0-12v6h74v-6H27z"/>
    </svg>
  ),
  // --- Web Development ---
  React: () => (
    <svg viewBox="-11.5 -10.23174 23 20.46348" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
      <g stroke="#61dafb" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  Tailwind: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.745-12.207-8.66C55.128 71.371 47.868 64 32.004 64z" fill="#38bdf8"/>
    </svg>
  ),
  ResponsiveDesign: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#3B82F6" d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
      <rect x="1" y="3" width="22" height="18" rx="2" fill="none" stroke="#6366F1" strokeWidth="1.5"/>
      <rect x="7" y="8" width="10" height="8" rx="1" fill="none" stroke="#06B6D4" strokeWidth="1.2"/>
    </svg>
  ),
  RESTAPI: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="none" stroke="#22C55E" strokeWidth="1.5"/>
      <path fill="#22C55E" d="M8 9h8v2H8zm0 4h8v2H8z"/>
      <path fill="#16A34A" d="M10 7l2-2 2 2zm0 10l2 2 2-2z"/>
    </svg>
  ),
  // --- Mobile ---
  AndroidStudio: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <linearGradient id="asGrad" x1="64" y1="8" x2="64" y2="120" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#3DDC84"/><stop offset="1" stopColor="#00897B"/>
      </linearGradient>
      <circle cx="64" cy="64" r="56" fill="url(#asGrad)"/>
      <path fill="#fff" d="M64 28c-19.9 0-36 16.1-36 36s16.1 36 36 36 36-16.1 36-36-16.1-36-36-36zm0 10c14.4 0 26 11.6 26 26S78.4 90 64 90 38 78.4 38 64s11.6-26 26-26z"/>
      <circle cx="64" cy="64" r="10" fill="#fff"/>
      <path fill="#fff" d="M50 50l5 5m18 18l5 5M50 78l5-5m18-18l5-5" stroke="#3DDC84" strokeWidth="3"/>
    </svg>
  ),
  Android: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#3DDC84" d="M45.4 24.4l-5-8.7c-.3-.6-.1-1.3.5-1.6.6-.3 1.3-.1 1.6.5l5.1 8.8C51 21.5 57.4 20 64 20s13 1.5 16.5 3.4l5.1-8.8c.3-.6 1-.8 1.6-.5.6.3.8 1 .5 1.6l-5 8.7C91.6 28.8 98 37.2 98 47H30c0-9.8 6.4-18.2 15.4-22.6zM51 38c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zm32 0c0 1.7-1.3 3-3 3s-3-1.3-3-3 1.3-3 3-3 3 1.3 3 3zM22 49h6v26c0 3.3 2.7 6 6 6s6-2.7 6-6V49h48v26c0 3.3 2.7 6 6 6s6-2.7 6-6V49h6c2.2 0 4 1.8 4 4v36c0 2.2-1.8 4-4 4h-6v12c0 3.3-2.7 6-6 6s-6-2.7-6-6V93H40v12c0 3.3-2.7 6-6 6s-6-2.7-6-6V93h-6c-2.2 0-4-1.8-4-4V53c0-2.2 1.8-4 4-4z"/>
    </svg>
  ),
  XML: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#F97316" d="M14.5 3H9.5L2 12l7.5 9h5l-7-9 7-9zM9.5 3h5l7 9-7 9h-5l7-9-7-9z" opacity=".6"/>
      <path fill="#EA580C" d="M12 7l-3 5 3 5 3-5-3-5z"/>
    </svg>
  ),
  RecyclerView: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="2" y="4" width="20" height="4" rx="1" fill="#3DDC84"/>
      <rect x="2" y="10" width="20" height="4" rx="1" fill="#2DB36B"/>
      <rect x="2" y="16" width="20" height="4" rx="1" fill="#1A8A4A"/>
      <circle cx="5" cy="6" r="1" fill="#fff"/>
      <circle cx="5" cy="12" r="1" fill="#fff"/>
      <circle cx="5" cy="18" r="1" fill="#fff"/>
    </svg>
  ),
  // --- DB & Backend ---
  MySQL: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#00618A" d="M2 96.5c3.7 0 6.3-.5 8.3-1.6 1.9-1 3.2-2.6 3.2-5.5 0-2.5-1.5-4.3-3.3-5.4-1.9-1.1-4.3-1.6-6.9-1.6H0v14.1h2zm-2-23.4h3.1c2.3 0 4.1-.4 5.4-1.4 1.3-.9 2-2.3 2-4.3 0-1.9-.7-3.3-2-4.2C7.2 62.4 5.4 62 3.1 62H0v11.1zM0 60h3.5c5.3 0 9 .9 11.6 2.7 2.6 1.8 4 4.6 4 8.2 0 2.6-.7 4.8-2.1 6.4-1.4 1.7-3.4 2.7-5.9 3.2v.1c3.1.5 5.5 1.8 7.2 3.7 1.7 1.9 2.6 4.4 2.6 7.3 0 4.2-1.5 7.4-4.5 9.5C13.4 103 8.9 104 2.9 104H0V60z"/>
      <path fill="#E48D00" d="M42 103.6c-2.3.4-4.5.4-6.5 0-2-.5-3.7-1.3-5-2.5-1.3-1.2-2.4-2.9-3.1-5.1-.7-2.1-1.1-4.7-1.1-7.7 0-3 .4-5.6 1.1-7.7.8-2.2 1.8-3.9 3.1-5.1 1.3-1.2 2.9-2 4.8-2.5 1.9-.4 3.9-.7 6-.7h1.6V104c-.3-.1-.6-.3-.9-.4zm-1.6-28.4c-1.6.1-2.9.4-4 1-1.1.6-2 1.5-2.7 2.7-.7 1.2-1.2 2.7-1.5 4.4-.3 1.8-.4 3.8-.4 6.1 0 2.3.1 4.3.4 6.1.3 1.8.8 3.3 1.5 4.5.7 1.2 1.6 2.1 2.7 2.7 1.1.6 2.5.9 4 .9V75.2z"/>
      <path fill="#00618A" d="M57 76h-5.5l-1.5-16h7l-1.5 16zm-5.5 28h7l-1.5-16H54l-1.5 16z"/>
    </svg>
  ),
  Firebase: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#FFA000" d="M24.1 107.3L38.6 18l27.8 52.6z"/>
      <path fill="#F57F17" d="M76 68.6l11.5-22.1 16.4 60.8z"/>
      <path fill="#FFCA28" d="M24.1 107.3l52.8-27.5 27.1 27.5z"/>
      <path fill="#FFA000" d="M76 68.6l28.2 38.7-52.8 .2z"/>
      <path fill="#F57F17" d="M38.6 18L76 68.6 51.5 79z"/>
    </svg>
  ),
  // --- Data Analytics ---
  Pandas: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#130754" d="M51 16h10v96H51zm16 0h10v96H67z"/>
      <path fill="#FFCA00" d="M51 39h26v10H51zm0 40h26v10H51z"/>
    </svg>
  ),
  NumPy: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#4DABCF" d="M64 10L10 40v48l54 30 54-30V40L64 10z" opacity=".2"/>
      <path fill="#4DABCF" d="M64 10L10 40l54 30 54-30L64 10z"/>
      <path fill="#4D77CF" d="M10 40v48l54 30V70L10 40z"/>
      <path fill="#3D6CB9" d="M118 40v48l-54 30V70l54-30z"/>
      <path fill="#fff" d="M46 52l36 20-36 20V52z" opacity=".3"/>
    </svg>
  ),
  SQLAnalysis: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <ellipse cx="12" cy="6" rx="8" ry="3" fill="#00618A"/>
      <path d="M4 6v4c0 1.66 3.58 3 8 3s8-1.34 8-3V6" fill="none" stroke="#00618A" strokeWidth="1.5"/>
      <path d="M4 10v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="none" stroke="#0077A8" strokeWidth="1.5"/>
      <path d="M4 14v4c0 1.66 3.58 3 8 3s8-1.34 8-3v-4" fill="none" stroke="#0099CC" strokeWidth="1.5"/>
    </svg>
  ),
  PowerBI: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#F2C811" d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
      <path fill="#E8B800" d="M12 2v20l10-5V7L12 2z"/>
      <rect x="7" y="10" width="3" height="7" rx=".5" fill="#fff" opacity=".9"/>
      <rect x="11" y="7" width="3" height="10" rx=".5" fill="#fff" opacity=".9"/>
      <rect x="15" y="12" width="3" height="5" rx=".5" fill="#fff" opacity=".9"/>
    </svg>
  ),
  DataCleaning: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#8B5CF6" d="M19 4H5C3.34 4 2 5.34 2 7v10c0 1.66 1.34 3 3 3h14c1.66 0 3-1.34 3-3V7c0-1.66-1.34-3-3-3zM5 6h14c.55 0 1 .45 1 1v1H4V7c0-.55.45-1 1-1zM4 17v-7h16v7c0 .55-.45 1-1 1H5c-.55 0-1-.45-1-1z"/>
      <path fill="#7C3AED" d="M7 13h2v2H7zm4 0h2v2h-2zm4 0h2v2h-2z"/>
    </svg>
  ),
  EDA: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#F59E0B" d="M3 3h18v18H3z" rx="1" opacity=".1"/>
      <polyline points="3,17 8,12 12,15 17,8 21,11" fill="none" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="8" cy="12" r="1.5" fill="#F59E0B"/>
      <circle cx="12" cy="15" r="1.5" fill="#F59E0B"/>
      <circle cx="17" cy="8" r="1.5" fill="#F59E0B"/>
    </svg>
  ),
  // --- Tools ---
  Git: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#F34F29" d="M124.742 58.378L69.625 3.264a8.275 8.275 0 00-11.704 0l-11.655 11.66 14.769 14.769a9.804 9.804 0 0112.285 12.438l14.224 14.224a9.8 9.8 0 0110.145 16.237 9.805 9.805 0 01-12.289-1.428 9.811 9.811 0 01-2.096-10.674L70.089 46.997v33.428a9.8 9.8 0 012.568 18.961 9.801 9.801 0 11-11.233-15.597V46.442a9.796 9.796 0 01-5.327-12.787L41.4 18.854l-38.16 38.16a8.282 8.282 0 000 11.708l55.118 55.112a8.28 8.28 0 0011.704 0l54.68-54.678a8.285 8.285 0 000-11.778z"/>
    </svg>
  ),
  GitHub: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#181616" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.103z"/>
    </svg>
  ),
  VSCode: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#0065A9" d="M90.767 11.4L51.892 49.02 26.667 30.31 16 36.59v55.77l10.667 6.27 25.225-18.71L90.767 117.6 112 105.7V23.3L90.767 11.4zm0 80.73L61.833 64.5l28.934-27.63v55.26z"/>
    </svg>
  ),
  AndroidEmulator: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="5" y="2" width="14" height="20" rx="2" fill="none" stroke="#3DDC84" strokeWidth="1.5"/>
      <circle cx="12" cy="19" r="1" fill="#3DDC84"/>
      <rect x="8" y="5" width="8" height="11" rx="1" fill="#3DDC84" opacity=".3"/>
      <path fill="#3DDC84" d="M9 8l2 3-2 3h1.5l1.5-2 1.5 2H15l-2-3 2-3h-1.5L12 11l-1.5-3H9z"/>
    </svg>
  ),
  Cloudinary: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#3448C5" d="M19.35 10.04A7.49 7.49 0 0012 4C9.11 4 6.6 5.64 5.35 8.04A5.994 5.994 0 000 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
      <path fill="#fff" d="M17 15l-5-5-5 5h3v3h4v-3z" opacity=".8"/>
    </svg>
  ),
  Vite: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#41D1FF" d="M120 15.3l-58 105.4-2.1-3.8L103.6 15z"/>
      <path fill="#BD34FE" d="M120 15.3H64.9L8 120.7l58-9.8 54-95.6z" opacity=".8"/>
      <path fill="#41D1FF" d="M64.9 15.3L8 120.7l10.5-1.8 46.4-84.4V15.3z"/>
    </svg>
  ),
  // --- QA & Testing ---
  ManualTesting: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#EF4444" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
      <rect x="2" y="3" width="20" height="18" rx="2" fill="none" stroke="#EF4444" strokeWidth="1.5"/>
    </svg>
  ),
  FunctionalTesting: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#F43F5E" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
    </svg>
  ),
  UITesting: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="2" y="3" width="20" height="15" rx="2" fill="none" stroke="#EF4444" strokeWidth="1.5"/>
      <path fill="#EF4444" d="M8 21h8M12 18v3" stroke="#EF4444" strokeWidth="1.5"/>
      <path fill="#EF4444" d="M7 9l3 3-3 3m4 0h4" stroke="#EF4444" strokeWidth="1.5" fill="none"/>
    </svg>
  ),
  TestCaseDesign: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#F87171" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.23c0-.62.28-1.2.76-1.58C7.47 15.82 9.64 15 12 15s4.53.82 6.24 2.19c.48.38.76.97.76 1.58V19z"/>
    </svg>
  ),
  BugReporting: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#DC2626" d="M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5c-.49 0-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-6 8h-4v-2h4v2zm0-4h-4v-2h4v2z"/>
    </svg>
  ),
  Debugging: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#B91C1C" d="M17.73 12.02l3.98-3.98-1.06-1.06L16.67 11c-.32-.22-.65-.42-1-.59V7h-2v3h-2V7H9.5v3.41c-.35.17-.68.37-1 .59L4.65 6.98 3.59 8.04l3.98 3.98C7.21 12.62 7 13.29 7 14h10c0-.71-.21-1.38-.27-1.98zM12 22c-2.76 0-5-2.24-5-5h2c0 1.66 1.34 3 3 3s3-1.34 3-3h2c0 2.76-2.24 5-5 5zm0-19C8.69 3 6 5.69 6 9h2c0-2.21 1.79-4 4-4s4 1.79 4 4h2c0-3.31-2.69-6-6-6z"/>
    </svg>
  ),
  SDLC: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#EF4444" d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z"/>
    </svg>
  ),
  ValidationTesting: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#F43F5E" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
    </svg>
  ),
  Selenium: () => (
    <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="64" cy="64" r="60" fill="#43B02A"/>
      <path fill="#fff" d="M64 20C39.7 20 20 39.7 20 64s19.7 44 44 44 44-19.7 44-44S88.3 20 64 20zm0 80c-19.9 0-36-16.1-36-36s16.1-36 36-36 36 16.1 36 36-16.1 36-36 36z"/>
      <path fill="#fff" d="M64 44c-11 0-20 9-20 20s9 20 20 20 20-9 20-20-9-20-20-20zm0 32c-6.6 0-12-5.4-12-12s5.4-12 12-12 12 5.4 12 12-5.4 12-12 12z"/>
    </svg>
  ),
  JMeter: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#D22128" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path fill="#fff" d="M8 7h8v2H8zm0 4h8v2H8zm0 4h5v2H8z"/>
      <path fill="#fff" d="M17 13l-3 4v-3h-1v-1h4z" opacity=".8"/>
    </svg>
  ),
  // --- AI Tools ---
  ChatGPT: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#10A37F" d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 0014.001 1.3a6.012 6.012 0 00-5.742 4.134 5.97 5.97 0 00-3.988 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.013 6.013 0 005.734-4.174 5.97 5.97 0 003.982-2.9 6.046 6.046 0 00-.694-7.105zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.896zm16.597 3.868l-5.843-3.37 2.02-1.167a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.402-.681zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.24V6.908a.08.08 0 01.032-.062l4.84-2.794a4.5 4.5 0 016.675 4.668zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08-4.778 2.758a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
    </svg>
  ),
  Gemini: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <defs>
        <linearGradient id="gemGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4285F4"/>
          <stop offset="100%" stopColor="#8B5CF6"/>
        </linearGradient>
      </defs>
      <path fill="url(#gemGrad)" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 19l-6.2 4.3 2.4-7.4L2 11.4h7.6L12 4z"/>
    </svg>
  ),
  ClaudeAI: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <circle cx="12" cy="12" r="10" fill="#D97757"/>
      <path fill="#fff" d="M8 8h8v2H8zm0 4h6v2H8zm0 4h4v2H8z" opacity=".9"/>
    </svg>
  ),
  CursorAI: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#6366F1" d="M4 4l16 8-16 8V4z"/>
      <path fill="#818CF8" d="M13 12l3 7-3-7z" opacity=".6"/>
    </svg>
  ),
  GitHubCopilot: () => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path fill="#181616" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 1.5c4.69 0 8.5 3.81 8.5 8.5 0 4.69-3.81 8.5-8.5 8.5-4.69 0-8.5-3.81-8.5-8.5 0-4.69 3.81-8.5 8.5-8.5z"/>
      <path fill="#6E40C9" d="M9 10c0-1.66 1.34-3 3-3s3 1.34 3 3v2c0 .55-.22 1.05-.59 1.41L16 15l-1.41 1.41-1.18-1.18C12.96 15.4 12.49 15.5 12 15.5s-.96-.1-1.41-.27L9.41 16.41 8 15l1.59-1.59C9.22 13.05 9 12.55 9 12v-2z"/>
    </svg>
  ),
};

const Skills = ({ darkMode }) => {

  const skillCategories = [
    {
      category: 'Programming Languages',
      icon: '💻',
      color: 'from-orange-500 to-amber-500',
      accent: '#f97316, #f59e0b',
      skills: [
        { name: 'Java',       level: 80, Icon: Icons.Java },
        { name: 'C',          level: 70, Icon: Icons.C },
        { name: 'JavaScript', level: 85, Icon: Icons.JavaScript },
        { name: 'SQL',        level: 78, Icon: Icons.SQL },
        { name: 'HTML5',      level: 90, Icon: Icons.HTML5 },
        { name: 'CSS3',       level: 88, Icon: Icons.CSS3 },
        { name: 'PHP',        level: 72, Icon: Icons.PHP },
        { name: 'Python',     level: 75, Icon: Icons.Python },
      ],
    },
    {
      category: 'Web Development',
      icon: '🌐',
      color: 'from-cyan-500 to-blue-500',
      accent: '#06b6d4, #3b82f6',
      skills: [
        { name: 'React.js',          level: 82, Icon: Icons.React },
        { name: 'Tailwind CSS',      level: 88, Icon: Icons.Tailwind },
        { name: 'Responsive Design', level: 85, Icon: Icons.ResponsiveDesign },
        { name: 'REST API',          level: 75, Icon: Icons.RESTAPI },
      ],
    },
    {
      category: 'Mobile Development',
      icon: '📱',
      color: 'from-green-500 to-emerald-500',
      accent: '#22c55e, #10b981',
      skills: [
        { name: 'Android Studio',      level: 80, Icon: Icons.AndroidStudio },
        { name: 'Java (Android)',       level: 78, Icon: Icons.Java },
        { name: 'XML',                  level: 75, Icon: Icons.XML },
        { name: 'RecyclerView',         level: 72, Icon: Icons.RecyclerView },
        { name: 'Firebase Integration', level: 76, Icon: Icons.Firebase },
      ],
    },
    {
      category: 'Database & Backend',
      icon: '🗄️',
      color: 'from-yellow-500 to-orange-500',
      accent: '#eab308, #f97316',
      skills: [
        { name: 'MySQL',             level: 80, Icon: Icons.MySQL },
        { name: 'Firebase Auth',     level: 78, Icon: Icons.Firebase },
        { name: 'Firestore',         level: 75, Icon: Icons.Firebase },
        { name: 'Realtime Database', level: 73, Icon: Icons.Firebase },
        { name: 'PHP (Backend)',     level: 70, Icon: Icons.PHP },
      ],
    },
    {
      category: 'Data Analytics',
      icon: '📊',
      color: 'from-purple-500 to-pink-500',
      accent: '#a855f7, #ec4899',
      skills: [
        { name: 'Pandas',        level: 75, Icon: Icons.Pandas },
        { name: 'NumPy',         level: 72, Icon: Icons.NumPy },
        { name: 'SQL Analysis',  level: 78, Icon: Icons.SQLAnalysis },
        { name: 'Power BI',      level: 70, Icon: Icons.PowerBI },
        { name: 'Data Cleaning', level: 76, Icon: Icons.DataCleaning },
        { name: 'EDA',           level: 73, Icon: Icons.EDA },
      ],
    },
    {
      category: 'Tools & Technologies',
      icon: '🛠️',
      color: 'from-teal-500 to-cyan-500',
      accent: '#14b8a6, #06b6d4',
      skills: [
        { name: 'Git',              level: 85, Icon: Icons.Git },
        { name: 'GitHub',           level: 83, Icon: Icons.GitHub },
        { name: 'VS Code',          level: 90, Icon: Icons.VSCode },
        { name: 'Android Emulator', level: 78, Icon: Icons.AndroidEmulator },
        { name: 'Cloudinary',       level: 70, Icon: Icons.Cloudinary },
        { name: 'Vite',             level: 75, Icon: Icons.Vite },
      ],
    },
    {
      category: 'Software Testing & QA',
      icon: '🧪',
      color: 'from-red-500 to-rose-500',
      accent: '#ef4444, #f43f5e',
      skills: [
        { name: 'Manual Testing',        level: 80, Icon: Icons.ManualTesting },
        { name: 'Functional Testing',    level: 78, Icon: Icons.FunctionalTesting },
        { name: 'UI Testing',            level: 76, Icon: Icons.UITesting },
        { name: 'Test Case Design',      level: 75, Icon: Icons.TestCaseDesign },
        { name: 'Bug Reporting',         level: 80, Icon: Icons.BugReporting },
        { name: 'Debugging',             level: 78, Icon: Icons.Debugging },
        { name: 'SDLC Fundamentals',     level: 72, Icon: Icons.SDLC },
        { name: 'Validation Testing',    level: 74, Icon: Icons.ValidationTesting },
        { name: 'Selenium IDE (Basic)',  level: 55, Icon: Icons.Selenium },
        { name: 'Apache JMeter (Basic)', level: 50, Icon: Icons.JMeter },
      ],
    },
    {
      category: 'AI-Assisted Dev Tools',
      icon: '🤖',
      color: 'from-indigo-500 to-violet-500',
      accent: '#6366f1, #8b5cf6',
      skills: [
        { name: 'ChatGPT',                   level: 88, Icon: Icons.ChatGPT },
        { name: 'Google Gemini',             level: 82, Icon: Icons.Gemini },
        { name: 'Claude AI',                 level: 85, Icon: Icons.ClaudeAI },
        { name: 'Cursor AI',                 level: 78, Icon: Icons.CursorAI },
        { name: 'GitHub Copilot (Learning)', level: 60, Icon: Icons.GitHubCopilot },
      ],
    },
  ];

  return (
    <section
      id="skills"
      style={{ backgroundColor: darkMode ? "#111827" : "#f9fafb" }}
      className="py-14 relative overflow-hidden"
    >
      <div className="container px-5 py-14 mx-auto">

        <div className="text-center mb-20" data-aos="fade-up">
          <h1 className="sm:text-4xl text-3xl font-bold mb-4" style={{ color: darkMode ? "white" : "#1f2937" }}>
            My{" "}
            <span style={{ background: "linear-gradient(to right, #f97316, #f59e0b)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
              Skills
            </span>
          </h1>
          <p className="text-lg max-w-2xl mx-auto leading-relaxed" style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}>
            A comprehensive overview of my technical skills and the technologies I work with.
          </p>
        </div>

        {skillCategories.map((cat, catIndex) => (
          <div key={catIndex} className="mb-16" data-aos="fade-up" data-aos-delay={`${catIndex * 50}`}>

            <div className="flex items-center gap-3 mb-8">
              <span className="text-2xl">{cat.icon}</span>
              <h2 className="text-2xl font-bold" style={{ color: darkMode ? "white" : "#1f2937" }}>
                {cat.category}
              </h2>
              <div className="flex-1 h-px ml-2" style={{ background: `linear-gradient(to right, ${cat.accent}, transparent)` }} />
            </div>

            <div className="flex flex-wrap -m-4">
              {cat.skills.map((skill, skillIndex) => (
                <div
                  key={skillIndex}
                  className="p-4 lg:w-1/4 md:w-1/2 w-full"
                  data-aos="fade-up"
                  data-aos-delay={`${100 + skillIndex * 80}`}
                >
                  <div
                    style={{
                      background: darkMode
                        ? "linear-gradient(to bottom right, #1f2937, #111827)"
                        : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                      borderColor: darkMode ? "#374151" : "#e5e7eb",
                    }}
                    className="h-full p-6 rounded-2xl border hover:border-orange-500/50
                               transition-all duration-300 hover:-translate-y-2 group
                               hover:shadow-[0_0_30px_rgba(255,165,0,0.15)]"
                  >
                    <div className="flex items-center mb-6">
                      <div
                        style={{
                          background: darkMode
                            ? "linear-gradient(to bottom right, #374151, #1f2937)"
                            : "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
                        }}
                        className="w-16 h-16 rounded-xl p-3 flex items-center justify-center
                                   group-hover:scale-110 transition-transform duration-300 shrink-0"
                      >
                        <skill.Icon />
                      </div>
                      <h3 className="text-lg font-bold ml-4 leading-tight" style={{ color: darkMode ? "white" : "#1f2937" }}>
                        {skill.name}
                      </h3>
                    </div>

                    <div className="mb-2 flex justify-between items-center">
                      <span className="font-medium text-sm" style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}>Proficiency</span>
                      <span className="font-bold text-sm" style={{ background: `linear-gradient(to right, ${cat.accent})`, WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}>
                        {skill.level}%
                      </span>
                    </div>

                    <div className="w-full rounded-full h-3 overflow-hidden" style={{ backgroundColor: darkMode ? '#374151' : '#e5e7eb' }}>
                      <div className={`h-full rounded-full bg-gradient-to-r ${cat.color} transition-all duration-1000 ease-out`} style={{ width: `${skill.level}%` }} />
                    </div>

                    <div className={`mt-6 pt-4 border-t ${darkMode ? "border-gray-700" : "border-gray-300"}`}>
                      <div className="h-1 rounded-full opacity-70 group-hover:w-full transition-all duration-500 w-1/3"
                        style={{ background: `linear-gradient(to right, ${cat.accent})` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
};

export default Skills;