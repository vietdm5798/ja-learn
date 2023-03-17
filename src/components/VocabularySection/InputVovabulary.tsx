import { SubmitHandler, useForm } from "react-hook-form";
import { Box, Button, FormControl, Stack, TextField } from "@mui/material";

type FormValues = {
  firstName: string;
  lastName: string;
  email: string;
};

export const InputVocabulary = () => {
  const { register, handleSubmit } = useForm<FormValues>();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

  return (
    <Stack component="form" onSubmit={handleSubmit(onSubmit)} direction="row" flexWrap="wrap">
      <Box width="50%">
        <FormControl fullWidth>
          <TextField label="Email address" variant="standard" InputProps={{ sx: { textAlign: "center" } }} />
        </FormControl>
      </Box>
      <Box width="100%" textAlign="center">
        <Button variant="outlined" type="submit">
          Outlined
        </Button>
      </Box>
    </Stack>
  );
};
