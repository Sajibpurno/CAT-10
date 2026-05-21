// "use client";

// import { TrashBin } from "@gravity-ui/icons";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   useDisclosure,
// } from "@heroui/react";
// import { toast } from "react-toastify";

// const DeleteAlert = ({ petDetailsData, onUpdated }) => {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const { _id, petName } = petDetailsData || {};

//   const handleDelete = async (onClose) => {
//     try {
//       const res = await fetch(`http://localhost:8000/allCards/${_id}`, {
//         method: "DELETE",
//         headers: { "content-type": "application/json" },
//       });

//       if (res.ok) {
//         toast.success("Pet deleted successfully!");
//         onClose();
//         onUpdated?.();
//       } else {
//         toast.error("Failed to delete pet!");
//       }
//     } catch (error) {
//       console.error("Error deleting pet:", error);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <>
//       <Button
//         size="sm"
//         onPress={onOpen}
//         className="bg-transparent hover:bg-red-950/30 text-red-500 rounded-xl font-medium flex items-center justify-center gap-2 border border-red-900/40"
//       >
//         <TrashBin width={16} /> Delete
//       </Button>

//       <Modal 
//         isOpen={isOpen} 
//         onOpenChange={onOpenChange} 
//         size="sm"
//         classNames={{
//           base: "bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white rounded-3xl",
//         }}
//       >
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="text-xl font-bold text-red-500">
//                 Delete Pet Permanently?
//               </ModalHeader>
//               <ModalBody>
//                 <p className="text-gray-600 dark:text-gray-400">
//                   This will permanently delete{" "}
//                   <strong className="text-red-500">{petName}</strong> and all its
//                   data. This action cannot be undone.
//                 </p>
//               </ModalBody>
//               <ModalFooter>
//                 <Button variant="light" onPress={onClose}>
//                   Cancel
//                 </Button>
//                 <Button color="danger" onPress={() => handleDelete(onClose)}>
//                   Delete
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// };

// export default DeleteAlert;