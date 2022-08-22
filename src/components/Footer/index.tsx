import s from "./Footer.module.css";
import cancelMoveStore from "../../store/use-cancel-move-store";
import winnerStore from "../../store/use-winner-store";
import mapStore from "../../store/use-map-store";

export const Footer: React.FC = () => {
  const { setMoveHistory, moveHistory } = cancelMoveStore();
  const { setStep, setSquares, squares, step } = mapStore();
  const { winner } = winnerStore();

  const undoMove = () => {
    if (moveHistory.length) {
      let newSquares = squares;
      let newHistory = moveHistory;

      let lastMove: any = newHistory.pop();
      newSquares[lastMove] = null;

      setStep(step - 1);
      setSquares(newSquares);
      setMoveHistory(newHistory);
    }
  };

  return (
    <section className={s.wrapper}>
      <section className={s.game_settings}>
        {!winner && (
          <button
            className={s.button}
            onClick={() => {
              undoMove();
            }}
          >
            Отменить ход
          </button>
        )}
      </section>
    </section>
  );
};

export default Footer;
