import React, { useState } from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export function ImageWithFallback(props: ImageWithFallbackProps) {
  const [didError, setDidError] = useState(false)
  const [fallbackDidError, setFallbackDidError] = useState(false)

  const handleError = () => {
    if (!didError && props.fallbackSrc) {
      setDidError(true)
    } else {
      setFallbackDidError(true)
    }
  }

  const handleFallbackError = () => {
    setFallbackDidError(true)
  }

  const { src, alt, style, className, fallbackSrc, ...rest } = props

  // If both original and fallback failed, show error placeholder
  if (fallbackDidError) {
    return (
      <div
        className={`inline-block bg-gray-100 text-center align-middle ${className ?? ''}`}
        style={style}
      >
        <div className="flex items-center justify-center w-full h-full">
          <img src={ERROR_IMG_SRC} alt="Error loading image" {...rest} data-original-url={src} />
        </div>
      </div>
    )
  }

  // If original failed but we have a fallback, try fallback
  if (didError && fallbackSrc) {
    return (
      <img 
        src={fallbackSrc} 
        alt={alt} 
        className={className} 
        style={style} 
        {...rest} 
        onError={handleFallbackError} 
      />
    )
  }

  // Try original image first
  return (
    <img src={src} alt={alt} className={className} style={style} {...rest} onError={handleError} />
  )
}