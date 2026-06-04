function resolve(finalSrc, repoFullName, branch) {
  if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
    if (finalSrc.startsWith("//")) {
      finalSrc = "https:" + finalSrc;
    } else {
      const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
      const branchName = branch || "main";
      const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`;
      finalSrc = `${baseUrl}${cleanPath}`;
    }
  }
  return finalSrc;
}

const urlStr = resolve("..\\img.png", "owner/repo", "main");
console.log("String:", urlStr);
console.log("Resolved:", new URL(urlStr).href);
