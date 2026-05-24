import sharp from "sharp";
import { resolve } from "path";

const input = resolve("public/logo1.png");
const output = resolve("public/logo1.png");
const TOLERANCE = 40; // colour distance threshold

const image = sharp(input).ensureAlpha();
const { data, info } = await image.raw().toBuffer({ resolveWithObject: true });

const { width, height, channels } = info; // channels = 4 (RGBA)

// Sample background colour from the four corners
function getPixel(x, y) {
  const i = (y * width + x) * channels;
  return [data[i], data[i + 1], data[i + 2], data[i + 3]];
}

const corners = [
  getPixel(0, 0),
  getPixel(width - 1, 0),
  getPixel(0, height - 1),
  getPixel(width - 1, height - 1),
];

// Average the corner colours to get the background colour
const bg = corners.reduce(
  (acc, [r, g, b]) => [acc[0] + r, acc[1] + g, acc[2] + b],
  [0, 0, 0]
).map((v) => Math.round(v / corners.length));

console.log(`Detected background colour: rgb(${bg.join(", ")})`);

// Replace pixels within tolerance of background colour with transparent
for (let i = 0; i < data.length; i += channels) {
  const r = data[i], g = data[i + 1], b = data[i + 2];
  const dist = Math.sqrt(
    (r - bg[0]) ** 2 + (g - bg[1]) ** 2 + (b - bg[2]) ** 2
  );
  if (dist < TOLERANCE) {
    data[i + 3] = 0; // set alpha to transparent
  }
}

await sharp(Buffer.from(data), { raw: { width, height, channels } })
  .png()
  .toFile(output);

console.log(`Saved transparent PNG to ${output}`);
