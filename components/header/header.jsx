import Image from "next/image";
import logo from "./logo.svg";
import { Profile } from "../profile";
import { ArrowDownIcon } from "./icons/arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export function Header() {
  return (
    <header className="flex h-24 px-8 items-center bg-white shadow-lg">
      <Image alt="logo" src={logo} />
      <div className="w-px h-8 bg-slate-200 mx-8" />
      <UiButton className="w-44 " size="lg" variant="primary">
        Играть
      </UiButton>
      <button className="flex items-center ml-auto gap-2 text-teal-600">
        <Profile />
        <ArrowDownIcon />
      </button>
    </header>
  );
}

// color: var(--slate-400, #94A3B8);
// font-family: Inter;
// font-size: 12px;
// font-style: normal;
// font-weight: 400;
// line-height: normal;
