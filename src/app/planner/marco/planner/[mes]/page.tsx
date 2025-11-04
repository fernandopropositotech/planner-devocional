"use client"
import Link from "next/link"

export default function DiasMes({ params }: { params: { mes: string } }) {
  const dias = Array.from({ length: 31 }, (_, i) => i + 1)

  return (
    <div className="min-h-screen bg-slate-50 p-6 flex flex-col items-center">
      <h1 className="text-2xl font-serif mb-4 text-gray-700 capitalize">
        {params.mes}
      </h1>

      <div className="grid grid-cols-5 gap-3">
        {dias.map((dia) => (
          <Link
            key={dia}
            href={`/planner/${params.mes}/${dia}`}
            className="bg-white rounded-2xl shadow text-gray-700 py-3 text-center hover:bg-slate-100"
          >
            {dia}
          </Link>
        ))}
      </div>
    </div>
  )
}
