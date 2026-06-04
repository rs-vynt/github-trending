const tests = [
  "../img.png",
  "./img.png",
  "/img.png",
  "../../img.png",
  "docs/../img.png",
  "img.png",
  "folder/img.png",
  "/folder/img.png",
  "../folder/img.png"
];

for (const src of tests) {
  let finalSrc = src;
  const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
  const baseUrl = `https://raw.githubusercontent.com/owner/repo/main/`;
  finalSrc = `${baseUrl}${cleanPath}`;
  console.log(`${src} => ${finalSrc}`);
}
