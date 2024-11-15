export default function ServicesLayout({ children }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center">Our Services</h1>
      </header>
      <main>{children}</main>
    </div>
  );
}
