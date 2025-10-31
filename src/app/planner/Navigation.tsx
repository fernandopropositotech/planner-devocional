"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const meses = [
  "janeiro",
  "fevereiro",
  "marco",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
];

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav style={{ padding: "16px", borderBottom: "1px solid #ddd" }}>
      <ul style={{ display: "flex", gap: "12px", listStyle: "none", padding: 0 }}>
        {meses.map((mes) => {
          const active = pathname.includes(`/planner/${mes}`);

          return (
            <li key={mes}>
              <Link
                href={`/planner/${mes}`}
                style={{
                  textTransform: "capitalize",
                  padding: "8px 12px",
                  borderRadius: "6px",
                  fontSize: "14px",
                  background: active ? "#7b68ee" : "#eee",
                  color: active ? "#fff" : "#333",
                  textDecoration: "none",
                }}
              >
                {mes}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
