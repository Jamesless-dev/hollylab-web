import { cn } from "../../lib/utils";

export default function Container({ className, children }) {
  return <div className={cn("mx-auto w-full max-w-page px-6 md:px-10", className)}>{children}</div>;
}
