import React from "react";
import { auth } from "@clerk/nextjs";
import Dropzone from "@/components/Dropzone";
import { getDocs, collection } from "firebase/firestore";
import { db } from "@/firebase";
import { FileType } from "@/typings";
import TableWrapper from "@/components/table/TableWrapper";

async function Dashboard() {
  const { userId } = auth();

  const docsResults = await getDocs(collection(db, "users", userId!, "files"));
  // implicit return of object
  const sceletonFiles: FileType[] = docsResults.docs.map((doc) => ({
    id: doc.id, 
    filename: doc.data().filename || doc.id,
    timestamp: new Date(doc.data().timestamp?.seconds * 1000) || undefined,
    fullName: doc.data().fullName,
    downloadUrl: doc.data().downloadUrl,   
    size: doc.data().size,
    type: doc.data().type,
  }));


  

  return (
    <div className="border-t">
      <Dropzone />
      <section className="container space-y-5">
        <h2 className="font-bold">All Files</h2>

        <div className="">
            {/* table wrapper */}
            <TableWrapper sceletonFiles={sceletonFiles}/>
        </div>
      </section>
    </div>
  );
}

export default Dashboard;
