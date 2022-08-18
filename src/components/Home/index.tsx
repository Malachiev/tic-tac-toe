import s from "./Home.module.css";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import { useState } from "react";

type Player = {
  name: string;
  symbol: "X" | "O";
};

function Home() {
  const [player_1, setPlayer_1] = useState<Player>();
  const [player_2, setPlayer_2] = useState<Player>();

  return (
    <section className={s.wrapper}>
      <Header />
      <Main />
      <Footer />
    </section>
  );
}

export default Home;
