import React, { useState } from 'react'
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup, InputRightElement } from "@chakra-ui/input";
import { Box, VStack, Button, useToast } from '@chakra-ui/react'
import { useNavigate } from "react-router-dom"
import Axios from 'axios'

const Login = ({ setLoginUser }) => {
    const toast = useToast();
    const [show, setShow] = useState();
    const [admin, setAdmin] = useState({
        username: "",
        password: ""
    });

    const navigate = useNavigate();

    const handleClick = () => setShow(!show);

    const handleChange = e => {
        const { name, value } = e.target
        setAdmin({
            ...admin,//spread operator 
            [name]: value
        })
    }

    const login = () => {
        Axios.post("http://localhost:5000/admin", admin)
            .then(res => {
                if (res.data.message === "login sucess") {
                    toast({
                        title: `Login successful`,
                        status: 'success',
                        isClosable: true,
                    })
                } else {
                    toast({
                        title: `Wrong credentials`,
                        status: 'error',
                        isClosable: true,
                    })
                }
                setLoginUser(res.data.admin);
                navigate("/admin")
            })
    }

    return (
        <Box w="100%" h="100vh" display="flex" alignItems="center">
            <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden' margin="auto" p={4}>
                <VStack spacing="5px" color="black">

                    <FormControl id="email" isRequired>
                        <FormLabel>Username</FormLabel>
                        <Input name="username" value={admin.username} onChange={handleChange} placeholder="username" />
                    </FormControl>

                    <FormControl id="password" isRequired>
                        <FormLabel>Password</FormLabel>
                        <InputGroup size="md">
                            <Input type={show ? "text" : "password"} placeholder="Enter Password" name="password" value={admin.password} onChange={handleChange} />
                            <InputRightElement width="4.5rem">
                                <Button h="1.75rem" size="sm" onClick={handleClick} >
                                    {show ? "Hide" : "Show"}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                    </FormControl>

                    <Button
                        colorScheme="blue"
                        width="100%"
                        color="white"
                        style={{ marginTop: 15 }}
                        onClick={login}
                    // isLoading={loading}
                    >
                        Login
                    </Button>

                </VStack>
            </Box>
        </Box>
    )
}

export default Login