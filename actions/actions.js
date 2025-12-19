"use server";

import { storePost, updatePostLikeStatus } from "@/lib/posts";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";


export async function getPostData(prevState, formData) {
    const title = formData.get("title");
    const image = formData.get("image");
    const content = formData.get("content");
    let errors = []

    let post = {
      imageUrl: "",
      title,
      content,
      userId: 1,
    };

    if ((!title || title.trim().length === 0)) {
      errors.push("Write a valid title");
    }

    if ((!content || content.trim().length === 0)) {
     errors.push("Write valid content");
    }

    if(image.size === 0 || !image){
      errors.push("image is required")
    }

    if(errors.length > 0){
      return {errors }
    }

    await storePost(post);

    revalidatePath("/", "layout")
    redirect("/feed");
  }


  export default async function togglePostLike(postId){
    await updatePostLikeStatus(postId ,2)
    revalidatePath("/", "layout")
  }