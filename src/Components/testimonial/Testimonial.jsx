import styles from './testimonial.module.scss'
import { useState, useRef } from 'react'

const Testimonial = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationDirection, setAnimationDirection] = useState('')

  const slideRef = useRef(null)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    )
    setAnimationDirection('backward')
    slideRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    )
    setAnimationDirection('forward')
    slideRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={styles.carousel}>
      <button
        className={`${styles['carousel-button']} ${styles.left}`}
        onClick={prevSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="44"
          viewBox="0 0 26 44"
          fill="none"
        >
          <path d="M24 2L4 22L24 42" stroke="white" strokeWidth="5" />
        </svg>
      </button>
      <div className={`${styles.slide} ${animationDirection}`} ref={slideRef}>
        <img
          className={styles['slide-image']}
          src={slides[currentIndex].image}
          alt={`Slide ${currentIndex}`}
        />
        <div className={styles['slide-content']}>
          <span className={styles['rate']}>{slides[currentIndex].rate}</span>
          <h1 className={styles['name']}>{slides[currentIndex].name}</h1>
          <p className={styles.prag}>{slides[currentIndex].paragraph}</p>
        </div>
      </div>
      <button
        className={`${styles['carousel-button']} ${styles.right}`}
        onClick={nextSlide}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="26"
          height="44"
          viewBox="0 0 26 44"
          fill="none"
        >
          <path d="M2 2L22 22L2 42" stroke="white" strokeWidth="5" />
        </svg>
      </button>
    </div>
  )
}

export default Testimonial
