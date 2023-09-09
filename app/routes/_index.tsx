import type { V2_MetaFunction } from "@remix-run/cloudflare";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "Generate yaml" },
    { name: "description", content: "generate yaml!" },
  ];
};

export default function Index() {
  const text = `version: 2
  updates:
  - package-ecosystem: "npm"
    directory: "/"
    schedule:
    interval: "monthly"
    groups:
    dependencies:
    patterns:
  - "*"`
  console.log(text)
  return (
    <div className="container h-screen flex flex-row">
      <div className="flex-1">01</div>
      <div className="flex-1">
        <textarea className="whitespace-pre w-full h-full" >
          {text}
        </textarea>
      </div>
    </div>
  );
}
