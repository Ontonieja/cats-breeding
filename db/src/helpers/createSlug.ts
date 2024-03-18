import slugify from 'slugify';

export const creaetSlug = (title: string) => {
  const uriSlug = slugify(title, {
    lower: true,
    trim: true,
  });
  return encodeURI(uriSlug);
};
