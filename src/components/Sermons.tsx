import React from 'react';

const YOUTUBE_LIVE_PLAYLIST_ID = 'UULVMrhAQgM98zog0t8WWCJWgQ';
const YOUTUBE_CHANNEL_URL = 'https://www.youtube.com/@AaronMutebiMinistries';
const TIKTOK_URL = 'https://www.tiktok.com/@aaronmutebiministries';
const FACEBOOK_LINKS = [
  {
    label: 'Facebook Page',
    href: 'https://www.facebook.com/aaron.mutebi.5',
  },
];

const Sermons = () => {
  return (
    <section id="sermons" className="py-24 bg-white">
      <div className="mx-auto max-w-6xl px-5">
        <div className="text-center mb-16">
          <p className="text-xs font-mono uppercase tracking-[0.22em] text-neutral-500 mb-2">Sermons</p>
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-6 tracking-tight">Watch our Sermons</h2>
          <p className="text-neutral-600 max-w-2xl mx-auto leading-relaxed">
            Listen to the Word and stay connected with the sermons and teachings of Entebbe Miracle Center Church.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-2xl border border-black/10 overflow-hidden shadow-[0_25px_65px_-45px_rgba(0,0,0,0.65)] bg-black">
            <div className="relative w-full pt-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed?listType=playlist&list=${YOUTUBE_LIVE_PLAYLIST_ID}&autoplay=0&modestbranding=1&rel=0`}
                title="Entebbe Miracle Center Church Most Recent Sermon"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
          </div>

          <aside className="rounded-2xl border border-black/10 bg-gradient-to-b from-neutral-50 to-white p-6 shadow-[0_25px_65px_-45px_rgba(0,0,0,0.65)]">
            <h3 className="text-lg font-semibold text-black mb-2 tracking-tight">Watch More</h3>
            <p className="text-sm text-neutral-600 mb-5">
              Tap a channel below for more sermons and church updates.
            </p>
            <div className="space-y-3">
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-red-200 bg-gradient-to-r from-red-50 to-red-100 px-4 py-3 text-sm font-semibold text-red-900 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-white">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.6 12 3.6 12 3.6s-7.6 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.5 9.4.5 9.4.5s7.6 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.8 15.6V8.4l6.3 3.6-6.3 3.6Z" />
                  </svg>
                </span>
                <span className="flex-1">YouTube Channel</span>
                <span className="opacity-70 group-hover:opacity-100">→</span>
              </a>
              <a
                href={TIKTOK_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-neutral-300 bg-gradient-to-r from-neutral-50 to-neutral-100 px-4 py-3 text-sm font-semibold text-neutral-900 hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-black text-white">
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                    <path d="M19.6 8.9a6.8 6.8 0 0 1-3.9-1.3v6.5a5.3 5.3 0 1 1-4.6-5.2v2.8a2.5 2.5 0 1 0 1.8 2.4V2.4h2.7a4 4 0 0 0 .1.6c.4 1.9 1.5 3.4 3 4.3.3.2.6.3.9.5v3.1Z" />
                  </svg>
                </span>
                <span className="flex-1">TikTok</span>
                <span className="opacity-70 group-hover:opacity-100">→</span>
              </a>
              {FACEBOOK_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-xl border border-blue-200 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-3 text-sm font-semibold text-blue-900 hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
                      <path d="M24 12a12 12 0 1 0-13.9 11.9v-8.4H7.1V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.4l-.5 3.5h-2.9v8.4A12 12 0 0 0 24 12Z" />
                    </svg>
                  </span>
                  <span className="flex-1">{link.label}</span>
                  <span className="opacity-70 group-hover:opacity-100">→</span>
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Sermons;
