import React, { useEffect, useState } from 'react';

const LoginModal = ({ show, onClose }) => {
     const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (show) {
      setVisible(true); // Mount and start animation
      document.body.style.overflow = "hidden"; // lock scroll
    } else {
      // Wait for animation before unmount
      const timeout = setTimeout(() => setVisible(false), 300);
      document.body.style.overflow = "auto"; // unlock scroll

      return () => clearTimeout(timeout);
    }
  }, [show]);

  if (!visible) return null;
    return (
       <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-opacity duration-1000 ease-in-out  ${
        show ? " pointer-events-auto scale-100" : " pointer-events-none scale-0"
      }`}
      onClick={onClose}
    >
      <div
        className={`bg-white p-6 rounded-lg shadow-lg w-full max-w-md text-center transform transition-transform duration-300 ${
          show ? "scale-100" : "scale-95"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent modal close on modal click
      >
        <h2 className="text-xl font-bold mb-2">লগইন করুন</h2>
        <p className="text-gray-600 mb-4">
          আরও পোষ্ট দেখতে লগইন বা রেজিস্টার করুন।
        </p>
        <div className="flex justify-center gap-4">
          <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">
            লগইন
          </a>
          <a
            href="/register"
            className="bg-gray-200 text-gray-700 px-4 py-2 rounded"
          >
            রেজিস্টার
          </a>
        </div>
      </div>
    </div>
    );
};

export default LoginModal;