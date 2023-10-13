import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import app from './firebase';

const storage = getStorage(app);

export const getImageUrl = async (path) => {
  const imageRef = ref(storage, path);
  try {
    const url = await getDownloadURL(imageRef);
    return url;
  } catch (error) {
    console.error('Error getting image URL:', error);
    return null;
  }
};