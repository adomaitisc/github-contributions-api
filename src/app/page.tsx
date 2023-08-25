import Link from "next/link";
import { Contributions } from "./table";

const currentYear = new Date().getFullYear().toString();

export const revalidate = 60;

export default async function Home() {
  const rawApiUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}/<username>/<year>`
    : `http://localhost:3000/<username>/<year>`;

  const apiUrl = rawApiUrl
    .replace("<username>", "adomaitisc")
    .replace("<year>", currentYear);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24 px-8 md:p-24 bg-zinc-100">
      <div className="max-w-3xl w-full mx-auto flex flex-col items-start gap-4">
        <h1 className="text-xl font-semibold text-zinc-900">
          A simple GitHub contributions API
        </h1>
        <p className="text-zinc-700">
          Introducing my first API built on Next.js: a convenient way to access
          GitHub contributions via a public API. Simplifying the process, this
          API connects developers with their GitHub activity, enabling an easy
          display of your contribution history. Great for howing work and
          progress on personal websites.
        </p>
        <div className="h-[0.5px] bg-zinc-300 w-full" />
        <div className="overflow-scroll max-w-3xl w-full">
          <Contributions url={apiUrl} />
        </div>
        <div className="h-[0.5px] bg-zinc-300 w-full" />
        <h1 className="text-xl font-semibold text-zinc-900">Fetching</h1>
        <p className="text-zinc-700">
          It is as simple as fetching the following URL with your desired
          parameters for user and year.
        </p>
        <div className="border-[0.5px] border-zinc-300 rounded-md w-full">
          <code className="text-green-500 text-sm p-2">
            GET <span className="text-zinc-700">{rawApiUrl}</span>
          </code>
        </div>
        <h1 className="text-xl font-semibold text-zinc-900">Response</h1>
        <p className="text-zinc-700">
          The response type is very straightforward, it is an array of rows,
          where we have an array of contributions. Each contribution is an
          object.
        </p>
        <div className="border-[0.5px] border-zinc-300 rounded-md w-full">
          <pre>
            <code className="text-zinc-700 text-sm p-2">
              type Contribution = &#123;
              <br />
              {"  "}count: number;
              <br />
              {"  "}name: string;
              <br />
              {"  "}month: string;
              <br />
              {"  "}day: number;
              <br />
              {"  "}year: number;
              <br />
              {"  "}level: string; &#125; | null;
              <br />
              <br /> type Row = Contribution[];
              <br />
              <br /> type Response = Row[];
            </code>
          </pre>
        </div>
        <h1 className="text-xl font-semibold text-zinc-900">Example</h1>
        <Link
          href="/adomaitisc/2021"
          target="_blank"
          className="text-green-500 hover:underline"
        >
          Example component can be found on the public repository
        </Link>
        <div className="h-[0.5px] bg-zinc-300 w-full" />
        <div className="flex justify-between w-full text-sm text-zinc-500">
          <p>Made by Cauã Adomaitis</p>
          <Link
            href="https://adomaitisc.com"
            className="text-green-500 hover:underline"
          >
            Visit my website
          </Link>
        </div>
      </div>
    </main>
  );
}
