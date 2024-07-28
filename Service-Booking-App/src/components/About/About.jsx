import React from 'react';

function About() {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 mb-6">
          We are <span className="font-semibold text-blue-600">Salon Swipe</span>, your go-to platform for discovering and booking appointments with top-notch salons and stylists. Our mission is to connect you with the best in the beauty industry, making it easy for you to look and feel your best.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Story</h2>
        <p className="text-base text-gray-600 mb-6">
          Founded with the vision of transforming the beauty service experience, Salon Swipe started with a simple idea: to create a seamless, user-friendly way to find and book salon services. Our team is passionate about beauty and dedicated to providing an exceptional service that meets your needs.
        </p>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">What We Offer</h2>
        <ul className="list-disc list-inside text-base text-gray-600 mb-6">
          <li>Easy appointment booking with top salons.</li>
          <li>Personalized recommendations based on your preferences.</li>
          <li>Access to exclusive deals and offers.</li>
          <li>High-quality customer support for all your needs.</li>
        </ul>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <p className="text-base text-gray-600 mb-6">
          Have questions or feedback? Reach out to us at <a href="mailto:support@salonswipe.com" className="text-blue-600 hover:text-blue-800">support@salonswipe.com</a>. We’d love to hear from you!
        </p>
      </div>
    </div>
  );
}

export default About;
