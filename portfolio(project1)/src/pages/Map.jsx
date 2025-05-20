import React from 'react';

const Map = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f2f3f5] p-4">
      <h2 className="mb-4 text-xl font-semibold text-gray-700">
        Mahip Mahal, Mumbai, Maharashtra, India
      </h2>
      <div className="w-full max-w-5xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5008.6104794685225!2d72.82527328207671!3d18.91731181522093!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7d1fcdae81375%3A0x58c24de68720510a!2sMahip%20Mahal!5e0!3m2!1sen!2sin!4v1747728623845!5m2!1sen!2sin"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
