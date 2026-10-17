import { useEffect, useEffectEvent, useState } from 'react';

export type AsyncState<T> =
  | { status: 'loading' }
  | { status: 'error'; error: unknown }
  | { status: 'success'; data: T };

export function useAsync<T>(
  fetcher: (signal: AbortSignal) => Promise<T>,
  key: string | number,
): AsyncState<T> {
  const [state, setState] = useState<AsyncState<T>>({ status: 'loading' });
  const runFetcher = useEffectEvent(fetcher);

  useEffect(() => {
    const abortController = new AbortController();

    async function load() {
      setState({ status: 'loading' });
      try {
        const data = await runFetcher(abortController.signal);
        if (abortController.signal.aborted) return;
        setState({ status: 'success', data });
      } catch (error: unknown) {
        if (abortController.signal.aborted) return;
        console.error('Request failed:', error);
        setState({ status: 'error', error });
      }
    }
    void load();

    return () => abortController.abort();
  }, [fetcher, key]);

  return state;
}
