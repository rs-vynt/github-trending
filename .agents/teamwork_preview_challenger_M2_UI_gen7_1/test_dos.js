import { URL } from 'url';

function resolve(finalSrc) {
  if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
    if (finalSrc.startsWith("//")) {
      return "https:" + finalSrc;
    } else {
      let decodedSrc = finalSrc;
      try {
        decodedSrc = decodeURIComponent(finalSrc);
      } catch (e) {
        decodedSrc = finalSrc.replace(/%5C/gi, '\\\\');
      }
      const posixPath = decodedSrc.replace(/\\\\/g, '/');
      
      const dummyBase = 'http://dummy.local/';
      const normalizedUrl = new URL(posixPath, dummyBase); // MAY THROW!
      
      const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;
      return "base/" + cleanPath;
    }
  }
  return finalSrc;
}

try {
  console.log("Resolving HTTP://");
  resolve("HTTP://");
  console.log("OK");
} catch (e) {
  console.error("CAUGHT CRASH:", e.message);
}

try {
  console.log("Resolving wss://");
  resolve("wss://");
  console.log("OK");
} catch (e) {
  console.error("CAUGHT CRASH wss:", e.message);
}

try {
  console.log("Resolving ws://");
  resolve("ws://");
  console.log("OK");
} catch (e) {
  console.error("CAUGHT CRASH ws:", e.message);
}
