import Thumbnails from "../../components/thumbnails/Thumbnails";
import Header from "../../components/header/Header";
import styles from "./Home.module.scss";
import { Hero, Footer } from "../../exports/exports";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Thumbnails />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
