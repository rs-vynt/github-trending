const strings = [
  "foo",
  "",
  " ",
  "!",
  "http://",
  "https://",
  "javascript:alert(1)",
  "file:///etc/passwd",
  "C:\\\\Windows\\\\System32",
  "\x00",
  "a".repeat(10000)
];

for (const s of strings) {
  try {
    new URL(s, "http://dummy.local/");
    console.log("OK:", s.substring(0, 20));
  } catch (e) {
    console.error("THROW:", s.substring(0, 20), e.message);
  }
}
