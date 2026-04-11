import { type CollectionEntry } from "astro:content";
import faviconOgImage from "./og-templates/favicon";
import postOgImage from "./og-templates/post";
import siteOgImage from "./og-templates/site";
import { svgBufferToPngBuffer } from "./svgToPng";

export async function generateOgImageForPost(post: CollectionEntry<"blog">) {
  const svg = await postOgImage(post);
  return svgBufferToPngBuffer(svg);
}

export async function generateOgImageForSite() {
  const svg = await siteOgImage();
  return svgBufferToPngBuffer(svg);
}

export async function generateFaviconImage() {
  const svg = await faviconOgImage();
  return svgBufferToPngBuffer(svg);
}
