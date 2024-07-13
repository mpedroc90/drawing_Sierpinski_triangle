async function* getNextPoint(hash, stop = () => false, isPause = () => false) {
  let currentPoint = [234, 243];
  while (!stop()) {
    const vertex = Math.floor(Math.random() * 3);

    const nextPoint = [
      (hash[vertex][0] + currentPoint[0]) / 2,
      (hash[vertex][1] + currentPoint[1]) / 2,
    ];

    if (!isPause()) {
      yield await nextPoint;
    }

    currentPoint = nextPoint;
    await new Promise((r) => this.setTimeout(r, 0));
  }
}
