import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { TabsClient } from '../../src/components/ui/TabsClient';

const testMarkdown = "This is a test image: ![alt](\\/)";

try {
  const html = ReactDOMServer.renderToString(
    <TabsClient 
      summary={testMarkdown} 
      readmeTranslated="" 
      readmeOriginal="" 
      repoFullName="test/repo" 
      branch="main" 
    />
  );
  console.log("Rendered successfully. Length:", html.length);
  if (html.includes('src="\\/"') || html.includes('src="%5C/"')) {
    console.log("Image src fallback verified in HTML output");
  } else {
    console.log("Image tag rendered differently. Let's find out how:");
    const imgMatch = html.match(/<img[^>]+src="([^"]+)"/);
    if (imgMatch) {
      console.log("Extracted img src:", imgMatch[1]);
    } else {
      console.log("No image tag found in HTML.");
    }
  }
} catch (e) {
  console.error("Component crashed during render:", e);
}
