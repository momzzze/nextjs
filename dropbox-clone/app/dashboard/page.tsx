import React from "react";
import { auth } from "@clerk/nextjs";
import Dropzone from "@/components/Dropzone";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typings";

async function Dashboard() {
  const { userId } = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  const sceletonFiles: FileType[]=[];

  return (
    <>
      <Dropzone />
    </>
  );
}

export default Dashboard;
