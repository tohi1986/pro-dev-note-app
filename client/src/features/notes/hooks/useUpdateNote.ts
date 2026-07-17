import { useMutation, useQueryClient } from "@tanstack/react-query"
import { updateNote } from "../../../api/notes"

export function useUpdateNote() {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: updateNote,

    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["notes"],
      })
    },
  })
} 