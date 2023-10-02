export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="w-full max-w-5xl mx-auto">{children}</div>;
}
