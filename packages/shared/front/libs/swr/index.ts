import SWR, { SWRConfiguration, SWRResponse } from "swr";

export const swrConfig: SWRConfiguration = {
  revalidateOnFocus: false,
  shouldRetryOnError: false,
};

export const useSWR = <T>(
  key: string | string[] | null,
  fetcher: () => Promise<T>,
  config?: SWRConfiguration
): SWRResponse<T, T> => SWR(key, fetcher, { ...swrConfig, ...config });
