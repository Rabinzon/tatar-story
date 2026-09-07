/**
 * Ссылка с учётом base: сайт может жить как в корне домена,
 * так и в подпапке (GitHub Pages — /tatar-story/).
 */
export function url(path = '/') {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}
