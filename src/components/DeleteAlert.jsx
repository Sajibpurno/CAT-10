"use client";

import {AlertDialog, Button} from "@heroui/react";
import { Trash2 } from "lucide-react";
import { redirect } from "next/navigation";
import { authClient } from "../lib/auth-client";
// import { authClient } from "../lib/auth-client";

export function DeleteAlert({card}) {
    const {_id, petName} =  card;

    // server a delete api baniye ekeane ese seta connect korchi-
    const handleDelete= async ()=>{

      // secure korba amne client ee jwt
     const {data: tokenData} = await authClient.token()
     const res = await fetch(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/allCards/${_id}`,{
        method: "DELETE",
        headers:{
            'content-type': 'application/json',
            authorization: `Bearer ${tokenData?.token}`
        }
     });
     const data = await res.json();
     console.log(data)
     redirect('/my-listing')
     return data;
    }
    
  return (
    <AlertDialog>
      <Button className="flex items-center justify-center gap-1.5 rounded-lg border border-red-200 dark:border-red-900/50 bg-red-50/50 dark:bg-red-950/20 px-3 py-2 text-xs font-medium text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950/40 transition">
                            <Trash2 size={14} /> Delete
                          </Button>

      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-[400px]">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete card permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{petName}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={handleDelete} slot="close" variant="danger">
                Delete 
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}