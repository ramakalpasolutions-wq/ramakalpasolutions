import type { MDXComponents } from "mdx/types";
import Image, { type ImageProps } from "next/image";
import Link from "next/link";

// Blog pages render their own H1 from the post title, so a `#` heading in
// MDX is demoted to H2 to keep one H1 per page.
const components: MDXComponents = {
  h1: (props) => <h2 {...props} />,
  a: ({ href = "", children, ...rest }) =>
    href.startsWith("/") ? (
      <Link href={href} {...rest}>
        {children}
      </Link>
    ) : (
      <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>
        {children}
      </a>
    ),
  img: (props) => (
    <Image
      sizes="(min-width: 768px) 720px, 100vw"
      style={{ width: "100%", height: "auto", borderRadius: 14 }}
      width={1200}
      height={675}
      {...(props as ImageProps)}
      alt={props.alt ?? ""}
    />
  ),
};

export function useMDXComponents(): MDXComponents {
  return components;
}
