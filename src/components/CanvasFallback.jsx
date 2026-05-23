const CanvasFallback = ({
  className = 'h-full min-h-[16rem] w-full',
  loading = false,
  message = loading ? 'Loading...' : '3D view could not be loaded.',
  surface = true,
}) => {
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div
      className={`${className} flex items-center justify-center text-white ${
        surface ? 'bg-black-200/70' : ''
      }`}
      role={loading ? 'status' : 'alert'}
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-4 px-6 text-center">
        <span className="canvas-loader" aria-hidden="true" />
        <p className="text-sm font-semibold text-white-600">{message}</p>
        {!loading && (
          <button
            type="button"
            className="rounded-md bg-black-300 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-black-500"
            onClick={handleReload}
          >
            Reload
          </button>
        )}
      </div>
    </div>
  );
};

export default CanvasFallback;
