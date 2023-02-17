import React from "react";

type Props = {
  label: string;
  value: string;
};

export default function Parameter({ label, value }: Props) {
  return (
    <div className="flex justify-between items-center border border-neutral-200 px-6 py-3">
      <span className="text-neutral-500 font-bold text-xs uppercase">{label}</span>
      <span className="text-white text-xl uppercase font-antonio">{value}</span>
    </div>
  );
}
