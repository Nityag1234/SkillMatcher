import { useState } from 'react';
import React from 'react';
export function Dialog({ children, open, onClose }) {
  return (
    open && (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <div className="bg-white rounded shadow-lg p-4 w-full max-w-md">
          {children}
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-black font-bold"
          >
            &times;
          </button>
        </div>
      </div>
    )
  );
}

export function DialogTrigger({ children, onClick }) {
  return (
    <button onClick={onClick} className="text-blue-500 underline">
      {children}
    </button>
  );
}

export function DialogContent({ children }) {
  return <div className="mt-4">{children}</div>;
}

export function DialogHeader({ children }) {
  return <div className="text-lg font-semibold">{children}</div>;
}

export function DialogTitle({ children }) {
  return <h2 className="text-xl font-bold mb-2">{children}</h2>;
}
