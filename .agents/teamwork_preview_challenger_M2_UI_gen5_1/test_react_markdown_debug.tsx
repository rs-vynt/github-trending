import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

renderToString(
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw]}
    components={{
      img({ src }) {
        console.log("SRC received by component:", src);
        return <img src={src} />;
      }
    }}
  >
    {"![Alt](..\\img.png)"}
  </ReactMarkdown>
);
