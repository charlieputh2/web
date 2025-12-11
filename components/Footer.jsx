'use client'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const portfolioLinks = [
    { label: 'Home', href: 'https://portfoliobboy.vercel.app/' },
    { label: 'About', href: 'https://portfoliobboy.vercel.app/#about' },
    { label: 'Projects', href: 'https://portfoliobboy.vercel.app/#projects' },
    { label: 'Skills', href: 'https://portfoliobboy.vercel.app/#skills' },
    { label: 'Contact', href: 'https://portfoliobboy.vercel.app/#contact' },
  ]

  const contactInfo = [
    { label: 'Phone', value: '09856122843', icon: '📱' },
    { label: 'Email', value: 'capstonee2@gmail.com', icon: '📧' },
    { label: 'Location', value: 'Waterfall, Balingasag, Misamis Oriental', icon: '📍' },
  ]

  const socialLinks = [
    { name: 'Portfolio', url: 'https://portfoliobboy.vercel.app/', icon: '🌐' },
    { name: 'GitHub', url: 'https://github.com/CharlieJamesGwapo', icon: '💻' },
    { name: 'Facebook', url: 'https://www.facebook.com/Retrigadz', icon: '👥' },
    { name: 'Call', url: 'tel:09856122843', icon: '📞' },
  ]

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-950 to-black text-gray-300 py-12 sm:py-16 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* About Section */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-white font-bold text-lg mb-4">About</h3>
            <p className="text-xs sm:text-sm leading-relaxed text-gray-400 hover:text-gray-300 transition-smooth">
              Full Stack Developer passionate about creating innovative web solutions and building user-friendly applications. Dean's Lister with expertise in React, PHP, Laravel, and modern web technologies.
            </p>
          </div>

          {/* Services Section */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <h3 className="text-white font-bold text-lg mb-4">Services</h3>
            <ul className="text-xs sm:text-sm space-y-2">
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-smooth relative group">
                  Web Development
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/services" className="text-gray-400 hover:text-white transition-smooth relative group">
                  SEO Optimization
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
              <li>
                <a href="/order" className="text-gray-400 hover:text-white transition-smooth relative group">
                  Place Order
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            </ul>
          </div>

          {/* Portfolio Links Section */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.3s' }}>
            <h3 className="text-white font-bold text-lg mb-4">Portfolio</h3>
            <ul className="text-xs sm:text-sm space-y-2">
              {portfolioLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-smooth relative group"
                  >
                    {link.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-white font-bold text-lg mb-4">Contact</h3>
            <ul className="text-xs sm:text-sm space-y-3 text-gray-400">
              {contactInfo.map((info) => (
                <li key={info.label} className="hover:text-white transition-smooth">
                  <span className="font-semibold">{info.icon} {info.label}:</span>
                  <p className="text-gray-500 text-xs mt-0.5">{info.value}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Developer Info Section */}
        <div className="bg-gradient-to-r from-blue-900/20 to-green-900/20 border border-gray-700 rounded-lg p-4 sm:p-6 mb-8 sm:mb-12 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-2">Developer</h4>
              <p className="text-xs sm:text-sm text-gray-300 font-semibold">Charlie James Z. Abejo</p>
              <p className="text-xs text-gray-500 mt-1">Full Stack Developer | BSIT Student</p>
            </div>
            <div>
              <h4 className="text-white font-bold text-sm sm:text-base mb-2">Expertise</h4>
              <p className="text-xs sm:text-sm text-gray-300">React • PHP • Laravel • MySQL • JavaScript • Tailwind CSS</p>
            </div>
          </div>
        </div>

        {/* Social Links Section */}
        <div className="mb-8 sm:mb-12 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
          <h3 className="text-white font-bold text-lg sm:text-xl text-center mb-6">Connect With Me</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-gray-700 to-gray-800 hover:from-blue-600 hover:to-blue-700 rounded-lg transition-smooth transform hover:scale-110 active:scale-95 text-xs sm:text-sm font-semibold text-gray-200 hover:text-white shadow-lg hover:shadow-xl"
              >
                <span className="text-base sm:text-lg">{social.icon}</span>
                <span className="hidden sm:inline">{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          {/* Footer Bottom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-500">
                &copy; {currentYear} Charlie James Z. Abejo. All rights reserved.
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-xs sm:text-sm text-gray-500">
                Professional Web Solutions
              </p>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 sm:gap-4 text-center animate-fadeInUp" style={{ animationDelay: '0.7s' }}>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 hover:bg-gray-700/50 transition-smooth">
              <p className="text-lg sm:text-xl font-bold text-blue-400">10+</p>
              <p className="text-xs text-gray-400">Certificates</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 hover:bg-gray-700/50 transition-smooth">
              <p className="text-lg sm:text-xl font-bold text-green-400">4+</p>
              <p className="text-xs text-gray-400">Projects</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 hover:bg-gray-700/50 transition-smooth">
              <p className="text-lg sm:text-xl font-bold text-purple-400">3+</p>
              <p className="text-xs text-gray-400">Years</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-2 sm:p-3 hover:bg-gray-700/50 transition-smooth">
              <p className="text-lg sm:text-xl font-bold text-yellow-400">2</p>
              <p className="text-xs text-gray-400">Rank</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
