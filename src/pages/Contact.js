import styles from './styles/Contact.module.css';
import linkedIn from "../assets/icons/linkedIn.png"
import slack from "../assets/icons/slack_wht.png"
import github from "../assets/icons/github.png"
import myCV from '../assets/pdf/Matt Jones C.V 2023 (Google Docs).pdf'
import Form from '../components/Form'
// import { Form } from 'react-router-dom'

const Contact = () => {
  return (
    <section className={`${styles.section} section flex p-4 bs-tone px-5 py-24`}>
      <div className={`${styles.contactMe} text-left md:w-[50%] mx-auto text-white`}>
        <h2 className="contact-title text-6xl font-bold mb-5 border-b-[5px] w-[250px] border-purps pb-2">
          Contact
        </h2>
        <p className="text-white contactIntro">
          I'm currently open for hire within any full-time or part-time Front-end Developer roles.
          If you want to discuss any potential contracts with me, please feel free to get in touch...
        </p>
        <a href={myCV} download="Matt Jones C.V 2023.pdf">
          <em className='text--peachy'><b>Download my CV here</b></em>
        </a>

        <p className="py-2 text-white">
          <span className="font-bold">Email:</span><a href="mailto:glitchyghost@gmail.com"> Matt Jones</a>
        </p>
        {/* icon drop */}
        <div className='iconDrop flex justify-center'>
          <a href='https://github.com/Matt-Jones-Developer'>
            <img className='github p-2'
              src={`${github}`}
              width="90px"
              height="90px"
              alt='github icon'
            >
            </img>
          </a>
          <a href='https://github.com/Matt-Jones-Developer'>
            <img className='slack p-2'
              src={`${slack}`}
              width="90px"
              height="64px"
              alt='slack icon'
            >
            </img>
          </a>
          <a href='https://github.com/Matt-Jones-Developer'>
            <img className='linkedIn p-2'
              src={`${linkedIn}`}
              width="90px"
              height="64px"
              alt='linkedIn icon'
            >
            </img>
          </a>
        </div>
      </div>
      {/* form to flex between */}
      <div className={`${styles.formModal}`}>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
