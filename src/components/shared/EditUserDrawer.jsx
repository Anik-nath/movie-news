"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { useForm } from "react-hook-form";
import {
  useGetSingleUserQuery,
  useUpdateUserMutation,
} from "@/lib/features/apiSlice";
import { useEffect, useState } from "react";

const EditUserDrawer = ({ id, refetch }) => {
  const [isOpen, setIsOpen] = useState(false);
  // Fetch user data
  const { data, isLoading } = useGetSingleUserQuery(id);
  const userDetails = data?.data;

  // update user
  const [updateUser] = useUpdateUserMutation();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  // Populate the form when data is fetched
  useEffect(() => {
    if (userDetails) {
      setValue("name", userDetails.name);
      setValue("email", userDetails.email);
    }
  }, [userDetails, setValue]);

  const onSubmit = async (formData) => {
    try {
      const response = await updateUser({
        userId: id,
        payload: formData,
      }).unwrap();
      console.log(id, formData);
      console.log(response);
      setIsOpen(false);
      refetch();
    } catch (error) {
      console.error("Update failed:", error);
    }
  };

  if (isLoading) {
    return <p>Loading user data...</p>;
  }

  return (
    <div>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setIsOpen(true)}>
            Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit profile: {id}</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you done.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="col-span-3"
              />
              {errors.name && (
                <p className="col-span-4 text-red-500 text-sm">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                {...register("email", { required: "Email is required" })}
                className="col-span-3"
              />
              {errors.email && (
                <p className="col-span-4 text-red-500 text-sm">
                  {errors.email.message}
                </p>
              )}
            </div>
            <DialogFooter>
              <Button type="submit">Save changes</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default EditUserDrawer;
