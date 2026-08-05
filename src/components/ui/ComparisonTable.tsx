import { Check, Minus } from "lucide-react";
import { ComparisonRow } from "@/content/offers";

function Cell({ value }: { value: string }) {
  if (value === "Inclus") {
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-black">
        <Check className="h-4 w-4 shrink-0 text-orange" aria-hidden="true" />
        Inclus
      </span>
    );
  }
  if (value === "Non inclus") {
    return (
      <span className="inline-flex items-center gap-1.5 text-steel">
        <Minus className="h-4 w-4 shrink-0" aria-hidden="true" />
        Non inclus
      </span>
    );
  }
  return <span className="text-black/80">{value}</span>;
}

export function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="overflow-x-auto rounded-2xl border border-border">
      <table className="w-full min-w-[720px] border-collapse text-sm">
        <thead>
          <tr className="bg-[#F7F8FA]">
            <th className="sticky left-0 z-10 bg-[#F7F8FA] px-5 py-4 text-left font-heading text-sm font-semibold text-black">
              Fonctionnalité
            </th>
            <th className="px-5 py-4 text-left font-heading text-sm font-semibold text-black">Offre Pilote</th>
            <th className="px-5 py-4 text-left font-heading text-sm font-semibold text-orange">Offre Standard</th>
            <th className="px-5 py-4 text-left font-heading text-sm font-semibold text-black">Pack RDV Premium</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.feature} className={index % 2 === 1 ? "bg-[#FBFBFC]" : "bg-white"}>
              <th
                scope="row"
                className={`sticky left-0 z-10 px-5 py-3.5 text-left font-medium text-black ${
                  index % 2 === 1 ? "bg-[#FBFBFC]" : "bg-white"
                }`}
              >
                {row.feature}
              </th>
              <td className="px-5 py-3.5">
                <Cell value={row.pilote} />
              </td>
              <td className="bg-orange/5 px-5 py-3.5">
                <Cell value={row.standard} />
              </td>
              <td className="px-5 py-3.5">
                <Cell value={row.premium} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
