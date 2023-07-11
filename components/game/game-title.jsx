import Link from "next/link";
import { ArrowLeftIcon } from "./icons/arrow-left-icon";
import { StarIcon } from "./icons/star-icon";
import { UserIcon } from "./icons/user-icon";
import { HistoryIcon } from "./icons/histry-icon";

export function GameTitle() {
  return (
    <div className="pl-2">
      <Link
        href="#"
        className="text-teal-600 flex gap-2 items-center text-xs leading-tight -mb-0.5"
      >
        <ArrowLeftIcon />
        <div>На главную</div>
      </Link>
      <h1 className="text-4xl leading-tight">Крестики нолики</h1>
      <div className="text-slate-400 text-xs leading-tight flex items-center gap-3">
        <StarIcon />
        <div className="flex gap-1 items-center">
          <UserIcon />
          <div>2</div>
        </div>
        <div className="flex gap-1 items-center">
          <HistoryIcon />
          <div>1 мин на ход</div>
        </div>
      </div>
    </div>
  );
}
