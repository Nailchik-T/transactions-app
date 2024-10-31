import {QueryClientProvider} from "@tanstack/react-query";
import {QueryClient as TanstackQueryClient} from "@tanstack/react-query";
import toast from "react-hot-toast";

export const queryClient = new TanstackQueryClient({
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            staleTime: 1000 * 60 * 3,
        },
        mutations: {
            onError: () => {
                toast.error("Произошла ошибка.");
            },
        },
    },
});

export const MyQueryClientProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return (
        <QueryClientProvider client={queryClient}>
            {children}
        </QueryClientProvider>
    );
};
