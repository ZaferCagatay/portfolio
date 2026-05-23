const AppFallback = () => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#010103] px-5 text-white">
      <div className="flex max-w-md flex-col items-center gap-4 text-center">
        <span className="canvas-loader" aria-hidden="true" />
        <h1 className="text-2xl font-semibold">Loading failed</h1>
        <p className="text-sm text-white-600">
          The site could not finish loading on this attempt.
        </p>
        <button
          type="button"
          className="rounded-md bg-black-300 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black-500"
          onClick={handleReload}
        >
          Reload
        </button>
      </div>
    </main>
  );
};

export default AppFallback;
