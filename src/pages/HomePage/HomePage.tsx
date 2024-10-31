import {CreateCategory} from "@/features/Category/CreateCategory";
import {CreateTransition} from "@/features/Transition/CreateTransition";
import {useGetAllTransition} from "@/shared/api/transaction/useGetAllTransaction";
import {Table} from "@mantine/core";
import {DatePicker} from "@mantine/dates";
import {MantineProvider} from "@mantine/core";
import {formatDateString} from "@/shared/lib/formateDate";

const HomePage = () => {
    const {data: transactions, isLoading} = useGetAllTransition();
    if (isLoading) return <>Loading</>;

    const rows = transactions?.map((element) => (
        <Table.Tr key={element.id}>
            <Table.Td>{element.author}</Table.Td>
            <Table.Td>{formatDateString(element.dateTime)}</Table.Td>
            <Table.Td>{element.sum}</Table.Td>
            <Table.Td>{element.category.name}</Table.Td>
            <Table.Td>{element.comment}</Table.Td>
        </Table.Tr>
    ));

    return (
        <>
            <div className="flex justify-end gap-2 mb-4 ">
                <CreateCategory />
                <CreateTransition />
            </div>
            <Table stickyHeader stickyHeaderOffset={60}>
                <Table.Thead>
                    <Table.Tr>
                        <Table.Th>Author</Table.Th>
                        <Table.Th>Date</Table.Th>
                        <Table.Th>Sum</Table.Th>
                        <Table.Th>Category</Table.Th>
                        <Table.Th>Comment</Table.Th>
                    </Table.Tr>
                </Table.Thead>
                <Table.Tbody>{rows}</Table.Tbody>
            </Table>
        </>
    );
};

export default HomePage;
