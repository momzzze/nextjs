"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAppStore } from "@/store/store";
import { useUser } from "@clerk/nextjs";
import { db } from "@/firebase";
import { useState } from "react";
import { Input } from "./ui/input";
import { updateDoc, doc } from "firebase/firestore";
import toast from "react-hot-toast";

function RenameModal() {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [filename, isRenameModalOpen, setIsRenameModalOpen, fileId] =
    useAppStore((state) => [
      state.filename,
      state.isRenameModalOpen,
      state.setIsRenameModalOpen,
      state.fileId,
    ]);
  const renameFile = async () => {
    if (!user || !fileId) return;

    const toastId=toast.loading('Renaming file...');

    await updateDoc(doc(db, "users", user.id, "files", fileId), {
      filename: input,
    });

    toast.success('File renamed!',{id:toastId});

    setInput('');
    setIsRenameModalOpen(false);
  };

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rename the File</DialogTitle>
          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />

          <div className="flex justify-end space-x-2 py-3">
            <Button
              size={"sm"}
              variant={"ghost"}
              className="px-3 "
              onClick={() => setIsRenameModalOpen(false)}
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>
            <Button
              type={"submit"}
              size={"sm"}
              className="px-3 "
              onClick={() => renameFile()}
            >
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default RenameModal;
