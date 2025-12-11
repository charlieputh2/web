'use client'

export default function Maps() {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-fadeInUp">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Location</h2>
          <p className="text-gray-600 text-sm sm:text-base">Visit us or get in touch</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Map Container */}
          <div className="animate-slideInLeft rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-smooth-lg border border-gray-100" style={{ animationDelay: '0.1s' }}>
            <div className="relative w-full h-80 sm:h-96 md:h-full min-h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3926.8234567890123!2d124.6789!3d8.5678!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32ffc5c5c5c5c5c5%3A0x1234567890abcdef!2sWaterfall%2C%20Balingasag%2C%20Misamis%20Oriental!5e0!3m2!1sen!2sph!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Location Information */}
          <div className="animate-slideInRight space-y-6 sm:space-y-8" style={{ animationDelay: '0.2s' }}>
            {/* Address Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-smooth border border-gray-100 group">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-smooth">📍</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Address</h3>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                    Waterfall, Balingasag<br />
                    Misamis Oriental, Philippines
                  </p>
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-smooth border border-gray-100 group">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-smooth">📱</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Phone</h3>
                  <a
                    href="tel:09856122843"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base transition-smooth"
                  >
                    +63 985 612 2843
                  </a>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-smooth border border-gray-100 group">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-smooth">📧</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Email</h3>
                  <a
                    href="mailto:capstonee2@gmail.com"
                    className="text-blue-600 hover:text-blue-700 font-semibold text-sm sm:text-base transition-smooth break-all"
                  >
                    capstonee2@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 sm:p-8 rounded-xl border-2 border-blue-200 group">
              <div className="flex items-start gap-4">
                <div className="text-3xl sm:text-4xl group-hover:scale-110 transition-smooth">⏰</div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">Availability</h3>
                  <p className="text-gray-700 text-sm sm:text-base">
                    Available for opportunities<br />
                    <span className="text-green-600 font-semibold">Usually responds within 24 hours</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Section */}
        <div className="mt-12 sm:mt-16 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-xl p-6 sm:p-8 md:p-10 animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
            <div>
              <p className="text-3xl sm:text-4xl font-bold mb-2">24/7</p>
              <p className="text-sm sm:text-base text-blue-100">Available Online</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold mb-2">Fast</p>
              <p className="text-sm sm:text-base text-blue-100">Quick Response Time</p>
            </div>
            <div>
              <p className="text-3xl sm:text-4xl font-bold mb-2">Professional</p>
              <p className="text-sm sm:text-base text-blue-100">Expert Solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
