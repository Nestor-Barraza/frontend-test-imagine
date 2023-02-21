//Imports
import { pushAllImages } from "./sliderCustomSlice";
import { store } from "src/app/store";
import { S3 } from "src/utils";

// Types 
interface File {
  fileId: string;
  fileName: string;
  contentLength: number;
  contentType: string;
  fileInfo: any;
  uploadTimestamp: number;
}


interface Bucket {
  accountId: string;
  bucketId: string;
  bucketInfo: any;
  bucketName: string;
  bucketType: 'allPrivate' | 'allPublic' | 'snapshot';
}

// Get all images
export const listAllImages = async () => {

  const images = [
      "https://f005.backblazeb2.com/file/imaginationBox/1109563.jpg" ,
      "https://f005.backblazeb2.com/file/imaginationBox/building-4699096_1920.jpg" ,
      "https://f005.backblazeb2.com/file/imaginationBox/cyberpunk-7443431_1920.jpg",
      "https://f005.backblazeb2.com/file/imaginationBox/cyberpunk-7774169_1920.jpg",
      "https://f005.backblazeb2.com/file/imaginationBox/cyberpunk-7799678_1920.jpg",
      "https://f005.backblazeb2.com/file/imaginationBox/hd-wallpaper-6885193_1920.jpg"
  ];
  store.dispatch(pushAllImages({ result: images }))
}

