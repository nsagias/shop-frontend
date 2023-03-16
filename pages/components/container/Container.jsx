export default function Container({ children }) {
  return (
    <div className="max-w-3xl mx-auto py-0 px-4 space-y-8">
      {children}
    </div>
  );
}