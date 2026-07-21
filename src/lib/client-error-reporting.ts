type ErrorReporter = (
  error: unknown,
  context?: Record<string, unknown>,
) => void;

declare global {
  interface Window {
    rootsCosmoReportError?: ErrorReporter;
  }
}

export function reportClientError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  window.rootsCosmoReportError?.(error, {
    source: "react_error_boundary",
    route: window.location.pathname,
    ...context,
  });
}
