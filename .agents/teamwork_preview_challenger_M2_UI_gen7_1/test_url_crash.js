const strings = [
  "http://", // throws
  "https://", // throws
  "foo://", // does not throw
  "a:", // does not throw
  "a://", // does not throw
  "://", // does not throw
  ":", // does not throw
];

for (const s of strings) {
  try {
    new URL(s, "http://dummy.local/");
  } catch (e) {
    console.log("CRASH:", s);
  }
}
