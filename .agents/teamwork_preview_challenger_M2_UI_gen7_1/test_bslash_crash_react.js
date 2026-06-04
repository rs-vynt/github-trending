import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

const md = '![alt](\\\\/)'; // \\/ becomes \/ in markdown AST

const el = React.createElement(ReactMarkdown, {
  rehypePlugins: [
    rehypeRaw,
    [rehypeSanitize, {
      ...defaultSchema,
      protocols: {
        ...defaultSchema.protocols,
        src: ['http', 'https', 'data']
      }
    }]
  ],
  components: {
    img: ({ node, src, ...props }) => {
      let finalSrc = src || "";
      if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
        if (finalSrc.startsWith("//")) {
          finalSrc = "https:" + finalSrc;
        } else {
          let decodedSrc = finalSrc;
          try { decodedSrc = decodeURIComponent(finalSrc); } catch (e) { decodedSrc = finalSrc.replace(/%5C/gi, '\\\\'); }
          const posixPath = decodedSrc.replace(/\\\\/g, '/');
          const dummyBase = 'http://dummy.local/';
          
          const normalizedUrl = new URL(posixPath, dummyBase); // WILL IT CRASH?
          
          const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
          finalSrc = "base/" + cleanPath;
        }
      }
      return React.createElement('img', { src: finalSrc, ...props });
    }
  }
}, md);

try {
  console.log("Rendering...");
  renderToString(el);
  console.log("Success!");
} catch (e) {
  console.log("CRASHED:", e.message);
}
