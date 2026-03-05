import { notFound } from 'next/navigation';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';

const MINISTRY_PAGES = {
  'women-ministry': {
    title: 'Women Ministry',
    description: 'This page is a placeholder for Women Ministry details.',
  },
  'men-ministry': {
    title: 'Men Ministry',
    description: 'This page is a placeholder for Men Ministry details.',
  },
  'music-ministry': {
    title: 'Music Ministry',
    description: 'This page is a placeholder for Music Ministry details.',
  },
  'children-ministry': {
    title: 'Children Ministry',
    description: 'This page is a placeholder for Children Ministry details.',
  },
  'youth-ministry': {
    title: 'Youth Ministry',
    description: 'This page is a placeholder for Youth Ministry details.',
  },
} as const;

type MinistrySlug = keyof typeof MINISTRY_PAGES;

export function generateStaticParams() {
  return Object.keys(MINISTRY_PAGES).map((ministry) => ({ ministry }));
}

export default async function MinistryPage({
  params,
}: {
  params: Promise<{ ministry: string }>;
}) {
  const { ministry } = await params;
  const page = MINISTRY_PAGES[ministry as MinistrySlug];

  if (!page) {
    notFound();
  }

  return (
    <div className="font-sans text-neutral-900 bg-transparent min-h-screen flex flex-col">
      <Navbar />
      <main className="pt-28 pb-20 px-5 flex-1">
        <div className="mx-auto max-w-4xl">
          <p className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-2">Ministry</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black mb-4">{page.title}</h1>
          <p className="text-neutral-700">{page.description}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
