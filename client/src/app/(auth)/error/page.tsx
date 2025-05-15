import React from 'react';
import Link from 'next/link';

const page = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ef 100%)',
      }}
    >
      <div
        style={{
          background: 'white',
          borderRadius: '1.5rem',
          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          padding: '3rem 2.5rem',
          maxWidth: 420,
          textAlign: 'center',
        }}
      >
        <div style={{ fontSize: 80, color: '#2f80ed', marginBottom: 16 }}>😕</div>
        <h1 style={{ fontSize: 32, fontWeight: 800, margin: '0 0 0.5rem 0', color: '#2f80ed' }}>
          Oops! Page Not Found
        </h1>
        <p style={{ color: '#64748b', marginBottom: 24 }}>
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
        <Link href="/">
          <button
            style={{
              background: 'linear-gradient(90deg,#2f80ed,#56ccf2)',
              color: 'white',
              border: 'none',
              borderRadius: 8,
              padding: '0.75rem 2.5rem',
              fontWeight: 600,
              fontSize: 18,
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(47,128,237,0.10)',
              transition: 'background 0.2s',
            }}
          >
            Go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;