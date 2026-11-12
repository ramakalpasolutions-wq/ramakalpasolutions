import { allPosts, getPost } from "@/lib/blog";
import { ogImage } from "@/lib/og";

export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

// Per-post Open Graph image with the article title.
export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  return ogImage({ eyebrow: "Ramakalpa Blog", title: post?.title ?? "Ramakalpa Solutions Blog" });
}
