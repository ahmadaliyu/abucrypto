'use client'

import { useState, useEffect } from 'react'

interface FeatureCardProps {
  title: string
  subtitle: string
  index: number
}

export default function FeatureCard({ title, subtitle, index }: FeatureCardProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, index * 300)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div className={`bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      
      <h3 className="text-2xl font-bold text-gray-600 mb-3">{title}</h3>
      <p className="text-gray-600">{subtitle}</p>
    </div>
  )
}