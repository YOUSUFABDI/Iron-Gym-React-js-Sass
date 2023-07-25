import whyChoose from './whyChoose.module.scss'
import infos from './../../assets/data/infos.json'
import Anwers from './Anwers'

const WhyChoose = () => {
  return (
    <section className={whyChoose.whyChoose}>
      <div className={whyChoose.top}>
        <div className={whyChoose.top_title}>
          <span>Why</span>
          <span>Choose Us</span>
        </div>
        <p className={whyChoose.top_paragraph}>
          Gym workouts offer a versatile and customisable experience, allowing{' '}
          <br /> everyone to set specific fitness goals.
        </p>
      </div>
      <div className={whyChoose.bottom}>
        {infos.map((info) => (
          <Anwers key={info.id} {...info} />
        ))}
      </div>
    </section>
  )
}

export default WhyChoose
