"use client";
import type { PeriodFiltersProps } from "@/types/interfaces/ranking";

const periods: Array<{
  value: "week" | "month" | "year";
  label: string;
}> = [
  { value: "week", label: "Tuần" },
  { value: "month", label: "Tháng" },
  { value: "year", label: "Năm" },
];

export default function PeriodFilters({
  activePeriod,
  onPeriodChange,
}: PeriodFiltersProps) {
  return (
    <div className="flex items-center gap-3 mb-6">
      {periods.map((period) => (
        <button
          key={period.value}
          onClick={() => onPeriodChange(period.value)}
          className={`px-4 py-2 rounded-lg transition-colors text-sm sm:text-base ${
            activePeriod === period.value
              ? "bg-[#1e2128] text-white font-semibold"
              : "bg-[#282b32] text-[#abafbb] hover:bg-[#2a2d36] hover:text-white"
          }`}
        >
          {period.label}
        </button>
      ))}
    </div>
  );
}

