import { Box, Button, Container, HStack, ListItem, StackDivider, UnorderedList, VStack } from "@chakra-ui/react";
import Axios from "axios";
import React, { useEffect, useState } from "react";

const AdminContacts = () => {
    const [contacts, setContacts] = useState([]);
    const [count, setCount] = useState(15);

    const loadMore = () => {
        setCount(count + 15);
    }

    const cut = contacts.slice(0, count);

    useEffect(() => {
        Axios.get("http://localhost:5000/getcontact").then((response) => {
            console.log(response.data);
            setContacts(response.data);
        });
    }, []);

    return (
        <Box maxW="1200px" margin="auto">
        <HStack
            divider={<StackDivider borderColor="gray.200" border="2px" />}
            spacing={4}
            align="stretch" display="flex" wrap="wrap" justify=""
            >
            {cut.map((contact) => {
                return(
                    <UnorderedList background="#C6F6D5" margin="10px">
                        <ListItem>First Name: {contact.firstName}</ListItem>
                        <ListItem>Last Name: {contact.lastName}</ListItem>
                        <ListItem>Contact: {contact.contact}</ListItem>
                        <ListItem>Email: {contact.email}</ListItem>
                        <ListItem>Message: {contact.message}</ListItem>
                    </UnorderedList>
                )
            })}
        </HStack>
        <Button onClick={loadMore} margin="20px">Load More</Button>
        </Box>
    );
};

export default AdminContacts;
