'use client';

import React, { useState } from 'react';

type GivingMethod = 'mtn' | 'airtel' | 'bank';

const Giving = () => {
  const [activeMethod, setActiveMethod] = useState<GivingMethod | null>(null);
  const [copiedField, setCopiedField] = useState<string>('');

  const copyValue = async (value: string, key: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopiedField(key);
      setTimeout(() => setCopiedField(''), 1400);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = value;
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
      setCopiedField(key);
      setTimeout(() => setCopiedField(''), 1400);
    }
  };

  const ValueRow = ({
    label,
    value,
    copyKey,
  }: {
    label: string;
    value: string;
    copyKey?: string;
  }) => (
    <div className="flex items-center justify-between gap-3 py-2">
      <p className="text-sm text-neutral-700">
        <span className="font-semibold">{label}:</span> {value}
      </p>
      {copyKey ? (
        <button
          type="button"
          className="shrink-0 rounded-md border border-black/15 p-2 hover:bg-black hover:text-white"
          onClick={() => copyValue(value, copyKey)}
          aria-label={`Copy ${label}`}
          title={`Copy ${label}`}
        >
          <span aria-hidden="true" className="text-sm leading-none">
            {copiedField === copyKey ? '✓' : '⧉'}
          </span>
        </button>
      ) : null}
    </div>
  );

  return (
    <section id="giving" className="py-24 bg-neutral-50">
      <div className="mx-auto max-w-2xl px-5">
        <div id="giving-options" className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-2">Partner With Us</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6 tracking-tight">
            Giving, Tithes & Offerings
          </h2>
          <p className="text-neutral-600 leading-relaxed">
            Your generosity helps us reach more people with the Gospel, care for those in need,
            and continue the work of ministry here at Entebbe Miracle Center Church.
          </p>
        </div>

        <div className="space-y-4">
          <section className="bg-white rounded-2xl border border-black/10 shadow-[0_25px_65px_-45px_rgba(0,0,0,0.65)]">
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              onClick={() => setActiveMethod(activeMethod === 'mtn' ? null : 'mtn')}
              aria-expanded={activeMethod === 'mtn'}
              aria-controls="giving-mtn-panel"
            >
              <span className="text-2xl leading-none">
                {activeMethod === 'mtn' ? '−' : '+'}
              </span>
              <h3 className="text-xl font-semibold text-black flex-1">MTN Mobile Money</h3>
            </button>
            {activeMethod === 'mtn' && (
              <div id="giving-mtn-panel" className="px-5 pb-5">
                <div className="space-y-1 border-t border-black/10 pt-3">
                  <ValueRow
                    label="Merchant Code"
                    value="665390 (Entebbe Miracle Center)"
                    copyKey="merchant"
                  />
                </div>
                <ol className="mt-4 space-y-2 text-sm text-neutral-700 list-decimal pl-5">
                  <li>Dial <span className="font-semibold">*</span>165<span className="font-semibold">#</span> on your MTN line.</li>
                  <li>Select <span className="font-semibold">Pay with MoMo</span>.</li>
                  <li>Enter merchant code <span className="font-semibold">665390</span>.</li>
                  <li>Enter the amount you want to give.</li>
                  <li>Confirm the name shown is <span className="font-semibold">Entebbe Miracle Center</span>.</li>
                  <li>Enter your PIN to complete payment.</li>
                </ol>
              </div>
            )}
          </section>

          <section className="bg-white rounded-2xl border border-black/10 shadow-[0_25px_65px_-45px_rgba(0,0,0,0.65)]">
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              onClick={() => setActiveMethod(activeMethod === 'airtel' ? null : 'airtel')}
              aria-expanded={activeMethod === 'airtel'}
              aria-controls="giving-airtel-panel"
            >
              <span className="text-2xl leading-none">
                {activeMethod === 'airtel' ? '−' : '+'}
              </span>
              <h3 className="text-xl font-semibold text-black flex-1">Airtel Money</h3>
            </button>
            {activeMethod === 'airtel' && (
              <div id="giving-airtel-panel" className="px-5 pb-5">
                <div className="space-y-1 border-t border-black/10 pt-3">
                  <ValueRow label="Airtel Number" value="0708086247" copyKey="airtel" />
                </div>
                <ol className="mt-4 space-y-2 text-sm text-neutral-700 list-decimal pl-5">
                  <li>Dial <span className="font-semibold">*</span>185<span className="font-semibold">#</span> on your Airtel line.</li>
                  <li>Select <span className="font-semibold">Send Money</span>.</li>
                  <li>Choose <span className="font-semibold">To Airtel Number</span>.</li>
                  <li>Enter recipient number <span className="font-semibold">0708086247</span>.</li>
                  <li>Enter the amount you want to give.</li>
                  <li>Confirm it reads <span className="font-semibold">Entebbe Miracle Center</span>.</li>
                  <li>Enter your PIN to complete payment.</li>
                </ol>
              </div>
            )}
          </section>

          <section className="bg-white rounded-2xl border border-black/10 shadow-[0_25px_65px_-45px_rgba(0,0,0,0.65)]">
            <button
              type="button"
              className="w-full flex items-center justify-between gap-4 p-5 text-left"
              onClick={() => setActiveMethod(activeMethod === 'bank' ? null : 'bank')}
              aria-expanded={activeMethod === 'bank'}
              aria-controls="giving-bank-panel"
            >
              <span className="text-2xl leading-none">
                {activeMethod === 'bank' ? '−' : '+'}
              </span>
              <h3 className="text-xl font-semibold text-black flex-1">Stanbic Bank</h3>
            </button>
            {activeMethod === 'bank' && (
              <div id="giving-bank-panel" className="px-5 pb-5">
                <div className="space-y-0 border-t border-black/10 pt-2">
                  <p className="text-sm text-neutral-600 py-1">
                    To give, deposit your offering to the account below.
                  </p>
                  <div className="flex items-center justify-between gap-3 py-1">
                    <p className="text-sm text-neutral-700">
                      <span className="font-semibold">Bank:</span> Stanbic Bank Uganda
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-0.5">
                    <p className="text-sm text-neutral-700">
                      <span className="font-semibold">Account Number:</span> 9030005915103
                    </p>
                    <button
                      type="button"
                      className="shrink-0 rounded-md border border-black/15 p-2 hover:bg-black hover:text-white"
                      onClick={() => copyValue('9030005915103', 'account')}
                      aria-label="Copy Account Number"
                      title="Copy Account Number"
                    >
                      <span aria-hidden="true" className="text-sm leading-none">
                        {copiedField === 'account' ? '✓' : '⧉'}
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center justify-between gap-3 py-0.5">
                    <p className="text-sm text-neutral-700">
                      <span className="font-semibold">Account Name:</span> Entebbe Miracle Center Church
                    </p>
                  </div>
                </div>
              </div>
            )}
          </section>
        </div>
      </div>
    </section>
  );
};

export default Giving;
