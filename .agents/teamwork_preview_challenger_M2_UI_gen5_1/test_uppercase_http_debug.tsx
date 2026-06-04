import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

renderToString(
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[
      rehypeRaw,
      [rehypeSanitize, {
        ...defaultSchema,
        protocols: {
          ...defaultSchema.protocols,
          src: ['http', 'https', 'data']
        }
      }]
    ]}
    components={{
      img({ src }) {
        console.log("SRC in custom component:", src);
        return <img src={src} />;
      }
    }}
  >
    {"![Alt](HTTP://example.com/img.png)"}
  </ReactMarkdown>
);
