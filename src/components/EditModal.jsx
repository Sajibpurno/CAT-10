// "use client";

// import {
//   Modal, ModalContainer, ModalHeader, ModalBody, ModalFooter,
//   Button, Input, Select, SelectItem, Textarea,
// } from "@heroui/react";
// import { useState } from "react";
// import { authClient } from "../lib/auth-client";
// import { toast } from "react-toastify";
// import { FaEdit } from "react-icons/fa";

// export function EditModal({ petDetailsData, onUpdated }) {
//   const [isOpen, setIsOpen] = useState(false);
//   const onOpen = () => setIsOpen(true);
//   const onClose = () => setIsOpen(false);

//   const { data: session } = authClient.useSession();
//   const user = session?.user;

//   const {
//     _id, petName, species, breed, age, gender,
//     vaccinationStatus, petImageUrl, healthStatus,
//     location, adoptionFee, description,
//   } = petDetailsData || {};

//   const onSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.currentTarget);
//     const petDetails = Object.fromEntries(formData.entries());

//     try {
//       const res = await fetch(`http://localhost:8000/allCards/${_id}`, {
//         method: "PATCH",
//         headers: { "content-type": "application/json" },
//         body: JSON.stringify(petDetails),
//       });

//       if (res.ok) {
//         toast.success("Pet details updated successfully");
//         onClose();
//         onUpdated?.();
//       } else {
//         toast.error("Failed to update pet details");
//       }
//     } catch (error) {
//       console.error("Error updating pet:", error);
//       toast.error("Something went wrong!");
//     }
//   };

//   return (
//     <>
//       <Button
//         size="sm"
//         onPress={onOpen}
//         className="w-full bg-[#1e293b] hover:bg-gray-700 text-gray-200 rounded-xl font-medium flex items-center justify-center gap-2 border border-gray-700/50"
//       >
//         <FaEdit className="text-base" /> Edit
//       </Button>

//       <Modal isOpen={isOpen} onClose={onClose} size="2xl" scrollBehavior="inside">
//         <ModalContainer className="bg-white dark:bg-[#0f172a] text-gray-900 dark:text-white rounded-3xl">
//           <ModalHeader className="text-2xl text-cyan-500 font-bold">
//             Edit Pet Details
//           </ModalHeader>

//           <ModalBody>
//             <form id="edit-form" className="space-y-6" onSubmit={onSubmit}>
//               <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

//                 <Input name="petName" label="Pet Name" isRequired
//                   defaultValue={petName} placeholder="e.g. Buddy" radius="lg" />

//                 <Select name="species" label="Species" isRequired
//                   defaultSelectedKeys={species ? [species] : []} radius="lg">
//                   {["Cat", "Dog", "Bird", "Rabbit"].map((s) => (
//                     <SelectItem key={s}>{s}</SelectItem>
//                   ))}
//                 </Select>

//                 <Input name="breed" label="Breed" defaultValue={breed}
//                   placeholder="e.g. Labrador" radius="lg" />

//                 <Input name="age" label="Age (years)" type="number"
//                   defaultValue={age} placeholder="e.g. 2" radius="lg" />

//                 <Select name="gender" label="Gender"
//                   defaultSelectedKeys={gender ? [gender] : []} radius="lg">
//                   {["Male", "Female"].map((g) => (
//                     <SelectItem key={g}>{g}</SelectItem>
//                   ))}
//                 </Select>

//                 <Select name="vaccinationStatus" label="Vaccination Status"
//                   defaultSelectedKeys={vaccinationStatus ? [vaccinationStatus] : []} radius="lg">
//                   {["Vaccinated", "Not Vaccinated", "Partially Vaccinated"].map((v) => (
//                     <SelectItem key={v}>{v}</SelectItem>
//                   ))}
//                 </Select>

//                 <Input name="petImageUrl" label="Pet Image URL" type="url"
//                   defaultValue={petImageUrl} placeholder="https://..." radius="lg"
//                   className="md:col-span-2" />

//                 <Select name="healthStatus" label="Health Status" isRequired
//                   defaultSelectedKeys={healthStatus ? [healthStatus] : []} radius="lg">
//                   {["Healthy", "Sick", "Under Treatment"].map((h) => (
//                     <SelectItem key={h}>{h}</SelectItem>
//                   ))}
//                 </Select>

//                 <Input name="location" label="Location" isRequired
//                   defaultValue={location} placeholder="e.g. Dhaka" radius="lg" />

//                 <Input name="adoptionFee" label="Adoption Fee ($)" type="number"
//                   defaultValue={adoptionFee} placeholder="0" radius="lg"
//                   className="md:col-span-2" />

//                 <Input name="email" label="Owner Email" type="email"
//                   value={user?.email || ""} isReadOnly radius="lg"
//                   className="md:col-span-2" />

//                 <Textarea name="description" label="Description" isRequired
//                   defaultValue={description}
//                   placeholder="Describe the pet's personality..."
//                   radius="lg" className="md:col-span-2" />

//               </div>
//             </form>
//           </ModalBody>

//           <ModalFooter>
//             <Button variant="light" onPress={onClose}>Cancel</Button>
//             <Button type="submit" form="edit-form"
//               className="bg-gradient-to-r from-yellow-400 to-gray-400 text-white font-bold rounded-xl">
//               Update Pet Details
//             </Button>
//           </ModalFooter>
//         </ModalContainer>
//       </Modal>
//     </>
//   );
// }