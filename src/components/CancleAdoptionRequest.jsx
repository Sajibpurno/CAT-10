"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function CancleAdoptionRequest({ item }) {
  const { _id, petName } = item;
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/adopting/${_id}`,
        {
          method: "DELETE",
          headers: {
            'content-type': 'application/json'
          }
        }
      );
      const data = await res.json();
      console.log(data);
      
      // ✅ Delete complete হওয়ার পর refresh করো
      router.refresh();
      setIsOpen(false);
    } catch (error) {
      console.error("Delete failed:", error);
      setIsDeleting(false);
    }
  };

  return (
    <AlertDialog isOpen={isOpen} onOpenChange={setIsOpen}>
      <Button 
        className="inline-flex items-center gap-1 rounded-lg bg-rose-500/10 px-3 py-1.5 text-xs font-semibold text-rose-400 border border-rose-500/20 hover:bg-rose-500 hover:text-white transition duration-150"
        isDisabled={isDeleting}
      >
        <Trash2 size={14} /> {isDeleting ? 'Deleting...' : 'Cancel'}
      </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete request permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete your adoption request for{' '}
                <strong>{petName}</strong>. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button 
                slot="close" 
                variant="tertiary"
                isDisabled={isDeleting}
              >
                Cancel
              </Button>
              <Button 
                onClick={handleDelete} 
                slot="close" 
                variant="danger"
                isDisabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}