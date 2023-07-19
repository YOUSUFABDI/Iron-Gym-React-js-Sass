import home from './home.module.scss'
import Showcase from '../showcase/Showcase'
import heroBgImage from '../../assets/images/hero.png'
import Header from '../header/Header'

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
      <section className={home.why}>Why Choose Us</section>
    </main>
  )
}

export default Home
