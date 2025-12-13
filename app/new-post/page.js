

import { getPostData } from "@/actions/actions";
import FormPost from "@/components/form-post";
import { getPosts, storePost } from "@/lib/posts";
import { redirect } from "next/navigation";


export default function NewPostPage() {

  return (
    <>
      <FormPost getPostData={getPostData}></FormPost>
    </>
  );
}
