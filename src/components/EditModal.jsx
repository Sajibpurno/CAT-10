"use client";

import {Envelope} from "@gravity-ui/icons";
import {Button, FieldError, Input, Label, ListBox, Modal, Surface, TextArea, TextField, Select} from "@heroui/react";
import { Edit3 } from "lucide-react";
import { authClient } from "../lib/auth-client";
import { toast } from "react-toastify";

export function EditModal({card}) {
    const { data: session } = authClient.useSession()
        const user = session?.user;
        // console.log(user) 
    const {
  _id,
  petName,
  species,
  breed,
  age,
  gender,
  vaccinationStatus,
  petImageUrl,
  healthStatus,
  location,
  adoptionFee,
  ownerEmail,
  description
} = card;

    const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const allCards = Object.fromEntries(formData.entries());
    // allCards.ownerEmail = user?.email;
    console.log(allCards);

    const res = await fetch(`http://localhost:8000/allCards/${_id}`,{
            method: "PATCH",
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(allCards)
         });
         const data = await res.json();
         console.log(data)
         if (data) {
            toast.success('Card Update Successfully')
         redirect('/my-listing')
         }

         return data;
  };
  return (
    <Modal>
      <Button className="flex items-center justify-center gap-1.5 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-[#161c2d] px-3 py-2 text-xs font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800 transition">
                            <Edit3 size={14} /> Edit
                          </Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-xl">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Envelope className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Edit Information</Modal.Heading>
              
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
                
                <form className="space-y-8" onSubmit={onSubmit}>
  <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
    
    {/* 1. Pet Name */}
    <TextField name="petName" defaultValue={petName} isRequired>
      <Label>Pet Name *</Label>
      <Input placeholder="e.g. Buddy"  className="rounded-2xl" />
      <FieldError />
    </TextField>

    {/* 2. Species (Select fields require defaultSelectedKey) */}
    <div>
      <Select 
        name="species" 
        isRequired 
        className="w-full" 
        placeholder="Select species"
        defaultSelectedKey={species} // আগের ভ্যালু সেট থাকবে
      >
        <Label>Species *</Label>
        <Select.Trigger className="rounded-2xl">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="Cat" textValue="Cat">Cat</ListBox.Item>
            <ListBox.Item id="Dog" textValue="Dog">Dog</ListBox.Item>
            <ListBox.Item id="Bird" textValue="Bird">Bird</ListBox.Item>
            <ListBox.Item id="Rabbit" textValue="Rabbit">Rabbit</ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>

    {/* 3. Breed */}
    <TextField defaultValue={breed} name="breed">
      <Label>Breed</Label>
      <Input placeholder="e.g. Labrador Retriever"  className="rounded-2xl" />
      <FieldError />
    </TextField>

    {/* 4. Age */}
    <TextField defaultValue={age} name="age" type="number">
      <Label>Age (years)</Label>
      <Input type="number" placeholder="e.g. 2"  className="rounded-2xl" />
      <FieldError />
    </TextField>

    {/* 5. Gender */}
    <div>
      <Select 
        name="gender" 
        className="w-full" 
        placeholder="Select gender"
        defaultValue={gender} 
      >
        <Label>Gender</Label>
        <Select.Trigger className="rounded-2xl">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="Male" textValue="Male">Male</ListBox.Item>
            <ListBox.Item id="Female" textValue="Female">Female</ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>

    {/* 6. Vaccination Status */}
    <div>
      <Select 
        name="vaccinationStatus" 
        className="w-full" 
        placeholder="Select status"
        defaultValue={vaccinationStatus}
      >
        <Label>Vaccination Status</Label>
        <Select.Trigger className="rounded-2xl">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="Vaccinated" textValue="Vaccinated">Vaccinated</ListBox.Item>
            <ListBox.Item id="Not Vaccinated" textValue="Not Vaccinated">Not Vaccinated</ListBox.Item>
            <ListBox.Item id="Partially Vaccinated" textValue="Partially Vaccinated">
              Partially Vaccinated
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>

    {/* 7. Pet Image URL */}
    <div className="md:col-span-2">
      <TextField defaultValue={petImageUrl} name="petImageUrl" >
        <Label>
          Pet Image URL{" "}
          <span className="text-sm font-normal text-gray-400">(upload to imgbb.com first)</span>
        </Label>
        <Input type="url" placeholder="https://i.ibb.co/..."  className="rounded-2xl" />
        <FieldError />
      </TextField>
    </div>

    {/* 8. Health Status */}
    <div>
      <Select 
        name="healthStatus" 
        isRequired 
        className="w-full" 
        placeholder="Select health status"
        defaultSelectedKey={healthStatus} // আগের ভ্যালু সেট থাকবে
      >
        <Label>Health Status *</Label>
        <Select.Trigger className="rounded-2xl">
          <Select.Value />
          <Select.Indicator />
        </Select.Trigger>
        <Select.Popover>
          <ListBox>
            <ListBox.Item id="Healthy" textValue="Healthy">Healthy</ListBox.Item>
            <ListBox.Item id="Sick" textValue="Sick">Sick</ListBox.Item>
            <ListBox.Item id="Under Treatment" textValue="Under Treatment">
              Under Treatment
            </ListBox.Item>
          </ListBox>
        </Select.Popover>
      </Select>
    </div>

    {/* 9. Location */}
    <TextField defaultValue={location} name="location" isRequired>
      <Label>Location *</Label>
      <Input placeholder="e.g. New York, NY"  className="rounded-2xl" />
      <FieldError />
    </TextField>

    {/* 10. Adoption Fee */}
    <div className="md:col-span-2">
      <TextField defaultValue={adoptionFee} name="adoptionFee" type="number">
        <Label>Adoption Fee ($) — Enter 0 for free</Label>
        <Input type="number" placeholder="0"  className="rounded-2xl" />
        <FieldError />
      </TextField>
    </div>

    
    <div className="md:col-span-2">
      <TextField defaultValue={user.email}  name="ownerEmail" type="email">
        <Label>Owner Email (Cannot be changed)</Label>
        <Input 
          type="email" 
          defaultValue={user.email} 
          readOnly 
          disabled
          className="rounded-2xl bg-gray-100 dark:bg-gray-800 cursor-not-allowed opacity-70" 
        />
        <FieldError />
      </TextField>
    </div>

    {/* 12. Description */}
    <div className="md:col-span-2">
      <TextField defaultValue={description}  name="description" isRequired>
        <Label>Description *</Label>
        <TextArea
          placeholder="Describe the pet's personality..."
          
          className="rounded-3xl"
        />
        <FieldError />
      </TextField>
    </div>
  </div>

  <Modal.Footer>
              <Button type="submit" className='bg-linear-to-r from-yellow-400 to-gray-400 hover:opacity-90' slot="close">Update Pet Listing</Button>
            </Modal.Footer>
</form>

              </Surface>
            </Modal.Body>
            
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}