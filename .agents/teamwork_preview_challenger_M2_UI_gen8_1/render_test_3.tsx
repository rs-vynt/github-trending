import React from 'react';
import ReactDOMServer from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

const testMarkdown = "![alt](\\\\/)"; // This literal string matches ![alt](\\/)

const html = ReactDOMServer.renderToString(
  <ReactMarkdown
    remarkPlugins={[remarkGfm]}
    rehypePlugins={[rehypeRaw, rehypeSanitize]}
    components={{
      img({ src, ...props }) {
        console.log("react-markdown parsed src as:", src);
        
        let finalSrc = src;
        // copy logic from TabsClient
        if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
            if (finalSrc.startsWith("//")) {
            finalSrc = "https:" + finalSrc;
            } else {
            let decodedSrc = finalSrc;
            try {
                decodedSrc = decodeURIComponent(finalSrc);
            } catch (e) {
                decodedSrc = finalSrc.replace(/%5C/gi, '\\');
            }
            console.log("decodedSrc:", decodedSrc);
            const posixPath = decodedSrc.replace(/\\/g, '/');
            console.log("posixPath:", posixPath);
            
            try {
                const dummyBase = 'http://dummy.local/';
                const normalizedUrl = new URL(posixPath, dummyBase);
                console.log("normalizedUrl:", normalizedUrl.href);
                const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
                const baseUrl = `https://raw.githubusercontent.com/test/repo/main/`;
                finalSrc = `${baseUrl}${cleanPath}`;
            } catch (err) {
                console.log("Caught error from new URL:", err.message);
                finalSrc = "";
            }
            }
        }
        return <img {...props} src={finalSrc || src} />;
      }
    }}
  >
    {testMarkdown}
  </ReactMarkdown>
);

console.log("Final HTML:", html);
