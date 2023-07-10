import { GameSymbol } from "./game-symbol";

export const GameInfo = ({ winnerSymbol, isDraw, currentStep }) => {
  if (isDraw) {
    return <div className="mb-2">Ничья</div>;
  }

  if (winnerSymbol) {
    return (
      <div className="mb-2">
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    );
  }

  return (
    <div className="mb-2">
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  );
};
