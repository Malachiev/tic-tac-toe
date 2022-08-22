import s from "./Map.module.css";
import mapStore from "../../store/use-map-store";
import playersStore from "../../store/use-players-store";
import winnerStore from "../../store/use-winner-store";
import cancelMoveStore from "../../store/use-cancel-move-store";

const winningСombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const cross = (
  <svg width="50" height="50" viewBox="0 0 100 100">
    <g transform="translate(0,-952.36218)">
      <path
        d="m 13,983 c 33,6 40,26 55,48 "
        stroke="#03e9f4"
        strokeWidth="3"
        className={s.path}
        fill="none"
      />
      <path
        d="M 75,970 C 51,981 34,1014 25,1031 "
        stroke="#03e9f4"
        strokeWidth="3"
        className={s.path}
        fill="none"
      />
    </g>
  </svg>
);

const circle = (
  <svg viewBox="0 0 100 100" height="50" width="50">
    <g transform="translate(0,-952.36216)" id="layer1">
      <path
        id="path4146"
        d="m 55,978 c -73,19 46,71 15,2 C 60,959 13,966 30,1007 c 12,30 61,13 46,-23"
        fill="none"
        stroke="#03e9f4"
        strokeWidth="3"
        className={s.path}
      />
    </g>
  </svg>
);

export const Map: React.FC = () => {
  const { squares, step, setStep, setSquares } = mapStore();
  const { player_1, player_2 } = playersStore();
  const { winner, setWinner } = winnerStore();
  const { setMoveHistory, moveHistory } = cancelMoveStore();

  const isWinner = () => {
    let symbol = step % 2 === 0 ? cross : circle;

    let winner = "";
    for (let i = 0; i < 8; i++) {
      let row = winningСombination[i];
      if (
        squares[row[0]] === symbol &&
        squares[row[1]] === symbol &&
        squares[row[2]] === symbol
      ) {
        winner =
          (player_1.symbol === "X" && symbol === cross) ||
          (player_1.symbol === "O" && symbol === circle)
            ? player_1.name
            : player_2.name;
      }
    }
    if (step === 8 && !winner) {
      winner = "дружба";
    }
    setWinner(winner);
  };

  const clickHandler = (selectedSquare: number) => {
    moveHistory.push(selectedSquare);
    const arrayMoves = moveHistory;
    setMoveHistory(arrayMoves);
    let currentSquares = squares;
    if (currentSquares[selectedSquare] === null && !winner) {
      currentSquares[selectedSquare] = step % 2 === 0 ? cross : circle;
      setStep(step + 1);
      setSquares(currentSquares);
    }

    isWinner();
  };

  return (
    <section className={s.map}>
      {squares.map((square, i) => {
        return (
          <div className={s.square} onClick={() => clickHandler(i)} key={i}>
            {square}
          </div>
        );
      })}
    </section>
  );
};

export default Map;
