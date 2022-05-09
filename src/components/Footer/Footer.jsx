import React from 'react'

const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-transparent text-slate-300 border-t-2 rounded mt-24">
      <div>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://www.linkedin.com/in/julian-martinez-dev/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-linkedin"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>
          <a href="https://github.com/julianmartinez-dev" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>
          <a href="https://wa.me/543564333998" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-whatsapp"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#ffffff"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
            </svg>
          </a>
        </div>
      </div>
      <div>
        <p>Copyright © 2022 - Julian Martinez</p>
        <p>Proyecto Final React Coder House</p>
      </div>
    </footer>
  );
}

export default Footer