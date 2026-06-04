let finalSrc = "%5C/"; // this is what ReactMarkdown gives for `![alt](\\/)`

let decodedSrc = finalSrc;
try {
  decodedSrc = decodeURIComponent(finalSrc);
} catch (e) {
  decodedSrc = finalSrc.replace(/%5C/gi, '\\');
}
const posixPath = decodedSrc.replace(/\\/g, '/');

console.log("posixPath:", posixPath);

const dummyBase = 'http://dummy.local/';
try {
  const normalizedUrl = new URL(posixPath, dummyBase);
  console.log("Success:", normalizedUrl.href);
} catch (e) {
  console.error("CRASH!!!", e.message);
}
