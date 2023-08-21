import Header from '../Components/header/Header'
import WhyChoose from '../Components/whyChoose/WhyChoose'
import Footer from '../Components/footer/Footer'

const ServicePage = () => {
  return (
    <div
      style={{
        background: '#121212',
      }}
    >
      <Header />
      <section>
        <WhyChoose />
        <Footer />
      </section>
    </div>
  )
}

export default ServicePage
