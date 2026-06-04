import React from 'react';
import { renderToString } from 'react-dom/server';
import { TabsClient } from '../../src/components/ui/TabsClient';

console.log(renderToString(
  <TabsClient 
    summary="![Alt](HTTP://example.com/img.png)"
    readmeTranslated=""
    readmeOriginal=""
    repoFullName="owner/repo"
    branch="main"
  />
));
