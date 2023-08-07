import testimonials from './testimonials.module.scss'
import clientBg from './../../assets/images/clients-bg-img.png'
import trainerImageT from './../../assets/images/trainer-test-img-1.png'
import trainerImageT2 from './../../assets/images/trainer-test-img.png'
import Testimonial from './Testimonial'

const clientBgImg = {
  background: ` url(${clientBg}), lightgray 0px -0.034px / 100% 132.053% no-repeat`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
}

const Testimonials = () => {
  const slides = [
    {
      id: 1,
      name: 'Johny Breaker',
      paragraph:
        'I am extremely grateful for the positive impact gym training has had on my life; through consistent training, expert guidance from coaches, and access to top-notch facilities, I have witnessed a remarkable transformation in strength, endurance, and overall fitness levels.',
      image: trainerImageT,
      rate: '⭐⭐⭐⭐⭐',
    },
    {
      id: 2,
      name: 'Borney Exited',
      paragraph:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod corporis, suscipit officia inventore enim blanditiis doloribus commodi omnis quasi voluptatem earum perferendis animi ipsum a, accusamus doloremque ab rerum sint?',
      image: trainerImageT2,
      rate: '⭐⭐⭐⭐',
    },
  ]

  return (
    <section style={clientBgImg} className={testimonials.wrapper}>
      <div className={testimonials.container}>
        <h1 className={testimonials.title}>
          What <span>clients say</span> with us
        </h1>
        <Testimonial slides={slides} />
      </div>
      <div className={testimonials.layer}></div>
    </section>
  )
}

export default Testimonials
