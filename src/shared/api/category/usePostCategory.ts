import {useMutation, useQueryClient} from "@tanstack/react-query";
import {apiClient} from "..";
import {ICategoryData} from "./model/model";

export const usePostCategory = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (category: ICategoryData) => {
            const response = await apiClient.post(
                `/transactions/categories`,
                category,
            );
            return response.data;
        },
        onSuccess: async () => {
            await queryClient.invalidateQueries({
                queryKey: ["useGetAllCategories"],
            });
        },
    });
};
