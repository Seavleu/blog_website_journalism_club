import InsightRoll from "@/src/components/About/InsightRoll";


const insights = [
  "Journalsim Club - AIEP",
  "Established Year 2023",
  "A group of passionate students",
  "We are doers",
  "All you need is here",
  "Stay tune for more updates",
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
