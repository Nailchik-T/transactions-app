import {useQuery} from "@tanstack/react-query";
import {apiClient} from "..";
import {ITransition} from "./model/type";

export const useGetAllTransition = () => {
    return useQuery<ITransition[]>({
        queryKey: ["useGetAllTransition"],
        queryFn: async () => {
            const response = await apiClient.get<ITransition[]>(
                `/transactions`,
            );
            return response.data || [];
        },
    });
};
