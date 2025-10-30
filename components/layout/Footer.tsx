export default function Footer() {
  return (
    <footer className="mt-12">
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-24 py-6">
        <p className="text-center text-xs text-primary-white-muted">
          © {new Date().getFullYear()} Yuvraj Prajapati. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
