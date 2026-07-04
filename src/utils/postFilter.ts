import type { CollectionEntry } from "astro:content";

/**
 * Determines whether a post is eligible to be listed/rendered.
 *
 * Excludes drafts. Scheduled-post gating is intentionally omitted — posts are
 * published as soon as they are non-draft.
 */
export function postFilter({ data }: CollectionEntry<"posts">) {
  return !data.draft;
}
