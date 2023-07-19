import showcase from './showcase.module.scss'

const Showcase = () => {
  return (
    <section className={showcase.showcase}>
      <div className={showcase.left}>
        <div className={showcase.text}>
          <span>Ready to train</span>
          <span>your body</span>
        </div>
        <p className={showcase.paragraph}>
          Gym training is a structured and disciplined approach to physical
          exercise that focuses on strength, endurance and overall fitness
          improvement.
        </p>
        <button className={showcase.lets_join_btn}>Let's Join Now</button>
        <div className={showcase.info}>
          <div className={showcase.infos}>
            <span>20+</span>
            <span className={showcase.tx}>Years of Experience</span>
          </div>
          <div className={showcase.infos}>
            <span>15K+</span>
            <span className={showcase.tx}>Members Join</span>
          </div>
          <div className={showcase.infos}>
            <span>14K+</span>
            <span className={showcase.tx}>Happy members</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Showcase
