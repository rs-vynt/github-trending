function resolveUrl(src) {
  const cleanPath = src.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
  const baseUrl = `https://raw.githubusercontent.com/owner/repo/main/`;
  return `${baseUrl}${cleanPath}`;
}

const tests = [
  "./image.png",
  "../image.png",
  "../../image.png",
  "/image.png",
  "image.png",
  "docs/../image.png",
  "../../docs/image.png",
  "images/../../icon.png"
];

tests.forEach(t => {
  const url = resolveUrl(t);
  console.log(`${t} -> ${url}`);
});
