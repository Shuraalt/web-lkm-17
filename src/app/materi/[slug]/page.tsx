"use client";
import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { ChevronLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { DATA_MATERI } from '@/lib/materi';

export default function DetailMateriPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  let materiFound = null;
  let namaPertemuan = "";

  for (const [pertemuan, daftarMateri] of Object.entries(DATA_MATERI)) {
    const found = daftarMateri.find((m) => {
      const currentSlug = m.title
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '');
      return currentSlug === slug;
    });

    if (found) {
      materiFound = found;
      namaPertemuan = pertemuan;
      break;
    }
  }

  if (!materiFound) return null;

  const montserratStyle = { fontFamily: 'var(--font-montserrat), sans-serif' };

  return (
    <main className="min-h-screen bg-[#f4f7ed] flex flex-col text-slate-900" style={montserratStyle}>
      
      {/* 1. NAVIGATION BAR */}
      <nav className="fixed top-0 w-full z-50 bg-[#f4f7ed]/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <button 
            onClick={() => router.back()}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-all font-bold text-sm"
            style={montserratStyle}
          >
            <ChevronLeft size={20} />
            Kembali
          </button>
        </div>
      </nav>

      {/* 2. KONTEN UTAMA */}
      <div className="grow max-w-4xl mx-auto px-6 pt-32 pb-20 w-full">
        <div className="mb-6">
          <span className="bg-[#e4d5b2] text-[#1a3a4a] px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider" style={montserratStyle}>
            {namaPertemuan}
          </span>
        </div>

        <p className="text-slate-500 text-sm mb-3" style={montserratStyle}>{materiFound.tanggal}</p>
        <h1 className="text-3xl md:text-5xl font-bold mb-4" style={montserratStyle}>{materiFound.title}</h1>
        <p className="text-slate-700 text-lg font-semibold mb-10" style={montserratStyle}>Pemateri: {materiFound.pemateri}</p>

        <div className="w-full h-px bg-slate-300 mb-12 opacity-60" />

        {/* ISI MATERI */}
        <article className="text-slate-900 leading-relaxed" style={montserratStyle}>
          <ReactMarkdown 
            remarkPlugins={[remarkGfm]}
            components={{
              h3: ({ ...props }) => <h3 className="text-2xl font-bold mt-8 mb-4 text-[#1a3a4a]" style={montserratStyle} {...props} />,
              p: ({ ...props }) => <p className="mb-4 text-slate-800 text-justify" style={montserratStyle} {...props} />,
              ul: ({ ...props }) => <ul className="list-disc ml-6 mb-6 space-y-2 text-slate-800" style={montserratStyle} {...props} />,
              ol: ({ ...props }) => <ol className="list-decimal ml-6 mb-6 space-y-2 text-slate-800" style={montserratStyle} {...props} />,
              li: ({ ...props }) => <li className="pl-1" style={montserratStyle} {...props} />,
              strong: ({ ...props }) => <strong className="font-bold text-slate-950" style={montserratStyle} {...props} />,
            }}
          >
            {materiFound.isi}
          </ReactMarkdown>
        </article>
      </div>

      {/* 3. FOOTER */}
      <footer className="bg-[#1a3a4a] py-12 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex items-center justify-center text-[#e4d5b2] italic opacity-85">
              <span className="text-3xl font-black mr-3" style={montserratStyle}>#1</span>
              <div className="text-[10px] font-bold uppercase tracking-tighter" style={montserratStyle}>IDEOLOGI<br/>SOLIDARITAS</div>
            </div>
          ))}
        </div>
      </footer>
    </main>
  );
}