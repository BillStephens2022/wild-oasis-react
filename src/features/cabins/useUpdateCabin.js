import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createEditCabin as createEditCabin } from "../../services/apiCabins";

export function useUpdateCabin() {
  const queryClient = useQueryClient();

  const { mutate: updateCabin, isLoading: isEditing } = useMutation({
    mutationFn: ({ newCabinData, id }) => createEditCabin(newCabinData, id),
    onSuccess: () => {
      toast.success("Cabin successfully updated");
      queryClient.invalidateQueries({
        queryKey: "cabins",
      }); // invalidates the cache, basically causing a refetch of data since data is now stale after editing a abin
    },
    onError: (err) => toast.error(err.message),
  });
  return { isEditing, updateCabin };
}
