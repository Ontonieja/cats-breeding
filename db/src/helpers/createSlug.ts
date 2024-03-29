import slugify from 'slugify';
import { v4 as uuidv4 } from 'uuid';

export const createSlug = (title: string) => {
  const uuid = uuidv4();
  const shortUuid = uuid.split('-').slice(0, 2).join('-');
  const uriSlug = slugify(title, {
    lower: true,
    trim: true,
  });
  return encodeURI(`${uriSlug}-${shortUuid}`);
};
