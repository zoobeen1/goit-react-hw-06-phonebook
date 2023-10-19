import Box from './Box';
const Container = ({ children }) => {
  return (
    <Box
      width="small"
      border="normal"
      borderRadius="normal"
      mt={5}
      mx="auto"
      p={3}
      boxShadow="normal"
      bg="background"
    >
      {children}
    </Box>
  );
};
export default Container;
