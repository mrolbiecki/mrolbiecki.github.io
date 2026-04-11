import { writeFile } from "node:fs/promises";
import sharp from "sharp";
import faviconOgImage from "../src/utils/og-templates/favicon";
import siteOgImage from "../src/utils/og-templates/site";
import { svgBufferToPngBuffer } from "../src/utils/svgToPng";

const ogPng = svgBufferToPngBuffer(await siteOgImage());
await sharp(Buffer.from(ogPng))
  .jpeg({ quality: 92, mozjpeg: true })
  .toFile("public/ogimage.jpg");

const favPng = svgBufferToPngBuffer(await faviconOgImage());
await writeFile("public/favicon.png", favPng);

console.log("Wrote public/ogimage.jpg and public/favicon.png");
