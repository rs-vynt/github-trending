import React from 'react';
import { renderToString } from 'react-dom/server';
import { TabsClient } from '../../src/components/ui/TabsClient';

console.log(renderToString(
  <TabsClient 
    summary="![Alt](../img.png) ![Alt](docs/../../img.png) ![Alt](..\\img.png)"
    readmeTranslated=""
    readmeOriginal=""
    repoFullName="owner/repo"
    branch="main"
  />
));
