// Adds the `metadata` export that every blog post in /src/content/blog defines.
declare module "*.mdx" {
  export const metadata: import("@/lib/blog").PostFrontmatter;
}
