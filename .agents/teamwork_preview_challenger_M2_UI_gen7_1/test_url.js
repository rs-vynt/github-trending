const urls = [
  "img.png",
  "/img.png",
  "./img.png",
  "../img.png",
  "../../img.png",
  "../..%5Cimg.png",
  "%5C..%5Cimg.png",
  "dir/img.png",
  "dir/../img.png",
  "dir/%5C..%5Cimg.png",
  "foo%20bar.png", // space encoded
];

for (const finalSrc of urls) {
  let decodedSrc = finalSrc;
  try {
    decodedSrc = decodeURIComponent(finalSrc);
  } catch (e) {
    decodedSrc = finalSrc.replace(/%5C/gi, '\\');
  }
  const posixPath = decodedSrc.replace(/\\/g, '/');
  
  const dummyBase = 'http://dummy.local/';
  const normalizedUrl = new URL(posixPath, dummyBase);
  
  const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;

  console.log(`${finalSrc} -> ${cleanPath}`);
}
