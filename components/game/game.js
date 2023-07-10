import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import styles from './game.module.css'
import { useGameState } from "./use-game-state";

export function Game() {
  const {
    cells,
    currentStep,
    winnerSequence,
    handleCellClick,
    handleResetClick,
    winnerSymbol,
    isDraw,
  } = useGameState();

  return (
    //'flex flex-col items-center w-40 mx-auto my-24 border border-black p-5'
    <div className={styles['game']}>
      <GameInfo
        winnerSymbol={winnerSymbol}
        isDraw={isDraw}
        currentStep={currentStep}
      />
      <div className={styles['game-field']}>
        {cells.map((symbol, index) => {
          const isWinner = winnerSequence?.includes(index);
          return (
            <GameCell
              key={index}
              symbol={symbol}
              isWinner={isWinner}
              onClick={() => handleCellClick(index)}
            />
          );
        })}
      </div>
      <button className={styles["reset"]} onClick={handleResetClick}>
        Сбросить
      </button>
    </div>
  );
}
