import s from "./Home.module.css";
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
import Form from "../Form";

import modalFormStore from "../../store/use-modal-form-store";

function Home() {
  const { visibleModal, setVisibleModal } = modalFormStore();

  return (
    <section className={s.wrapper}>
      {visibleModal && <Form setVisibleModal={setVisibleModal} />}
      {!visibleModal && <Header />}
      <Main />
      {!visibleModal && <Footer />}
    </section>
  );
}

export default Home;
