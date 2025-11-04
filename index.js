class Spinner {
  constructor(text = "Loading...", frames) {
    this.text = text;
    this.frames = frames || ["·", "●", "·", "○"];
    this.interval = 80;
    this.timer = null;
    this.frameIndex = 0;
  }

  start(text) {
    if (text) this.text = text;
    process.stdout.write("\x1B[?25l"); // Hide cursor

    this.timer = setInterval(() => {
      const frame = this.frames[this.frameIndex];
      this.frameIndex = (this.frameIndex + 1) % this.frames.length;
      process.stdout.write(`\r${frame} ${this.text}`);
    }, this.interval);
  }

  updateText(text) {
    this.text = text;
  }

  stop(message = "Done!") {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    process.stdout.write(`\r✔ ${message}\n`);
    process.stdout.write("\x1B[?25h"); // Show cursor
  }

  fail(message = "Failed!") {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = null;
    }
    process.stdout.write(`\r✖ ${message}\n`);
    process.stdout.write("\x1B[?25h");
  }

  setStyles(customFrames) {
    this.frames = customFrames;
  }
}

/* Spinner presets that can be called and passed to the setStyles constructor for custom frames */
const spinners = {
  dots: ["⠋", "⠙", "⠸", "⠴", "⠦", "⠇"],
  line: ["-", "\\", "|", "/"],
  pulse: ["·", "●", "·", "○"],
};

export { Spinner as default, spinners };
