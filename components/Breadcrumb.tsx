import Link from "next/link";

type BreadcrumbProps = {
  current: string;
};

export default function Breadcrumb({ current }: BreadcrumbProps) {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-[1060px] px-6 pt-20 pb-10">
        <p className="text-sm text-slate-600">
          <Link
            href="/"
            className="transition-colors hover:text-sky-600"
          >
            Home
          </Link>

          <span className="mx-2 text-slate-400">›</span>

          <span>{current}</span>
        </p>
      </div>
    </div>
  );
}