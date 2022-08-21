import s from "./Footer.module.css";

export const Footer: React.FC = () => {
  // const undoMove = () => {};

  return (
    <section className={s.wrapper}>
      <section className={s.game_settings}>
        {/* <button
          className={s.button}
          onClick={() => {
            undoMove();
          }}
        >
          Отменить ход
        </button> */}
      </section>
    </section>
  );
};

export default Footer;
