'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Swal from 'sweetalert2'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Order() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    billMadeByOther: false,
  })

  const [errors, setErrors] = useState({})
  const [showSuccess, setShowSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const [countdown, setCountdown] = useState(3)

  useEffect(() => {
    const savedData = localStorage.getItem('orderFormData')
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData))
      } catch (e) {
        console.error('Error loading saved data:', e)
      }
    }
    setIsLoading(false)
  }, [])


  const validateForm = () => {
    const newErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^\d{10,}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Phone number must be at least 10 digits'
    }

    if (!formData.billMadeByOther) {
      if (!formData.email.trim()) {
        newErrors.email = 'Email is mandatory when bill is not made by someone else'
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Please enter a valid email address'
      }
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    const newFormData = {
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    }
    setFormData(newFormData)
    localStorage.setItem('orderFormData', JSON.stringify(newFormData))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    localStorage.setItem('orderFormData', JSON.stringify(formData))
    
    Swal.fire({
      title: 'Submit Success!',
      html: `
        <div class="text-center">
          <p class="text-gray-700 mb-4">Your order has been submitted successfully.</p>
          <p class="text-sm text-gray-600">We'll contact you shortly at <strong>${formData.phone}</strong></p>
          <div class="mt-6 flex items-center justify-center gap-2">
            <div class="text-lg font-bold text-green-600">Redirecting in <span id="countdown">3</span>s</div>
          </div>
        </div>
      `,
      icon: 'success',
      iconColor: '#10b981',
      confirmButtonColor: '#3b82f6',
      confirmButtonText: 'Go to Home Now',
      allowOutsideClick: false,
      allowEscapeKey: false,
      didOpen: () => {
        let count = 3
        const countdownElement = document.getElementById('countdown')
        const interval = setInterval(() => {
          count--
          if (countdownElement) {
            countdownElement.textContent = count
          }
          if (count === 0) {
            clearInterval(interval)
            router.push('/')
          }
        }, 1000)
      }
    }).then((result) => {
      if (result.isConfirmed) {
        router.push('/')
      }
    })
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow">
        <section className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white py-12 sm:py-16 animate-fadeInUp">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">Place Your Order</h1>
            <p className="text-green-100 mt-2 text-sm sm:text-base">Fill in your details to get started</p>
          </div>
        </section>

        <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-xl hover:shadow-2xl transition-smooth-lg border border-gray-100 animate-scaleIn">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="animate-slideInLeft" style={{ animationDelay: '0.1s' }}>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-smooth text-sm sm:text-base ${
                      errors.name ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 font-medium">{errors.name}</p>
                  )}
                </div>

                <div className="animate-slideInLeft" style={{ animationDelay: '0.2s' }}>
                  <label htmlFor="phone" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-smooth text-sm sm:text-base ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                    }`}
                    placeholder="Enter your phone number"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-xs sm:text-sm mt-1 font-medium">{errors.phone}</p>
                  )}
                </div>

                <div className="animate-slideInLeft" style={{ animationDelay: '0.3s' }}>
                  <label className="flex items-center space-x-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      name="billMadeByOther"
                      checked={formData.billMadeByOther}
                      onChange={handleChange}
                      className="w-4 sm:w-5 h-4 sm:h-5 text-green-600 rounded focus:ring-2 focus:ring-green-500 cursor-pointer transition-smooth"
                    />
                    <span className="text-xs sm:text-sm font-medium text-gray-900 group-hover:text-green-600 transition-smooth">
                      Bill is being made by someone else
                    </span>
                  </label>
                </div>

                {!formData.billMadeByOther && (
                  <div className="animate-slideInLeft" style={{ animationDelay: '0.4s' }}>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-gray-900 mb-2">
                      Email Address <span className="text-red-500">*</span> (Mandatory)
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-3 sm:px-4 py-2 sm:py-3 border-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-smooth text-sm sm:text-base ${
                        errors.email ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-gray-300'
                      }`}
                      placeholder="Enter your email address"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs sm:text-sm mt-1 font-medium">{errors.email}</p>
                    )}
                  </div>
                )}

                <div className="pt-4 sm:pt-6 animate-slideInLeft" style={{ animationDelay: '0.5s' }}>
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition-smooth transform hover:scale-105 text-sm sm:text-base active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    Submit Order
                  </button>
                </div>

                <div className="text-center pt-3 sm:pt-4 animate-slideInLeft" style={{ animationDelay: '0.6s' }}>
                  <Link href="/">
                    <button
                      type="button"
                      className="text-blue-600 hover:text-blue-700 font-semibold underline text-xs sm:text-sm transition-smooth"
                    >
                      ← Back to Home
                    </button>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>


      <Footer />
    </div>
  )
}
