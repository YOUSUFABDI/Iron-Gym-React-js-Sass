import contactStyle from './contactForm.module.scss'
import contactImg from './../../assets/images/contact-img.png'

const ContactForm = () => {
  return (
    <section className={contactStyle.contact_container}>
      <div className={contactStyle.contact_wrapper}>
        <svg
          className={contactStyle.svg_border}
          xmlns="http://www.w3.org/2000/svg"
          width="1228"
          height="674"
          viewBox="0 0 1228 674"
          fill="none"
        >
          <path
            d="M80.4431 641.513L0.566224 1.49954L1227.42 0.500475L1123.57 673.487L80.4431 641.513Z"
            fill="black"
            stroke="#FF0000"
          />
        </svg>

        <img
          className={contactStyle.contact_img}
          src={contactImg}
          alt="contact-img"
        />

        <div className={contactStyle.right_contact}>
          <div className={contactStyle.right_info}>
            <h1>
              Let's Start Gym <br />
              <span className={contactStyle.make_red}>Training Now</span>
            </h1>
            <p>
              get 50% off the first three classes you sign up for this month any
              GYM membership
            </p>
          </div>

          <form className={contactStyle.form}>
            <div className={contactStyle.form_name_phone}>
              <input type="text" placeholder="Enter You Name..." />
              <input type="text" placeholder="Numbers Phone..." />
            </div>
            <div className={contactStyle.form_email}>
              <input type="text" placeholder="Your Email Address..." />
            </div>
            <button className={contactStyle.form_btn}>Let's Join Now</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
