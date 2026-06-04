function resolve(finalSrc, repoFullName, branch) {
  if (finalSrc && !finalSrc.startsWith("http") && !finalSrc.startsWith("data:")) {
    if (finalSrc.startsWith("//")) {
      finalSrc = "https:" + finalSrc;
    } else {
      // Strip leading traversals (../, ./, /) so we don't pop the branch name
      const cleanPath = finalSrc.replace(/^(?:\.\.\/|\.\/|\/)+/, "");
      const branchName = branch || "main";
      const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`;
      finalSrc = `${baseUrl}${cleanPath}`;
    }
  }
  return finalSrc;
}

console.log(resolve("../img.png", "owner/repo", "main"));
console.log(resolve("./img.png", "owner/repo", "main"));
console.log(resolve("/img.png", "owner/repo", "main"));
console.log(resolve("../../img.png", "owner/repo", "main"));
console.log(resolve("docs/../img.png", "owner/repo", "main"));
