import React, { useState } from "react";
import { nanoid } from "nanoid";
import { doc, setDoc, collection } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { firebase, db, storage } from "../../firebase";
export const useUploadPost = () => {
  const [isLoading, setIsLoading] = useState();
  const [isSuccess, setIsSuccess] = useState(false);
  const postRef = collection(db, "posts");
  const uploadPost = async (payload) => {
    setIsLoading(true);
    const ImageResponse = await fetch(payload.uploadFile);
    const blob = await ImageResponse.blob();
    const storageRef = ref(storage, `post/${nanoid()}`);
    await uploadBytes(storageRef, blob).then(async (snapshot) => {
      await getDownloadURL(ref(storageRef))
        .then((url) => {
          setDoc(doc(postRef), {
            ...payload,
            uploadFile: url,
          });
          setIsSuccess(true);
        })
        .catch((error) => {
          console.log(error, "error");
        });
    });
    setIsLoading(false);
  };
  return { uploadPost, isLoading, isSuccess };
};
