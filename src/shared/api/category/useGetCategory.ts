import {useQuery} from "@tanstack/react-query";
import {apiClient} from "..";
import {ICategory} from "./model/model";

export const useGetAllCategories = () => {
    return useQuery({
        queryKey: ["useGetAllCategories"],
        queryFn: async () => {
            const response = await apiClient.get<ICategory[]>(
                `/transactions/categories`,
            );
            return response.data;
        },
    });
};
