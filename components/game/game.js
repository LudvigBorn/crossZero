import { GameCell } from "./game-cell";
import { GameInfo } from "./game-info";
import { useGameState } from "./use-game-state";
import { ResetButton } from "./reset-button";

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
    <div className="flex flex-col items-center w-40 mx-auto my-24 p-5 border border-black">
      <GameInfo
        winnerSymbol={winnerSymbol}
        isDraw={isDraw}
        currentStep={currentStep}
      />
      <div className="grid grid-cols-[repeat(3,_30px)] grid-rows-[repeat(3,_30px)] pt-px pb-px">
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
      <ResetButton onClick={handleResetClick} />
    </div>
  );
}
