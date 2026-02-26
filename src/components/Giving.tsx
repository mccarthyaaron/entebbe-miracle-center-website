'use client';

import React from 'react';
import Button from './Button';

const Giving = () => {
  return (
    <section id="giving" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h3 className="text-accent font-bold uppercase tracking-wider mb-2">Partner With Us</h3>
          <h2 className="text-4xl font-serif font-bold text-primary mb-6">
            Giving, Tithes & Offerings
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Your generosity helps us reach more people with the Gospel, care for those in need,
            and continue the work of ministry here at Entebbe Miracle Center.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-accent">
            <h3 className="text-xl font-serif font-bold text-primary mb-3">Bank Transfer</h3>
            <p className="text-gray-600 text-sm mb-2">
              Use the details below to give your tithe, offerings, or special seeds.
            </p>
            <ul className="text-gray-700 text-sm space-y-1 mt-3">
              <li><span className="font-semibold">Bank:</span> Your Bank Name</li>
              <li><span className="font-semibold">Account Name:</span> Entebbe Miracle Center</li>
              <li><span className="font-semibold">Account Number:</span> 0000 0000 0000</li>
              <li><span className="font-semibold">Swift Code:</span> XXXXUGXX</li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">
              ...(Replace these details with your actual church account information)...
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-accent">
            <h3 className="text-xl font-serif font-bold text-primary mb-3">Mobile Money</h3>
            <p className="text-gray-600 text-sm mb-2">
              Give conveniently using MTN or Airtel Mobile Money.
            </p>
            <ul className="text-gray-700 text-sm space-y-1 mt-3">
              <li><span className="font-semibold">MTN:</span> +256 7XX XXX XXX</li>
              <li><span className="font-semibold">Airtel:</span> +256 7XX XXX XXX</li>
            </ul>
            <p className="text-xs text-gray-400 mt-3">
              ...(Update these numbers with your official giving lines)...
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-accent">
            <h3 className="text-xl font-serif font-bold text-primary mb-3">In-Person Giving</h3>
            <p className="text-gray-600 text-sm mb-3">
              You can also give during any of our services at church.
            </p>
            <p className="text-gray-600 text-sm">
              Visit our information desk for envelopes, partnership forms, or to speak with a
              pastor about special projects and pledges.
            </p>
          </div>
        </div>

        <div className="text-center">
          <Button
            variant="primary"
            className="px-10"
            onClick={() => {
              window.location.href = 'mailto:....'; // Feed in the email address of the church or personal email for the Need Help With Giving to link to
            }}
          >
            Need Help With Giving?
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Giving;
