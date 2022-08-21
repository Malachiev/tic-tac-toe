import s from "./Header.module.css";
import playersStore from "../../store/use-players-store";
import winnerStore from "../../store/use-winner-store";
import mapStore from "../../store/use-map-store";

export const Header: React.FC = () => {
  const { player_1, setPlayer_1, player_2, setPlayer_2 } = playersStore();
  const { winner, setWinner } = winnerStore();
  const { setStep, setSquares } = mapStore();

  const newGame = () => {
    switch (winner) {
      case player_1.name:
        setPlayer_1({ ...player_1, won: player_1.won + 1 });
        break;
      case player_2.name:
        setPlayer_2({ ...player_2, won: player_2.won + 1 });
        break;

      default:
        break;
    }
    setWinner("");
    setSquares(Array(9).fill(null));
    setStep(0);
  };

  return (
    <section className={s.wrapper}>
      <div className={s.content_container}>
        <section className={s.game_info}>
          <div className={s.players_info_wrapper}>
            {winner ? (
              <div className={s.winner_info}>
                <div>
                  Победил{winner !== "дружба" ? "(а) " : "а "} {winner}
                </div>
                <button
                  className={s.button}
                  onClick={() => {
                    newGame();
                  }}
                >
                  Сыграть новую игру
                </button>
              </div>
            ) : (
              <div className={s.players_info}>
                <div className={s.player}>
                  <span className={s.won}>{player_1.won}</span>
                  <span>
                    {player_1.name} : {player_1.symbol}
                  </span>
                </div>
                <div className={s.player}>
                  <span className={s.won}>{player_2.won}</span>
                  <span>
                    {player_2.name} : {player_2.symbol}
                  </span>
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </section>
  );
};

export default Header;
