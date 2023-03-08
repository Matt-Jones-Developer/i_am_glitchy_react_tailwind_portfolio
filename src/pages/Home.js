import { useEffect } from 'react';
import Hero from "../components/Hero";
import styles from "./styles/Home.module.css"

const Home = () => {
  // always auto scroll hook
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, []);

  return (
    <section className={`${styles.homeSection}`}>
      <Hero />
    </section>
  );
};

export default Home;
