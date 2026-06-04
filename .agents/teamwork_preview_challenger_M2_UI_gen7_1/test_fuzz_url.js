const fc = require('fast-check');

fc.assert(
  fc.property(fc.string(), (s) => {
    try {
      new URL(s, 'http://dummy.local/');
    } catch (e) {
      // Return false if it crashes WITHOUT having a protocol.
      // We know protocols like "http://" crash. But what if it doesn't have a colon?
      if (!s.includes(':')) {
        console.log("CRASH ON RELATIVE:", s);
        return false;
      }
    }
    return true;
  }),
  { numRuns: 100000 }
);
console.log("ALL OK");
