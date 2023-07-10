import styles from './game.module.css'
import {GameSymbol} from './game-symbol'

export const GameCell = ({ isWinner, index, symbol, onClick }) => {
  return (
    <button
      key={index}
      className={`${styles['cell']} ${isWinner ? styles["cell--win"] : ""}`}
      //className={styles['cell']}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
};