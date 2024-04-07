'use server';
import { v4 as uuidv4 } from 'uuid';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { storage } from './setup';
import convertStringToBinary from '@/helpers/convertStringToBinary';

export const uploadFile = async (file: any, name: string, format: string) => {
  try {
    const binaryData = convertStringToBinary(file);

    const fileId = uuidv4();
    const storageRef = ref(storage, `uploads/${fileId}/${name}.${format}`);
    const { metadata } = await uploadBytes(storageRef, binaryData.buffer);
    const { fullPath } = metadata;
    if (!fullPath) {
      throw new Error('File upload issue, try again');
    }
    return `https://storage.googleapis.com/${storageRef.bucket}/${fullPath}`;
  } catch (e: any) {
    const tmp = e.message || e.toString();
    console.log(tmp);
  }
};

export async function deleteFile(fileUrl: string) {
  const fileRef = ref(storage, fileUrl);

  try {
    await deleteObject(fileRef);
    console.log('File deleted successfully');
  } catch (error) {
    console.error('Error deleting file:', error);
  }
}

export async function getFileDownloadUrl(fileUrl: string) {
  const fileRef = ref(storage, fileUrl);
  return await getDownloadURL(fileRef);
}
