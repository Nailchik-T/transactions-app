import {useDisclosure} from "@mantine/hooks";
import {Modal, Button, Input} from "@mantine/core";
import {IconAd} from "@tabler/icons-react";
import {usePostCategory} from "@/shared/api/category/usePostCategory";
import {useState} from "react";
import toast from "react-hot-toast";

export const CreateCategory = () => {
    const [opened, {open, close}] = useDisclosure(false);
    const [categoryName, setCategoryName] = useState<string>("");

    const {mutate: createNewCategory} = usePostCategory();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const categoryName = e.target.value;
        setCategoryName(categoryName);
    };
    const handlerSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        createNewCategory({name: categoryName});
        toast.success("Category created");
        setTimeout(() => {
            close();
        }, 1200);
    };

    return (
        <>
            <Modal
                opened={opened}
                onClose={close}
                title="Add new category"
                centered
            >
                <form onSubmit={handlerSubmit} className="flex flex-col gap-4">
                    <Input.Wrapper label="Name">
                        <Input
                            required
                            value={categoryName}
                            onChange={handleInputChange}
                            placeholder="Category name"
                        />
                    </Input.Wrapper>

                    <Button type="submit" variant="light" fullWidth>
                        Add
                    </Button>
                </form>
            </Modal>

            <Button
                type="submit"
                leftSection={<IconAd size={20} />}
                variant="outline"
                onClick={open}
            >
                Add New Category
            </Button>
        </>
    );
};
