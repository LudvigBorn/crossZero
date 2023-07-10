import { GameSymbol } from "./game-symbol";
import { clsx } from "clsx";

export const GameCell = ({ isWinner, index, symbol, onClick }) => {
  return (
    <button
      key={index}
      className={clsx(
        "border border-gray-400 bg-white -mt-px -ml-px flex justify-center items-center",
        isWinner && "bg-green-200",
      )}
      //className={styles['cell']}
      onClick={onClick}
    >
      {symbol ? <GameSymbol symbol={symbol} /> : null}
    </button>
  );
};
