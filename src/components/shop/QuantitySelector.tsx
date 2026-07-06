"use client";

type Props = {
  value: number;
  onChange: (value: number) => void;
};

export default function QuantitySelector({ value, onChange }: Props) {
  return (
    <div className="inline-flex items-center overflow-hidden rounded-xl border border-gray-300 bg-white">
      <button
        type="button"
        className="h-11 w-11 text-xl transition hover:bg-gray-100"
        onClick={() => onChange(Math.max(1, value - 1))}
      >
        −
      </button>

      <div className="flex h-11 w-12 items-center justify-center font-bold">
        {value}
      </div>

      <button
        type="button"
        className="h-11 w-11 text-xl transition hover:bg-gray-100"
        onClick={() => onChange(value + 1)}
      >
        +
      </button>
    </div>
  );
}
