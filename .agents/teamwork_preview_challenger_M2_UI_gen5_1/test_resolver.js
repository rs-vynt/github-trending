const dummyBase = 'http://dummy.local/';

function resolve(finalSrc, repoFullName = "owner/repo", branchName = "main") {
    // 1. Ensure we only use forward slashes
    const posixPath = finalSrc.replace(/\\/g, '/');
    // 2. Resolve the path against a dummy base root to natively normalize traversals
    const normalizedUrl = new URL(posixPath, dummyBase);
    // 3. Extract the resulting normalized pathname without the leading slash
    const cleanPath = normalizedUrl.pathname.replace(/^\//, '') + normalizedUrl.search + normalizedUrl.hash;

    const baseUrl = `https://raw.githubusercontent.com/${repoFullName}/${branchName}/`;
    return `${baseUrl}${cleanPath}`;
}

console.log("1. ../img.png ->", resolve("../img.png"));
console.log("2. docs/../../img.png ->", resolve("docs/../../img.png"));
console.log("3. ..\\img.png ->", resolve("..\\img.png"));
console.log("4. /absolute/path.png ->", resolve("/absolute/path.png"));
console.log("5. ./relative.png ->", resolve("./relative.png"));
console.log("6. subdir/../sibling.png ->", resolve("subdir/../sibling.png"));
