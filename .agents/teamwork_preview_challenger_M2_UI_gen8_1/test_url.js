let finalSrc = "%5C/";

let decodedSrc = finalSrc;
try {
  decodedSrc = decodeURIComponent(finalSrc);
} catch (e) {
  decodedSrc = finalSrc.replace(/%5C/gi, '\\');
}
const posixPath = decodedSrc.replace(/\\/g, '/');
console.log("posixPath:", posixPath);

try {
  const dummyBase = 'http://dummy.local/';
  const normalizedUrl = new URL(posixPath, dummyBase);
  console.log("normalizedUrl:", normalizedUrl.href);
  const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
  console.log("cleanPath:", cleanPath);
} catch (err) {
  console.error("Error thrown by new URL:", err.message);
}

// What if finalSrc is actually "\\/"
finalSrc = "\\/";
decodedSrc = finalSrc;
try {
  decodedSrc = decodeURIComponent(finalSrc);
} catch (e) {
  decodedSrc = finalSrc.replace(/%5C/gi, '\\');
}
posixPath2 = decodedSrc.replace(/\\/g, '/');
console.log("posixPath2:", posixPath2);

try {
  const dummyBase = 'http://dummy.local/';
  const normalizedUrl = new URL(posixPath2, dummyBase);
  console.log("normalizedUrl2:", normalizedUrl.href);
  const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
  console.log("cleanPath2:", cleanPath);
} catch (err) {
  console.error("Error thrown by new URL2:", err.message);
}

