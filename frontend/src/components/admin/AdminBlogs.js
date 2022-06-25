import { Box, Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import BlogsContainer from '../blogs/BlogsContainer';
import "../../styles/blogs.css";
import Blog from '../blogs/Blog';


const AdminBlogs = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [count, setCount] = useState(9);

    const { isOpen, onOpen, onClose } = useDisclosure();


    const loadMore = () => {
        setCount(count + 9);
    }

    const cut = blogs.slice(0, count);




    const toast = useToast();

    useEffect(() => {
        Axios.get("http://localhost:5000/blogs").then((response) => {
            // console.log(response.data);
            setBlogs(response.data);
        })
    }, [blogs]);

    const postDetails = (pics) => {
        setLoading(true);
        if (pics === undefined) {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            return;
        }

        if (pics.type === "image/jpeg" || pics.type === "image/png") {
            const data = new FormData();
            data.append("file", pics);
            data.append("upload_preset", "fullstackpantry");
            data.append("cloud_name", "coderdx");
            fetch("https://api.cloudinary.com/v1_1/coderdx/image/upload", {
                method: "post",
                body: data,
            }).then((res) => res.json())
                .then(data => {
                    setImage(data.url.toString());
                    setLoading(false);
                })
                .catch((err) => {
                    console.log(err);
                    setLoading(false);
                });
        } else {
            toast({
                title: "Please Select an Image!",
                status: "warning",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            setLoading(false);
            return;
        }
    };

    const Upload = () => {

        if (title === "" || description === "" || image === "") {
            toast({
                title: 'Please fill out all the field',
                description: "",
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        } else {

            Axios.post("http://localhost:5000/createblog", {
                title: title,
                description: description,
                image: image
            })
                .then(res => {
                    if (res.status === 200) {
                        toast({
                            title: 'Blog created',
                            description: "",
                            status: 'success',
                            duration: 3000,
                            isClosable: true,
                        })
                    } else {
                        toast({
                            title: 'failed',
                            description: "",
                            status: 'error',
                            duration: 3000,
                            isClosable: true,
                        })
                    }
                    setBlogs([...blogs, { title, description, image }]);
                });
        }
    }

    const Delete = (id) => {
        try {
            Axios.delete("http://localhost:5000/delete/" + id).then((res) => {
                setBlogs(blogs.filter((val) => {
                    console.log(val);
                    return val._id !== id;
                }))
                toast({
                    title: "Blog deleted",
                    status: "success",
                    duration: 5000,
                    isClosable: true,
                    position: "bottom",
                });
            });
        } catch (error) {
            toast({
                title: "Error occured",
                status: "success",
                duration: 5000,
                isClosable: true,
                position: "bottom",
            });
            // console.log(error);
        }
    }


    return (
        <Box w="100%" display="flex" alignItems="center">
            <div className="BlogContainer">
                <main className="BlogGrid">

                    {cut.map((blog) => {
                        return (
                            <Box key={blog._id} position="relative">
                                <Blog
                                    key={blog._id}
                                    id={blog._id}
                                    title={blog.title}
                                    description={blog.description}
                                    image={blog.image}
                                    updatedAt={blog.updatedAt}
                                />
                                <Button position="absolute" top="0" onClick={() => Delete(blog._id)}>delete</Button>
                            </Box>
                        )
                    })}
                </main>
            <button onClick={loadMore} className='contactbtn loadMoreBtn'>Load More</button>
            </div>
            <Button pos="absolute" top="0" onClick={onOpen}>Open Modal</Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                        <Box>
                            <Box width="100%" borderWidth='1px' borderRadius='lg' overflow='hidden' p={4}>
                                <VStack spacing="5px" color="black">


                                    <FormControl isRequired>
                                        <FormLabel htmlFor='first-name'>Title</FormLabel>
                                        <Input id='title' placeholder='Title' onChange={(e) => {
                                            setTitle(e.target.value);
                                        }} />
                                    </FormControl>
                                    <FormControl isRequired>
                                        <FormLabel htmlFor='description'>Description</FormLabel>
                                        <Input id='description' placeholder='Description' onChange={(e) => {
                                            setDescription(e.target.value);
                                        }} />
                                    </FormControl>
                                    <FormControl id="pic">
                                        <FormLabel>Upload your Picture</FormLabel>
                                        <Input
                                            type="file"
                                            p={1.5}
                                            accept="image/*"
                                            onChange={(e) => postDetails(e.target.files[0])}
                                        />
                                    </FormControl>
                                </VStack>
                            </Box>
                        </Box>
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme="blue"
                            width="100%"
                            maxW="100px"
                            color="white"
                            // style={{ marginTop: 15 }}
                            onClick={Upload}
                            isLoading={loading}
                        >
                            Upload
                        </Button>
                        <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Box>
    )
}

export default AdminBlogs