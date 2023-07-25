import about from './about.module.scss'
import aboutImgBg from './../../assets/images/aboutBgImg.png'
import rightImg from './../../assets/images/rightPlace.png'

const aboutStyleBg = {
  background: `url(${aboutImgBg}),  lightgray 0px -0.096px / 100% 118.25%`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const About = () => {
  return (
    <section className={about.wrapper} style={aboutStyleBg}>
      <div className={about.container}>
        <div className={about.con_left}>
          <div className={about.con_title}>
            <span>We have a lot of</span>
            <span className={about.experiance}>experiance</span>
          </div>
          <div className={about.con_pargraph}>
            <p>
              In quisque nunc dictumst etiam pellentesque et. Vel malesuada diam
              lorem tellus. Amet mauris feugiat ipsum natoque odio donec. Sit at
              lacus consequat justo odio condimentum dui. Faucibus id blandit
              feugiat mi tellus sit etiam donec aliquam. Dictumst egestas ut
              facilisi vel.
            </p>
            <p>
              Sem consequat fermentum pellentesque risus purus quis gravida.
              Nulla porttitor ultrices facilisis non commodo diam morbi cursus
              eu. Semper ut in mauris gravida id cursus urna. Magnis vulputate
              orci risus felis eget lectus morbi. Et cursus mauris condimentum
              pretium arcu sed dignissim.
            </p>
          </div>
          <button className={about.about_btn}>About us</button>
        </div>

        <div className={about.con_right}>
          <div className={about.b_t}></div>
          <img className={about.img} src={rightImg} alt="img" />
          <div className={about.b_b}></div>
        </div>
      </div>

      <div className={about.layer}></div>
    </section>
  )
}

export default About
