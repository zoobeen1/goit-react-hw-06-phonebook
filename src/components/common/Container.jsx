import { Box } from './Box';
export const Container = ({ children }) => {
  return (
    <Box
      width="small" //xsmall,small,medium,large,xlarge,xxlarge
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
