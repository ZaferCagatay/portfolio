import { createPortal } from 'react-dom';

const Alert = ({ type, text }) => {
  if (typeof document === 'undefined') return null;

  return createPortal(
    <div
      className="fixed z-[100] pointer-events-none max-w-[min(100vw-1.5rem,28rem)]"
      style={{
        bottom: 'max(1.5rem, env(safe-area-inset-bottom, 0px))',
        right: 'max(1rem, env(safe-area-inset-right, 0px))',
      }}
      aria-live="polite"
    >
      <div
        className={`pointer-events-auto w-full flex flex-col sm:flex-row sm:items-center gap-3 rounded-xl p-4 sm:p-5 shadow-2xl ${
          type === 'danger'
            ? 'bg-red-800/95 border border-red-700/50 text-indigo-100'
            : 'bg-blue-800/95 border border-blue-700/50 text-indigo-100'
        }`}
        role="alert"
      >
        <p
          className={`shrink-0 self-start sm:self-center rounded-full px-2 py-1 text-xs font-semibold uppercase ${
            type === 'danger' ? 'bg-red-500' : 'bg-blue-500'
          }`}
        >
          {type === 'danger' ? 'Failed' : 'Success'}
        </p>
        <p className="text-left text-sm sm:text-base leading-snug">{text}</p>
      </div>
    </div>,
    document.body
  );
};

export default Alert;
