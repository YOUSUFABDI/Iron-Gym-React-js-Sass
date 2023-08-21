import Header from '../Components/header/Header'
import ContactForm from '../Components/contactForm/ContactForm'
import Footer from '../Components/footer/Footer'

const StartNowPage = () => {
  return (
    <div
      style={{
        background: '#121212',
        height: '100vh',
      }}
    >
      <Header />
      <section>
        <ContactForm />
        <Footer />
      </section>
    </div>
  )
}

export default StartNowPage
