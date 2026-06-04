import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeStringify from "rehype-stringify";

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype, { allowDangerousHtml: true })
  .use(rehypeRaw)
  .use(rehypeSanitize, {
    ...defaultSchema,
    protocols: {
      ...defaultSchema.protocols,
      src: ['http', 'https', 'data']
    }
  })
  .use(rehypeStringify);

const markdown = `
![alt](../img.png)
![alt](..%5Cimg.png)
![alt](javascript:alert(1))
`;

processor.process(markdown).then(v => console.log(String(v)));
