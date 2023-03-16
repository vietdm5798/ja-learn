import { Layout } from "@/components/layout";
import { Box, Container } from "@mui/material";
import { Alert } from "@/components/ui/Alert";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box py={3} width="100%">
          <Alert sx={{ fontSize: 18, justifyContent: "center" }} severity="info">
            Nhập dữ liệu từ mới
          </Alert>
        </Box>
      </Container>
    </Layout>
  );
};

export default Page;
