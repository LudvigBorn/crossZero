import { Profile } from "../profile";
import clsx from "clsx";
import { CrossIcon } from "./icons/cross-icon";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(
        className,
        "px-8 py-4 rounded-2xl shadow-md flex justify-between bg-whit",
      )}
    >
      <div className="flex items-center  relative gap-3">
        <div className="relative">
          <div className=" flex items-center justify-center shadow absolute w-5 h-5 rounded-full -top-1 -left-1 bg-white ">
            <CrossIcon />
          </div>
          <Profile className="w-44" />
        </div>
        <div className="w-px h-6 bg-slate-200"></div>
        <div className="text-lg text-slate-900 leading-tight font-semibold">
          01:08
        </div>
      </div>

      <div className="flex items-center  relative gap-3">
        <div className="text-lg text-orange-600 leading-tight font-semibold">
          00:08
        </div>
        <div className="w-px h-6 bg-slate-200"></div>
        <div className="relative">
          <div className=" flex items-center justify-center shadow absolute w-5 h-5 rounded-full -top-1 -left-1 bg-white ">
            <CrossIcon />
          </div>
          <Profile className="w-44" />
        </div>
      </div>
    </div>
  );
}
// font-family: Inter;
// font-size: 18px;
// font-style: normal;
// font-weight: 600;
// line-height: normal;
