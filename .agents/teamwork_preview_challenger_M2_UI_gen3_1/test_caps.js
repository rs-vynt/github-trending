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

console.log(resolve("HTTP://example.com/img.png", "owner/repo", "main"));
console.log(resolve("HTTPS://example.com/img.png", "owner/repo", "main"));
console.log(resolve("DATA:image/png;base64,123", "owner/repo", "main"));
