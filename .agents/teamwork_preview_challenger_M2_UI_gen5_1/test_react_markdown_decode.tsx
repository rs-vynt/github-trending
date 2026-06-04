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
        let finalSrc = src || "";
        console.log("Original src:", finalSrc);
        
        // Let's decode it
        try {
          finalSrc = decodeURIComponent(finalSrc);
        } catch (e) {}
        console.log("Decoded src:", finalSrc);
        
        const posixPath = finalSrc.replace(/\\/g, '/');
        console.log("Posix path:", posixPath);
        return <img src={posixPath} />;
      }
    }}
  >
    {"![Alt](..\\img.png)"}
  </ReactMarkdown>
);
