import {createTheme, MantineProvider} from "@mantine/core";

const theme = createTheme({
    fontFamily: "Inter, sans-serif",
    headings: {fontFamily: "Inter, sans-serif"},
});

export const AppMantineProvider: React.FC<React.PropsWithChildren> = ({
    children,
}) => {
    return <MantineProvider theme={theme}>{children}</MantineProvider>;
};
