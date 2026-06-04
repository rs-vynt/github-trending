import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeSanitize, { defaultSchema } from 'rehype-sanitize';
import rehypeStringify from 'rehype-stringify';

const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeSanitize, {
    ...defaultSchema,
    protocols: {
      ...defaultSchema.protocols,
      src: ['http', 'https', 'data']
    }
  })
  .use(rehypeStringify);

async function test() {
  const file = await processor.process('![alt](HTTP://example.com/img.png)');
  console.log(String(file));
}

test();
