import React from "react";

type Props = {
  label: string;
  value: string;
};

export default function Parameter({ label, value }: Props) {
  return (
    <div className="flex justify-between items-center border bg-neutral-100 border-neutral-200 px-6 py-3 md:flex-col md:items-start md:gap-[0.375rem] md:p-4">
      <span className="text-neutral-500 font-bold text-xs uppercase">{label}</span>
      <span className="text-white text-xl uppercase font-antonio md:text-2xl">{value}</span>
    </div>
  );
}
