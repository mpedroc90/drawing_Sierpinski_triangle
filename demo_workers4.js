self.addEventListener("message", function (message) {
  if (!message) return;

  hash = message.data;

  (async () => {
    let currentPoint = [234, 243];
    for (let i = 0; i < 10000000; i++) {
      const vertex = Math.floor(Math.random() * 3);

      const nextPoint = [
        (hash[vertex][0] + currentPoint[0]) / 2,
        (hash[vertex][1] + currentPoint[1]) / 2,
      ];

      self.postMessage(nextPoint);
      currentPoint = nextPoint;
      await new Promise((r) => this.setTimeout(r, 10));
    }
  })();
});
