'use client'

import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white py-12 sm:py-16 md:py-20 animate-fadeInUp">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Services</h1>
            <p className="text-blue-100 mt-2 text-sm sm:text-base">Comprehensive solutions for your business</p>
          </div>
        </section>

        <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-12 sm:mb-16">
              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-smooth-lg border border-gray-100 hover:border-blue-200 group animate-slideInLeft overflow-hidden" style={{ animationDelay: '0.1s' }}>
                <div className="relative w-full h-40 sm:h-48 md:h-56 mb-6 rounded-lg overflow-hidden group-hover:scale-105 transition-smooth">
                  <Image
                    src="/webdev.jfif"
                    alt="Web Development Services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">Web Development</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  We specialize in creating modern, responsive, and high-performance websites using cutting-edge technologies. Our expert team builds scalable solutions that drive business growth and user engagement.
                </p>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Custom Website Development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>React & Next.js Expertise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Full Stack Solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Mobile Responsive Design</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Performance Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>E-commerce Solutions</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg hover:shadow-2xl transition-smooth-lg border border-gray-100 hover:border-blue-200 group animate-slideInRight overflow-hidden" style={{ animationDelay: '0.2s' }}>
                <div className="relative w-full h-40 sm:h-48 md:h-56 mb-6 rounded-lg overflow-hidden group-hover:scale-105 transition-smooth">
                  <Image
                    src="/seo.jfif"
                    alt="SEO Optimization Services"
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority
                  />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">SEO</h2>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  Boost your online visibility with our comprehensive SEO strategies. We help your business rank higher on search engines and attract more organic traffic through proven methodologies.
                </p>
                <ul className="space-y-3 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Keyword Research & Analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>On-Page Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Technical SEO Audit</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Link Building Strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Content Optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-500 font-bold flex-shrink-0 mt-0.5">✓</span>
                    <span>Analytics & Reporting</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 sm:p-8 md:p-10 rounded-xl border-2 border-blue-200 text-center hover:shadow-lg transition-smooth-lg animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
              <p className="text-gray-700 mb-6 text-sm sm:text-base">
                Let's work together to achieve your business goals. Click below to place an order and get in touch with our team.
              </p>
              <Link href="/order">
                <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 sm:py-4 px-8 sm:px-12 rounded-lg text-sm sm:text-lg transition-smooth transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Order Now
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
