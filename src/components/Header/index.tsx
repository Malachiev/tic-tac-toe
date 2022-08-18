import s from "./Header.module.css";

export const Header: React.FC = () => {
  return (
    <section className={s.wrapper}>
      <div className={s.content_container}></div>
    </section>
  );
};

export default Header;
