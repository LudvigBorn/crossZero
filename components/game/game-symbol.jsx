import { SYMBOL_O, SYMBOL_X } from "./constans";

export const GameSymbol = ({ symbol }) => {
  const getSymbolClassName = (symbol) => {
    if (symbol === SYMBOL_O) return "text-green-700";
    if (symbol === SYMBOL_X) return "text-red-700";
  };
  return <span className={getSymbolClassName(symbol)}>{symbol}</span>;
};
