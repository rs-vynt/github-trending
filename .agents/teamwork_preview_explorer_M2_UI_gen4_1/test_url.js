const testCases = [
  "../img.png",
  "./img.png",
  "/img.png",
  "docs/../../img.png",
  "..\\img.png",
  "docs\\..\\..\\img.png",
  "img.png?raw=true#hash",
  "foo/bar/../img.png"
];

for (let tc of testCases) {
  let posixPath = tc.replace(/\\/g, '/');
  let url = new URL(posixPath, 'http://dummy.local/');
  let cleanPath = url.pathname.replace(/^\//, '') + url.search + url.hash;
  console.log(`Original: ${tc} -> Clean: ${cleanPath}`);
}
