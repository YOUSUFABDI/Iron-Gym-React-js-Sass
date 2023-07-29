import trainers from './trainers.module.scss'
import trainersData from './../../assets/data/trainers.json'
import Trainer from './Trainer'
import { useRef, useState } from 'react'

const Trainers = () => {
  const [isLeftScroll, setIsLeftScroll] = useState(true)
  const [isRightScroll, setIsRightScroll] = useState(false)

  const [isDisable, setIsDisable] = useState(true)

  const parentRef = useRef()

  const scrollToLeft = () => {
    const { clientWidth, scrollLeft } = parentRef.current
    const scrollToLeft = scrollLeft - clientWidth
    parentRef.current.scrollTo({ left: scrollToLeft, behavior: 'smooth' })

    setIsRightScroll(false)
    setIsLeftScroll(true)
  }

  const scrollToRight = () => {
    const { clientWidth, scrollLeft } = parentRef.current
    const scrollToRight = scrollLeft + clientWidth
    parentRef.current.scrollTo({ left: scrollToRight, behavior: 'smooth' })

    setIsLeftScroll(false)
    setIsRightScroll(true)
  }

  return (
    <section className={trainers.wrapper}>
      <div className={trainers.top}>
        <div className={trainers.title}>
          <span>Our Professional</span>
          <span>Trainers</span>
        </div>
        <p>
          Whether you're looking to set up a home gym or enhance your current
          workout routine
        </p>
      </div>

      <div className={trainers.parent} ref={parentRef}>
        {trainersData.map((trainer) => (
          <Trainer key={trainer.id} {...trainer} />
        ))}
      </div>

      <div className={trainers.cbtns}>
        <button
          className={`${isLeftScroll && trainers.active}`}
          onClick={scrollToLeft}
        ></button>
        <button
          className={`${isRightScroll && trainers.active}`}
          onClick={scrollToRight}
        ></button>
      </div>
    </section>
  )
}

export default Trainers
