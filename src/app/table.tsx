"use client";

import { useEffect, useState } from "react";

type Contribution = {
  count: number;
  name: string;
  month: string;
  day: number;
  year: number;
  level: string | number;
} | null;

type Row = Contribution[];

export type Table = Row[];

const colors = ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"];

export function Contributions() {
  const [table, setTable] = useState<Table | null>(null);

  useEffect(() => {
    fetch(
      "https://github-contributions-m3410aq9x-adomaitisc.vercel.app/adomaitisc/2021"
    )
      .then((res) => res.json())
      .then((data) => setTable(data));
  }, []);
  return (
    <>
      {table && (
        <table className="w-[768px]">
          {table.length === 0 ? (
            <p className="text-sm text-zinc-700">
              It was not possible to render the contribution table at the moment
            </p>
          ) : (
            <tbody className="flex flex-col gap-1 w-full">
              {table.map((row) => (
                <tr key={Math.random()} className="flex gap-1 w-full">
                  {row.map((contribution) => (
                    <td
                      key={Math.random()}
                      className="flex-1 aspect-square rounded-sm border border-black/5"
                      style={
                        !contribution
                          ? { opacity: 0.1 }
                          : {
                              backgroundColor:
                                colors[contribution.level as number],
                            }
                      }
                    ></td>
                  ))}
                </tr>
              ))}
            </tbody>
          )}
        </table>
      )}
    </>
  );
}
