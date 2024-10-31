import {useDisclosure} from "@mantine/hooks";
import {Modal, Button, Input, Textarea, Select} from "@mantine/core";
import {IconAd2} from "@tabler/icons-react";
import {DatePickerInput} from "@mantine/dates";
import {useState} from "react";
import {useGetAllCategories} from "@/shared/api/category/useGetCategory";
import {usePostTransaction} from "@/shared/api/transaction/usePostTransaction";
import {ITransitionDate} from "@/shared/api/transaction/model/type";

export const CreateTransition = () => {
    const {data: categories} = useGetAllCategories();
    const [opened, {open, close}] = useDisclosure(false);
    const [value, setValue] = useState<Date[]>([]);
    const [author, setAuthor] = useState("");
    const [sum, setSum] = useState<number | "">("");
    const [selectedCategory, setSelectedCategory] = useState<string | null>(
        null,
    );
    const [comment, setComment] = useState("");

    const {mutate: createNewTransaction} = usePostTransaction();
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        const formData: ITransitionDate = {
            author,
            sum,
            categoryId: selectedCategory,
            dateTime: value[0].toISOString(),
            comment,
        };
        createNewTransaction(formData);

        setAuthor("");
        setSum("");
        setSelectedCategory(null);
        setValue([]);
        setComment("");

        close();
    };

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Add New Transaction"
                centered
            >
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <Input.Wrapper required label="Author">
                        <Input
                            required
                            placeholder="Author name"
                            value={author}
                            onChange={(e) => setAuthor(e.currentTarget.value)}
                        />
                    </Input.Wrapper>
                    <Input.Wrapper required label="Sum">
                        <Input
                            required
                            type="number"
                            placeholder="Enter sum"
                            value={sum}
                            onChange={(e) =>
                                setSum(Number(e.currentTarget.value))
                            }
                        />
                    </Input.Wrapper>
                    <Select
                        required
                        label="Category"
                        placeholder="Select category"
                        data={
                            categories?.map((category) => ({
                                value: category.id.toString(),
                                label: category.name,
                            })) || []
                        }
                        value={selectedCategory}
                        onChange={setSelectedCategory}
                    />
                    <DatePickerInput
                        required
                        type="multiple"
                        label="Pick dates"
                        placeholder="Pick dates"
                        value={value}
                        onChange={setValue}
                    />
                    <Textarea
                        placeholder="Your comment"
                        label="Your comment"
                        value={comment}
                        onChange={(e) => setComment(e.currentTarget.value)}
                    />
                    <Button type="submit" variant="light" fullWidth>
                        Add
                    </Button>
                </form>
            </Modal>

            <Button leftSection={<IconAd2 size={14} />} onClick={open}>
                Add New Transaction
            </Button>
        </>
    );
};
