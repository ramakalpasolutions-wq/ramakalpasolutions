import { ViewTransition } from "react";

/**
 * Re-mounts on every navigation, so the page content fades/slides out and the
 * next page slides in (browser View Transitions; no effect where unsupported).
 * Animations are defined in globals.css (.page-enter / .page-exit).
 */
export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <ViewTransition enter="page-enter" exit="page-exit" default="none">
      <div>{children}</div>
    </ViewTransition>
  );
}
