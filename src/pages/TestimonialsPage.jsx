import Header from '../Components/header/Header'
import Testimonials from '../Components/testimonial/Testimonials'
import Footer from '../Components/footer/Footer'

const TestimonialsPage = () => {
  return (
    <div
      style={{
        background: '#000000',
        height: '100vh',
        width: '100%',
      }}
    >
      <Header />
      <section style={{ color: 'white', textAlign: 'center' }}>
        <Testimonials />
        <Footer />
      </section>
    </div>
  )
}

export default TestimonialsPage
