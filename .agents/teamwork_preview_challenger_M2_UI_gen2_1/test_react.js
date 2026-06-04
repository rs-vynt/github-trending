import React from 'react';
import { renderToString } from 'react-dom/server';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';

function Test() {
  const markdown = `
![img1](../img.png)
![img2](./img.png)
![img3](/img.png)
![img4](../../img.png)
![img5](docs/../img.png)
![img6](%2e%2e%2fimg.png)
![img7](https://example.com/img.png)
![img8](//example.com/img.png)
  `;

  return React.createElement(ReactMarkdown, {
    urlTransform: (url) => url,
    remarkPlugins: [remarkGfm],
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
      img({ node, src, ...props }) {
        let finalSrc = typeof src === "string" ? src : "";
        if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
          if (finalSrc.startsWith("//")) {
            finalSrc = "https:" + finalSrc;
          } else {
            const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
            const baseUrl = "https://raw.githubusercontent.com/owner/repo/main/";
            finalSrc = baseUrl + cleanPath;
          }
        }
        return React.createElement('img', { ...props, src: finalSrc });
      }
    }
  }, markdown);
}

console.log(renderToString(React.createElement(Test)));
