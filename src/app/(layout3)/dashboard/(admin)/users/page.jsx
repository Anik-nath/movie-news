"use client";
import EditUserDrawer from "@/components/shared/EditUserDrawer";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useDeleteUserMutation,
  useGetUserQuery,
} from "@/lib/features/apiSlice";

const AllUsers = () => {
  const { data, refetch } = useGetUserQuery();
  const allusers = data?.data;

  const [deleteUser] = useDeleteUserMutation();
  const handleDelete = async (userID) => {
    try {
      await deleteUser(userID).unwrap();
      refetch();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="shadow-lg p-4">
      <Table>
        <TableHeader className="bg-red-500">
          <TableRow>
            <TableHead className="w-[200px] text-white">Username</TableHead>
            <TableHead className="text-white">Email</TableHead>
            <TableHead className="text-white">Role</TableHead>
            <TableHead className="text-right text-white">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {allusers?.map((item) => (
            <TableRow key={item._id}>
              <TableCell className="font-medium">{item.name}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell className="text-right flex gap-4 items-center justify-end">
                <EditUserDrawer
                  id={item._id}
                  refetch={refetch}
                ></EditUserDrawer>
                <Button
                  onClick={() => handleDelete(item._id)}
                  className="text-white"
                >
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};
export default AllUsers;
