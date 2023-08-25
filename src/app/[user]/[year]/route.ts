import { parseHTML } from "linkedom";

export async function GET(
  req: Request,
  {
    params,
  }: {
    params: {
      user: string;
      year: string;
    };
  }
) {
  if (params.year === undefined) {
    params.year = new Date().getFullYear().toString();
  }

  // format the github url
  const githubApiUrl = `https://github.com/users/${params.user}/contributions?from=${params.year}-12-01&to=${params.year}-12-31`;

  // get html
  let html;
  try {
    html = await (await fetch(githubApiUrl)).text();
  } catch (e) {
    throw new Error("Error fetching data from GitHub");
  }

  // parse
  const { document } = parseHTML(html);

  // make json response
  const contributions = [];

  const rows: NodeListOf<HTMLTableRowElement> | null =
    document.querySelectorAll("tbody > tr");

  if (rows === null) throw new Error("No rows found");

  for (const row of Array.from(rows)) {
    const cells: NodeListOf<HTMLDataElement> = row.querySelectorAll(
      "td:not(.ContributionCalendar-label)"
    );

    const weekContributions = [];

    for (const cell of Array.from(cells)) {
      const data = cell.innerText.split(" ");

      if (data.length > 1) {
        // make a new week contribution
        weekContributions.push({
          count: data[0] === "No" ? 0 : +data[0],
          name: data[3].replace(",", ""),
          month: data[4],
          day: +data[5].replace(",", ""),
          year: +data[6],
          level: cell.dataset.level,
        });
      } else {
        weekContributions.push(null);
      }
    }

    contributions.push(weekContributions);
  }

  return new Response(JSON.stringify(contributions), {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type, Authorization",
    },
  });
}
