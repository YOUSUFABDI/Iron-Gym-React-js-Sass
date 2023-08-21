import home from './home.module.scss'
import Showcase from '../showcase/Showcase'
import heroBgImage from '../../assets/images/hero.png'
import Header from '../header/Header'
import WhyChoose from '../whyChoose/WhyChoose'
import About from '../about/About'
import Trainers from '../trainers/Trainers'
import Testimonial from '../testimonial/Testimonials'
import ContactForm from '../contactForm/ContactForm'
import Footer from '../footer/Footer'

const heroBgImg = {
  background: `linear-gradient(90deg, #000 3.13%, rgba(0, 0, 0, 0.07) 100%), url('${heroBgImage}'), lightgray -40px -0.065px / 111.667% 104.7%`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  width: '100%',
  paddingBottom: '200px',
}

const Home = () => {
  return (
    <main className={home.main}>
      <section style={heroBgImg}>
        <Header />
        <Showcase />
      </section>
      <WhyChoose />
      <About />
      <Trainers />
      <Testimonial />
      <ContactForm />
      <Footer />
    </main>
  )
}

export default Home
