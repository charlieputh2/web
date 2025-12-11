'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Maps from '@/components/Maps'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-16 sm:py-20 md:py-24 animate-fadeInUp">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
              Welcome to our Website
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-blue-100 font-light">
              Professional Web Development & SEO Services
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <button className="bg-white text-blue-600 hover:bg-blue-50 font-bold py-3 px-8 rounded-lg transition-smooth transform hover:scale-105 shadow-lg">
                  Explore Services
                </button>
              </Link>
              <Link href="/order">
                <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-smooth transform hover:scale-105 shadow-lg">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 sm:mb-16 gap-4">
              <div className="animate-slideInLeft">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900">Services</h2>
                <p className="text-gray-600 mt-2 text-sm sm:text-base">Comprehensive solutions for your business needs</p>
              </div>
              <Link href="/services" className="animate-slideInRight">
                <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-smooth transform hover:scale-105 shadow-lg hover:shadow-xl whitespace-nowrap">
                  Lift
                </button>
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-smooth-lg border border-gray-100 animate-slideInLeft hover:border-blue-200 group overflow-hidden" style={{ animationDelay: '0.1s' }}>
                <div className="relative w-full h-40 sm:h-48 md:h-56 mb-6 rounded-lg overflow-hidden group-hover:scale-105 transition-smooth bg-gray-200">
                  <Image
                    src="/webdev.png"
                    alt="Web Development Services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">Web Development</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  We create modern, responsive, and high-performance websites using the latest technologies. Our expert team specializes in building scalable solutions that drive business growth and user engagement.
                </p>
                <ul className="text-gray-700 space-y-3 text-sm sm:text-base">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span>React & Next.js Development</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span>Full Stack Solutions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span>Mobile Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span>Performance Optimization</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-smooth-lg border border-gray-100 animate-slideInRight hover:border-blue-200 group overflow-hidden" style={{ animationDelay: '0.2s' }}>
                <div className="relative w-full h-40 sm:h-48 md:h-56 mb-6 rounded-lg overflow-hidden group-hover:scale-105 transition-smooth bg-gray-200">
                  <Image
                    src="/seo.png"
                    alt="SEO Optimization Services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-blue-600 mb-4">SEO</h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  Boost your online visibility with our comprehensive SEO strategies. We help your business rank higher on search engines and attract more organic traffic through proven methodologies.
                </p>
                <ul className="text-gray-700 space-y-3 text-sm sm:text-base">
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span>Keyword Research & Analysis</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span>On-Page Optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span>Link Building Strategies</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0">✓</span>
                    <span>Analytics & Reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="text-center animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <Link href="/order">
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-4 px-12 rounded-lg text-lg transition-smooth transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        <Maps />
      </main>

      <Footer />
    </div>
  )
}
