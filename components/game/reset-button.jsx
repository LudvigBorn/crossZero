export function ResetButton({ onClick }) {
  return (
    <button
      className="mt-2 bg-transperent border border-black px-3 py-1 rounded"
      onClick={onClick}
    >
      Сбросить
    </button>
  );
}
