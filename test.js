import Spinner, { spinners } from "./index.js";

const spin = new Spinner("Fetching data...");

spin.setStyles(spinners.pulse);
spin.start();

setTimeout(() => {
  spin.updateText("Still working...");
}, 2000);

setTimeout(() => {
  spin.stop("Completed successfully!");
}, 4000);
