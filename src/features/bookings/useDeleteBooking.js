import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteBooking as deleteBookingApi } from "../../services/apiBookings";

export function useDeleteBooking() {
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteBooking } = useMutation({
    mutationFn: deleteBookingApi,
    onSuccess: () => {
      toast.success("Booking deleted successfully");
      queryClient.invalidateQueries({
        queryKey: "bookings",
      }); // invalidates the cache, basically causing a refetch of data since data is now stale after deleting a booking
    },
    onError: (err) => toast.error(err.message),
  });
  return { deleteBooking, isDeleting };
}
