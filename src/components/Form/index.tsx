import s from "./Form.module.css";
import CheckBox from "../CheckBox";
import { useForm } from "react-hook-form";
import playersStore from "../../store/use-players-store";
import modalFormStore from "../../store/use-modal-form-store";

type FormData = {
  player_1_name?: string;
  player_2_name?: string;
  checkbox: string;
};

export const Form: React.FC = () => {
  const { player_1, setPlayer_1, player_2, setPlayer_2 } = playersStore();
  const { setVisibleModal } = modalFormStore();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      player_1_name: "",
      checkbox: "",
      player_2_name: "",
    },
  });

  const handleSave = async (formData: FormData) => {
    setPlayer_1({
      ...player_1,
      name: String(formData.player_1_name),
      symbol: formData.checkbox === "O" ? "O" : "X",
    });
    setPlayer_2({
      ...player_2,
      name: String(formData.player_2_name),
      symbol: formData.checkbox === "O" ? "X" : "O",
    });
    setVisibleModal(false);
  };

  return (
    <>
      <div className={s.form_box}>
        <h2 className={s.h2}>TIC-TAC-TOE</h2>
        <form onSubmit={handleSubmit(handleSave)} className={s.form}>
          <div className={s.user_box}>
            <input
              {...register("player_1_name", { required: true })}
              type={"text"}
              autoComplete={"off"}
              className={s.input}
            />
            <label className={s.label}>Player №1</label>
          </div>

          <div className={s.user_box}>
            <input
              {...register("player_2_name", { required: true })}
              type={"text"}
              autoComplete={"off"}
              className={s.input}
            />
            <label className={s.label}>Player №2</label>
          </div>

          <h4 className={s.h4}>Who will player №1 play for?</h4>

          <div className={s.wrapper_checkBox}>
            <CheckBox register={register} />
          </div>

          <button className={s.button} type={"submit"}>
            <span>Next</span>
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
