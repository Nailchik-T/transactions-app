import {useMutation, useQueryClient} from "@tanstack/react-query";
import {apiClient} from "..";
import {ITransitionDate} from "./model/type";

export const usePostTransaction = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (transaction: ITransitionDate) => {
            const response = await apiClient.post(`/transactions`, transaction);
            return response.data;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["useGetAllTransition"],
            });
        },
    });
};
