import s from "./Main.module.css";
import Map from "../Map";

export const Main: React.FC = () => {
  return (
    <main className={s.main}>
      <Map></Map>
    </main>
  );
};

export default Main;
