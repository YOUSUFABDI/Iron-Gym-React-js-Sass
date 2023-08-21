import Header from '../Components/header/Header'
import Trainers from '../Components/trainers/Trainers'
import Footer from '../Components/footer/Footer'

const TrainersPage = () => {
  return (
    <div
      style={{
        background: '#121212',
        height: '100vh',
        width: '100%',
      }}
    >
      <Header />
      <section style={{ color: 'white', textAlign: 'center' }}>
        <Trainers />
        <Footer />
      </section>
    </div>
  )
}

export default TrainersPage
