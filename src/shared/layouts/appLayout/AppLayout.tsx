import {AppShell, Avatar, Burger, Group} from "@mantine/core";
import {useDisclosure} from "@mantine/hooks";

interface AppLayoutProps {
    children: React.ReactNode;
}

export const AppLayout = ({children}: AppLayoutProps) => {
    return (
        <AppShell layout="alt" header={{height: 60}} padding="md">
            <AppShell.Header className=" flex justify-center items-center  ">
                <h1 className="text-[22px] font-bold">Transactions</h1>
            </AppShell.Header>
            <AppShell.Main className="bg-neutral-gray-25">
                {children}
            </AppShell.Main>
        </AppShell>
    );
};
