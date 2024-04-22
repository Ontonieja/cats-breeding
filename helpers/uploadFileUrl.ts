import readFileAsDataURL from '@/db/src/helpers/readFileAsDataURL';
import { getFileDownloadUrl, uploadFile } from '@/services/firebase/storage';

const uploadFileUrl = async (file: File) => {
  const base64String = await readFileAsDataURL(file);
  const format = file.type.split('/')[1];
  const uploadedImage = await uploadFile(base64String, file.name, format);
  if (!uploadedImage)
    throw new Error('Something went wrong, cannot upload file');
  return getFileDownloadUrl(uploadedImage);
};

export default uploadFileUrl;
