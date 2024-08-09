import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabins";

export function useDeleteCabin() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
    mutationFn: deleteCabinApi,
    onSuccess: () => {
      toast.success("Cabin deleted successfully");
      queryClient.invalidateQueries({
        queryKey: "cabins",
      }); // invalidates the cache, basically causing a refetch of data since data is now stale after deleting a cabin
    },
    onError: (err) => toast.error(err.message),
  });
  return { isDeleting, deleteCabin };
}
