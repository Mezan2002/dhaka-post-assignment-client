import Image from "next/image";
import Link from "next/link";

const OpinionCard = ({ title, href = "#" }) => {
  return (
    <Link
      href={href}
      className="flex items-start gap-1 py-2.5 border-b border-gray-200 last:border-0 transition-colors"
    >
      <div className="mt-1 flex-shrink-0">
        <Image
          src="/icons/caret-right-solid-full.svg"
          alt="Caret right"
          width={16}
          height={16}
        />
      </div>
      <span className="text-sm tracking-tighter text-black leading-snug">
        {title}
      </span>
    </Link>
  );
};

export default OpinionCard;
