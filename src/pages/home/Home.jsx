import Thumbnails from "../../components/thumbnails/Thumbnails";
import Header from "../../components/header/Header";
import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.wrapper}>
      <div>
        <Header />
      </div>
      <div>
        <Thumbnails />
      </div>
    </div>
  );
};

export default Home;
