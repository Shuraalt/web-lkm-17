"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { DATA_MATERI, DATA_ANGGOTA, DATA_GALERI } from '@/lib/materi';
import { Montserrat } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

export default function LKMPage() {
  const [activeTab, setActiveTab] = useState('Pertemuan-1');
  const [activeSection, setActiveSection] = useState('beranda');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const options = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <main className={`${montserrat.className} min-h-screen w-full bg-[#f4f7ed] text-slate-900 scroll-smooth`}>
      {/* 1. NAVBAR */}
      <nav 
        suppressHydrationWarning
        className="fixed top-0 w-full z-50 bg-[#f4f7ed]/80 backdrop-blur-md border-b border-slate-200"
      >
        <div className="flex justify-center space-x-8 py-4 text-sm font-semibold text-slate-500">
          <a 
            href="#beranda" 
            className={`transition-all duration-300 ${activeSection === 'beranda' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
          >
            Beranda
          </a>
          <a 
            href="#materi" 
            className={`transition-all duration-300 ${activeSection === 'materi' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
          >
            Materi
          </a>
          <a 
            href="#anggota" 
            className={`transition-all duration-300 ${activeSection === 'anggota' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
          >
            Anggota
          </a>
          <a 
            href="#galeri" 
            className={`transition-all duration-300 ${activeSection === 'galeri' ? 'text-slate-900 border-b-2 border-slate-900' : 'hover:text-slate-900'}`}
          >
            Galeri
          </a>
        </div>
      </nav>

      <div className="relative">
  
        {/* 2. HERO SECTION */}
       <section id="beranda" className="relative h-[85vh] flex flex-col items-center overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 z-0">
            <Image src="/bg_hijau.png" alt="Landscape" fill priority className="object-cover" />
          </div>

          {/* KONTEN TEKS */}
          <div className="relative z-30 text-center px-4 pt-32 flex flex-col items-center">
            <div className="bg-white p-3 rounded-full w-fit mx-auto mb-8 shadow-md">
              <Image src="/Logo LKM IF2.png" width={40} height={40} alt="Logo" />
            </div>
            
            {/* Judul */}
            <h1 className="text-3xl md:text-[2.75rem] font-bold uppercase tracking-[0.15em] mb-4 text-[#1a1a1a]">
              LKM INFORMATIKA 25
            </h1>

            {/* Deskripsi */}
            <p className="text-slate-700 text-sm md:text-base font-medium tracking-tight mb-1">
              Manifestasi Kepemimpinan Informatika Melalui Kolaborasi Digital.
            </p>

            {/* Slogan */}
            <p className="text-slate-800 text-sm md:text-base  font-medium">
              &ldquo;Erat Persatuan, Kokoh Pembaharuan.&rdquo;
            </p>
          </div>

          {/* CONTAINER AVATAR */}
          <div className="absolute bottom-0 left-0 right-0 z-20 flex items-end justify-center gap-x-6 md:gap-x-20 px-4">
            <div className="relative h-62.5 md:h-105 w-36 md:w-64 shrink-0 translate-y-2">
              <Image 
                src="/char1.png" 
                alt="Karakter 1" 
                fill 
                className="object-contain object-bottom" 
              />
            </div>

            <div className="relative h-62.5 md:h-105 w-36 md:w-64 shrink-0 translate-y-2">
              <Image 
                src="/char2.png" 
                alt="Karakter 2" 
                fill 
                className="object-contain object-bottom" 
              />
            </div>
          </div>
        </section>

        {/* 3. INFO BAR */}
        <div className="relative z-30 bg-[#1a3a4a] py-8 border-t border-white/10">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 px-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="flex items-center justify-center text-[#e4d5b2] italic">
                <span className="text-3xl md:text-5xl font-bold mr-3">#1</span>
                <div className="text-[10px] md:text-xs font-bold leading-tight uppercase">IDEOLOGI<br/>SOLIDARITAS</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. MATERI SECTION */}
      <section id="materi" className="py-20 px-4 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-8">Materi</h2>
        <div className="flex justify-center space-x-2 mb-12">
          {Object.keys(DATA_MATERI).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-2 rounded-full border text-sm font-medium transition ${
                activeTab === tab ? 'bg-green-800 text-white border-green-800' : 'bg-white border-slate-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-6">
          {DATA_MATERI[activeTab as keyof typeof DATA_MATERI].map((item, index) => (
            <div key={index} className="w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-100">
              <CardMateri 
                title={item.title} 
                pemateri={item.pemateri} 
                tanggal={item.tanggal}
              />
            </div>
          ))}
        </div>
      </section>

      {/* 5. ANGGOTA SECTION */}
      <section id="anggota" className="py-20 bg-[#f4f7ed]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Anggota</h2>
          <p className="text-sm text-slate-500 mb-12">Yuk, kenalan dengan anggota kelompok 17!</p>
          
          <div className="relative">
            <Swiper
              modules={[Navigation]}
              spaceBetween={24}
              slidesPerView={1}
              loop={true}
              navigation={{
                nextEl: '.button-next',
                prevEl: '.button-prev',
              }}
              breakpoints={{
                640: { slidesPerView: 2 }, 
                1024: { slidesPerView: 4 }, 
              }}
              className="mySwiper"
            >
              {DATA_ANGGOTA.map((member, index) => (
                <SwiperSlide key={index}>
                  <CardAnggota name={member.name} npm={member.npm} img={member.img} />
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-center gap-4 mt-12">
              <button className="button-prev p-3 rounded-full border border-slate-300 bg-white hover:bg-slate-100 shadow-sm transition-all">
                <ChevronLeft size={20} className="text-slate-700" />
              </button>
              <button className="button-next p-3 rounded-full border border-slate-300 bg-white hover:bg-slate-100 shadow-sm transition-all">
                <ChevronRight size={20} className="text-slate-700" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 6. GALERI SECTION */}
      <section id="galeri" className="py-20 bg-[#f4f7ed]">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-2">Galeri</h2>
          <p className="text-sm text-slate-500 mb-12">Dokumentasi kegiatan mentoring</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[250px]">
            <div className="md:col-start-1 md:row-start-1 overflow-hidden rounded-2xl relative">
              <Image src={DATA_GALERI[0].img} alt="Galeri 1" fill className="object-cover" />
            </div>

            <div className="md:col-start-2 md:row-start-1 md:row-span-2 overflow-hidden rounded-2xl relative">
              <Image src={DATA_GALERI[1].img} alt="Galeri 2" fill className="object-cover" />
            </div>

            <div className="md:col-start-3 md:row-start-1 overflow-hidden rounded-2xl relative">
              <Image src={DATA_GALERI[2].img} alt="Galeri 3" fill className="object-cover" />
            </div>

            <div className="md:col-start-1 md:row-start-2 md:row-span-2 overflow-hidden rounded-2xl relative">
              <Image src={DATA_GALERI[3].img} alt="Galeri 4" fill className="object-cover" />
            </div>

            <div className="md:col-start-2 md:row-start-3 overflow-hidden rounded-2xl relative">
              <Image src={DATA_GALERI[4].img} alt="Galeri 5" fill className="object-cover" />
            </div>

            <div className="md:col-start-3 md:row-start-2 md:row-span-2 overflow-hidden rounded-2xl relative">
              <Image src={DATA_GALERI[5].img} alt="Galeri 6" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function CardMateri({ title, pemateri, tanggal }: { title: string, pemateri: string, tanggal: string }) {
  const slug = title.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');

  return (
    <Link href={`/materi/${slug}`}>
      <div className="bg-[#f2efe4] p-8 rounded-[2.5rem] text-left border border-slate-200/50 flex flex-col justify-between h-70 group transition-all hover:scale-[1.02] cursor-pointer">
        <div className="flex justify-between items-start">
          <h3 className="font-bold text-xl leading-tight text-slate-800 w-[80%]">
            {title}
          </h3>
          <div className="bg-white p-2.5 rounded-xl shadow-sm border border-slate-100 group-hover:bg-green-50 transition-colors">
            <ExternalLink size={20} className="text-slate-900" />
          </div>
        </div>

        <div className="mt-auto">
          <p className="text-xs font-semibold text-slate-500">
            Pemateri: {pemateri}
          </p>
          <p className="text-[10px] text-slate-400 mt-1">
            {tanggal}
          </p>
        </div>
      </div>
    </Link>
  );
}

function CardAnggota({ name, npm, img }: { name: string, npm: string, img: string }) {
  return (
    <div className="text-left">
      <div className="relative aspect-3/4 rounded-4xl overflow-hidden mb-4 shadow-sm">
        <Image 
          src={img} 
          alt={name} 
          fill
          className="object-cover" 
        />
      </div>
      <h4 className="font-bold text-sm text-slate-800 leading-tight">{name}</h4>
      <p className="text-xs text-slate-500 mt-1">{npm}</p>
    </div>
  );
}