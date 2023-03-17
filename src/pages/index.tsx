import { Layout } from "@/components/layout";
import { Box, Container } from "@mui/material";
import { Alert } from "@/components/ui/Alert";
import { InputVocabulary } from "@/components/VocabularySection/InputVovabulary";

const Page = () => {
  return (
    <Layout>
      <Container>
        <Box py={3} width="100%">
          <Alert sx={{ fontSize: 18, justifyContent: "center" }} severity="info">
            Nhập dữ liệu từ mới
          </Alert>
          <Box my={3} borderRadius="4px" p={2} sx={{ boxShadow: "0 2px 4px 1px rgba(0, 0, 0, 0.1)" }}>
            <InputVocabulary />
          </Box>
        </Box>
      </Container>
    </Layout>
  );
};

export default Page;
