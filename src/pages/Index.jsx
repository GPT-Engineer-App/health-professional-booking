import { Box, Button, Container, Flex, FormControl, FormLabel, Heading, IconButton, Input, Link, Menu, MenuButton, MenuItem, MenuList, Select, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";
import { FaBars, FaCalendarAlt, FaHome, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Flex direction="column" minH="100vh">
        {/* Navbar */}
        <Box bg="blue.500" color="white" px={4} py={2}>
          <Flex align="center">
            <Menu>
              <MenuButton as={IconButton} icon={<FaBars />} variant="outline" aria-label="Menu" />
              <MenuList>
                <MenuItem icon={<FaHome />}>Home</MenuItem>
                <MenuItem icon={<FaCalendarAlt />}>My Bookings</MenuItem>
                <MenuItem icon={<FaUserCircle />}>Manage Appointments</MenuItem>
                <MenuItem icon={<FaSignOutAlt />}>Logout</MenuItem>
              </MenuList>
            </Menu>
            <Spacer />
            <Text fontSize="lg" fontWeight="bold">
              Health Booking System
            </Text>
            <Spacer />
            <Link href="#" px={2}>
              Help
            </Link>
            <IconButton aria-label="User Settings" icon={<FaUserCircle />} variant="ghost" />
          </Flex>
        </Box>

        {/* Search and Filter Section */}
        <Box p={4}>
          <VStack spacing={4} align="stretch">
            <Heading size="md">Find a Health Professional</Heading>
            <Flex>
              <FormControl>
                <FormLabel>Keyword</FormLabel>
                <Input placeholder="Enter name, specialty..." />
              </FormControl>
              <Spacer mx={2} />
              <FormControl>
                <FormLabel>Specialty</FormLabel>
                <Select placeholder="Select specialty">
                  <option>General Practitioner</option>
                  <option>Dermatologist</option>
                  <option>Neurologist</option>
                </Select>
              </FormControl>
              <Spacer mx={2} />
              <FormControl>
                <FormLabel>Date</FormLabel>
                <Input type="date" />
              </FormControl>
            </Flex>
            <Button colorScheme="blue">Search</Button>
          </VStack>
        </Box>

        {/* Professional List */}
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4} p={4}>
          {Array.from({ length: 6 }).map((_, index) => (
            <Box key={index} p={4} boxShadow="md" borderRadius="md">
              <Heading size="sm">Dr. Jane Doe</Heading>
              <Text>Specialty: Dermatology</Text>
              <Text>Available: Mon, Wed, Fri</Text>
              <Button mt={2} colorScheme="teal">
                Book Appointment
              </Button>
            </Box>
          ))}
        </SimpleGrid>

        {/* Footer */}
        <Box bg="gray.100" color="gray.600" px={4} py={2} mt="auto">
          <Flex justify="space-between">
            <Text>© 2023 Health Booking System</Text>
            <Link href="#">Privacy Policy</Link>
          </Flex>
        </Box>
      </Flex>
    </Container>
  );
};

export default Index;
