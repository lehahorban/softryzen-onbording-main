export const removeLastTrailingSlash = (url: string): string => {
  if (typeof url != 'string') return url;

  return url.replace(/\/$/, '');
};
