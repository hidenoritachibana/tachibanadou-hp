
import React from "react";

type PostSection =
  | { type: "intro"; text: string }
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; items: string[] }
  | { type: "image"; src: string; alt?: string }
  | { type: "code"; language: string; code: string }
  | { type: "quote"; text: string }
  | { type: "conclusion"; text: string };

export type { PostSection };

export function PostContentRenderer({ content }: { content: PostSection[] }) {
  return (
    <div className="text-gray-800 space-y-6">
      {content.map((section, index) => {
        switch (section.type) {
          case "intro":
            return <p key={index} className="text-lg">{section.text}</p>;

          case "heading":
            return <h2 key={index} className="text-xl font-bold border-b pb-1">{section.text}</h2>;

          case "paragraph":
            return <p key={index}>{section.text}</p>;

          case "list":
            return (
              <ul key={index} className="list-disc list-inside space-y-1">
                {section.items.map((item, i) => <li key={i}>{item}</li>)}
              </ul>
            );

          case "image":
            return (
              <div key={index}>
                <img src={section.src} alt={section.alt || "image"} className="rounded shadow" />
              </div>
            );

          case "code":
            return (
              <pre key={index} className="bg-gray-800 text-white p-4 rounded overflow-x-auto">
                <code>{section.code}</code>
              </pre>
            );

          case "quote":
            return <blockquote key={index} className="border-l-4 border-blue-500 pl-4 italic">{section.text}</blockquote>;

          case "conclusion":
            return (
              <div key={index} className="bg-gray-100 border-l-4 border-gray-400 p-4 rounded">
                <strong>まとめ：</strong> {section.text}
              </div>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}