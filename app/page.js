export default function Page() {
  return (
    <main>
      <section>
        <div className="min-h-screen flex items-center justify-center bg-amber-50">
          <div className="flex flex-col gap-5">
            <img
              src="/brand/logo.png"
              alt="Rotini"
              className="h-10 object-contain mx-auto"
            />
            <h1>Powerful growth metrics for businesses built with Supabase.</h1>
          </div>
        </div>
      </section>
    </main>
  );
}
