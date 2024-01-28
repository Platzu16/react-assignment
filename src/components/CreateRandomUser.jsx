import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardBody, Heading, Text, Box, Button } from "@chakra-ui/react";

function CreateRandomUser() {
  const [randomUser, setRandomUser] = useState(null);

  useEffect(() => {
    fetchRandomUser();
  }, []);

  const fetchRandomUser = () => {
    const getRandomUser = async () => {
      try {
        const response = await axios.get("https://randomuser.me/api/");
        let { data } = response;
        let user = data.results[0];
        let { email, name } = user;
        let newUser = { email: email, fullName: name };
        setRandomUser(newUser);
        localStorage.setItem("randomUser", JSON.stringify(newUser));
      } catch (error) {
        console.error("Error fetching random user:", error.message);
      }
    };
    const savedRandomUser = localStorage.getItem("randomUser");
    if (savedRandomUser) {
      setRandomUser(JSON.parse(savedRandomUser));
    } else {
      getRandomUser();
    }
  };

  const handleRefresh = () => {
    localStorage.removeItem("randomUser");
    fetchRandomUser();
  };

  return (
    <>
      <Card>
        <CardBody>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Random Users
            </Heading>
            <Text pt="2" fontSize="sm">
              {randomUser && (
                <div>
                  <p>Email: {randomUser.email}</p>
                  <p>
                    Name:{" "}
                    {`${randomUser.fullName.first} ${randomUser.fullName.last}`}
                  </p>
                </div>
              )}
            </Text>
            <Box mt={2}>
              <Button
                variant="outline"
                colorScheme="blue"
                onClick={handleRefresh}
              >
                Refresh
              </Button>
            </Box>
          </Box>
        </CardBody>
      </Card>
    </>
  );
}

export default CreateRandomUser;
