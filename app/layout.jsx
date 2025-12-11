import './globals.css'

export const metadata = {
  title: 'Professional Web Development & SEO Services | Our Website',
  description: 'Expert web development and SEO optimization services. Boost your online presence with our professional solutions.',
  keywords: 'web development, SEO, digital marketing, web design, professional services',
  authors: [{ name: 'Our Website Team' }],
  openGraph: {
    title: 'Professional Web Development & SEO Services',
    description: 'Expert web development and SEO optimization services',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Web Development & SEO Services',
    description: 'Expert web development and SEO optimization services',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#3b82f6" />
        <link rel="canonical" href="https://ourwebsite.com" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className="bg-gray-50">
        {children}
      </body>
    </html>
  )
}
