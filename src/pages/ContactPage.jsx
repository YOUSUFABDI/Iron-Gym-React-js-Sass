import Header from '../Components/header/Header'
import ContactForm from '../Components/contactForm/ContactForm'
import Footer from '../Components/footer/Footer'

const ContactPage = () => {
  return (
    <div
      style={{
        background: '#121212',
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

export default ContactPage
