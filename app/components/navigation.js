export default function Navigation() {
  return (
    <nav>
      <div className="flex items-center justify-between max-w-7xl p-5 md:p-10">
        <div>
          <img
            src="/brand/logo.png"
            alt="Rotini"
            className="h-5 md:h-8 object-contain mx-auto"
          />
        </div>
        <div className="ml-auto">
          <span className="opacity-60">Coming soon</span>
        </div>
      </div>
    </nav>
  );
}
