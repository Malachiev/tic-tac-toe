import s from "./Main.module.css";
import Map from "../Map";
import modalFormStore from "../../store/use-modal-form-store";

export const Main: React.FC = () => {
  const { visibleModal } = modalFormStore();

  return <main className={s.main}>{!visibleModal && <Map />}</main>;
};

export default Main;
