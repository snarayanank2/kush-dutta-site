import type { ImageData } from '../data/content'
import './OptimizedImage.css'

interface OptimizedImageProps {
  image: ImageData
  sizes: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  className?: string
}

export default function OptimizedImage({
  image,
  sizes,
  loading = 'lazy',
  fetchPriority,
  className = '',
}: OptimizedImageProps) {
  return (
    <img
      src={image.src}
      srcSet={image.srcSet}
      sizes={sizes}
      alt={image.alt}
      width={image.width}
      height={image.height}
      loading={loading}
      decoding={loading === 'lazy' ? 'async' : 'auto'}
      fetchPriority={fetchPriority}
      className={`optimized-image ${className}`}
    />
  )
}
