"use client";

import {
  FieldError,
  Select,
  Input,
  Label,
  ListBox,
  TextField,
  Button,
  TextArea,
} from "@heroui/react";
import { authClient } from "../../lib/auth-client";
import { toast } from "react-toastify";

const AddCatForm = () => {
  const { data: session } = authClient.useSession()
    const user = session?.user;
    // console.log("user data", user) 

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const allCards = Object.fromEntries(formData.entries());
    // allCards.ownerEmail = user?.email;
    console.log(allCards);
    
    // secure korba amne client ee jwt
    const {data: tokenData} = await authClient.token()

    const res = await fetch(`${process.env.NEXT_PUBLIC_BETTER_AUTH_URL}/allCards`, {
      method: "POST",
      headers: { "content-type": "application/json",
                 authorization: `Bearer ${tokenData?.token}`
              },
      body: JSON.stringify(allCards),
    });
    const data = await res.json();
    if(data){
      toast.success("Pet Added Successfully")
      // form.reset();
    }
    console.log(data);
    return data;
  };

  return (
    <div>
      <h1 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl">
        Add Pets
      </h1>
      <form className="space-y-8" onSubmit={onSubmit}>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <TextField name="petName" isRequired>
            <Label>Pet Name *</Label>
            <Input placeholder="e.g. Buddy" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <div>
            <Select name="species" isRequired className="w-full" placeholder="Select species">
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

          <TextField name="breed">
            <Label>Breed</Label>
            <Input placeholder="e.g. Labrador Retriever" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <TextField name="age" type="number">
            <Label>Age (years)</Label>
            <Input type="number" placeholder="e.g. 2" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <div>
            <Select name="gender" className="w-full" placeholder="Select gender">
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

          <div>
            <Select name="vaccinationStatus" className="w-full" placeholder="Select status">
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

          <div className="md:col-span-2">
            <TextField name="petImageUrl">
              <Label>
                Pet Image URL{" "}
                <span className="text-sm font-normal text-gray-400">(upload to imgbb.com first)</span>
              </Label>
              <Input type="url" placeholder="https://i.ibb.co/..." className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          <div>
            <Select name="healthStatus" isRequired className="w-full" placeholder="Select health status">
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

          <TextField name="location" isRequired>
            <Label>Location *</Label>
            <Input placeholder="e.g. New York, NY" className="rounded-2xl" />
            <FieldError />
          </TextField>

          <div className="md:col-span-2">
            <TextField name="adoptionFee" type="number">
              <Label>Adoption Fee ($) — Enter 0 for free</Label>
              <Input type="number" placeholder="0" className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          <div className="md:col-span-2">
            <TextField defaultValue={user?.email}  name="ownerEmail" type="email">
              <Label>Owner Email</Label>
              <Input type="email" readOnly  className="rounded-2xl" />
              <FieldError />
            </TextField>
          </div>

          <div className="md:col-span-2">
            <TextField name="description" isRequired>
              <Label>Description *</Label>
              <TextArea
                placeholder="Describe the pet's personality, habits, needs and anything adopters should know..."
                className="rounded-3xl"
              />
              <FieldError />
            </TextField>
          </div>
        </div>

        <Button type="submit" variant="outline" className="w-full rounded-lg bg-cyan-500 text-white">
          Add Pet Listing
        </Button>
      </form>
    </div>
  );
};

export default AddCatForm;