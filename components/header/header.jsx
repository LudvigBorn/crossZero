import Image from "next/image";
import logo from "./logo.svg";
import avatar from "./avatar.png";

export function Header() {
  return (
    <header className="flex h-24 px-8 items-center bg-white shadow-lg">
      <Image alt="logo" src={logo} className="w-40 h-14" />
      <div className="w-px h-8 bg-slate-200 mx-8" />
      <button className="w-44 bg-teal-600  text-white rounded-lg px-5 py-2 text-2xl leading-tight shadow-lg transition-colors hover:bg-teal-500">
        Играть
      </button>
      <button className="flex items-center w-48 h-12 ml-auto gap-2 text-start transition-colors text-teal-600 hover:text-teal-500 ">
        <Image alt="avatar" src={avatar} width={48} height={48} unoptimized />
        <div>
          <div className="text-lg leading-tight">Paromovevg</div>
          <div className="text-slate-400 text-xs leading-tight">
            Рейтинг: 1230
          </div>
        </div>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.18753 12.75C9.04368 12.75 8.89968 12.6951 8.78985 12.5852L3.16485 6.96022C2.94505 6.74043 2.94505 6.3845 3.16485 6.16485C3.38464 5.94519 3.74057 5.94505 3.96022 6.16485L9.18753 11.3922L14.4148 6.16485C14.6346 5.94505 14.9906 5.94505 15.2102 6.16485C15.4299 6.38464 15.43 6.74057 15.2102 6.96022L9.58522 12.5852C9.47539 12.6951 9.33139 12.75 9.18753 12.75Z"
            fill="currentColor"
          />
        </svg>
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
