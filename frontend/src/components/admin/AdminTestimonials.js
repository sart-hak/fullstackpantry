import { Box, Button, FormControl, FormLabel, Image, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, useToast, VStack } from '@chakra-ui/react'
import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import AdminCarousel from './AdminCarousel';

const AdminTestimonials = () => {
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [message, setMessage] = useState("");
    const [image, setImage] = useState("");
    const [testimonials, setTesmonials] = useState([]);
    const [loading, setLoading] = useState(false);

    const { isOpen, onOpen, onClose } = useDisclosure();


    const toast = useToast();

    useEffect(() => {
        Axios.get("http://localhost:5000/gettestimonials").then((response) => {
            // console.log(response.data);
            setTesmonials(response.data);
        })
    }, [testimonials]);

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

        if (name === "" || message === "" || image === "" || position === "") {
            toast({
                title: 'Please fill out all the field',
                description: "",
                status: 'warning',
                duration: 3000,
                isClosable: true,
            })
        } else {

            Axios.post("http://localhost:5000/createtestimonial", {
                name: name,
                position: position,
                image: image,
                message: message
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
                    setTesmonials([...testimonials, { name, position, image, message }]);
                });
        }
    }

    // const Delete = (id) => {
    //     try {
    //         Axios.delete("http://localhost:5000/testimonial/delete/" + id).then((res) => {
    //             setTesmonials(testimonials.filter((val) => {
    //                 console.log(val);
    //                 return val._id !== id;
    //             }))
    //             toast({
    //                 title: "Blog deleted",
    //                 status: "success",
    //                 duration: 5000,
    //                 isClosable: true,
    //                 position: "bottom",
    //             });
    //         });
    //     } catch (error) {
    //         toast({
    //             title: "Error occured",
    //             status: "success",
    //             duration: 5000,
    //             isClosable: true,
    //             position: "bottom",
    //         });
    //         // console.log(error);
    //     }
    // }


    return (
        <Box w="100%" display="flex" alignItems="center">
        {/* <div className="BlogContainer">
            <main className="BlogGrid">

                {testimonials.map((value) => {
                    return (
                        <Box key={value._id} position="relative">
                            <h1>{value.name}</h1>
                            <h1>{value.position}</h1>
                            <h1>{value.message}</h1>
                            <img src={value.image} alt="" />
                            <Button position="absolute" top="0" onClick={() => Delete(value._id)}>delete</Button>
                        </Box>
                    )
                })}
            </main>
        </div> */}
        <Box>
            <AdminCarousel />
        </Box>
        <Button pos="absolute" top="0" onClick={onOpen}>Open Modal</Button>
        <Modal
            isOpen={isOpen}
            onClose={onClose}
        >
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Create Testimonial</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <Box>
                        <Box width="100%" borderWidth='1px' borderRadius='lg' overflow='hidden' p={4}>
                            <VStack spacing="5px" color="black">


                                <FormControl isRequired>
                                    <FormLabel htmlFor='first-name'>Name</FormLabel>
                                    <Input id='title' placeholder='Name' onChange={(e) => {
                                        setName(e.target.value);
                                    }} />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel htmlFor='first-name'>Position</FormLabel>
                                    <Input id='title' placeholder='Position' onChange={(e) => {
                                        setPosition(e.target.value);
                                    }} />
                                </FormControl>
                                <FormControl isRequired>
                                    <FormLabel htmlFor='description'>Message</FormLabel>
                                    <Input id='description' placeholder='Message' onChange={(e) => {
                                        setMessage(e.target.value);
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

export default AdminTestimonials