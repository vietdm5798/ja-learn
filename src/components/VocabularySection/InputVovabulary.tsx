import { SubmitHandler, useForm } from "react-hook-form";
import {
  Box,
  Button,
  FormControl,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  TextField,
} from "@mui/material";
import { useFetch } from "@/repositories/useFetch";
import { useNotify } from "@/components/Notification/hook";
import { useEffect, useState } from "react";
import { LanguageResponse } from "@/types/ApiResponse";

type FormValues = {
  lang_ja: string;
  lang_vi: string;
};

type Languages = Record<"lang_vi" | "lang_ja", string>[];

const md5 = require("md5");

export const InputVocabulary = () => {
  const { register, handleSubmit, reset, setFocus } = useForm<FormValues>();
  const { get, post } = useFetch();
  const { notify, notifyError } = useNotify();
  const [languages, setLanguages] = useState<Languages>([]);
  const [languageLeft, setLanguageLeft] = useState<Languages>([]);
  const [languageRight, setLanguageRight] = useState<Languages>([]);

  const loadLanguages = async () => {
    const result: LanguageResponse = await get("language");
    if (!result.success || !result.data) {
      return notifyError({ content: result.message });
    }
    setLanguages(result.data);
  };

  useEffect(() => {
    loadLanguages();
  }, []);

  useEffect(() => {
    const leftLength = Math.ceil(languages.length / 2) - 1;
    setLanguageLeft(languages.slice(0, leftLength));
    if (languages.length % 2 === 1) {
      setLanguageRight([...languages.slice(leftLength), { lang_vi: "=====", lang_ja: "=====" }]);
    } else {
      setLanguageRight(languages.slice(leftLength));
    }
  }, [languages]);

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const result = await post("language", data);
    if (result.success === true) {
      notify({ content: result.message });
      reset();
      setFocus("lang_ja");
      loadLanguages();
    } else {
      notifyError({ content: result.message });
    }
  };

  const renderTableLanguage = (dataLanguage: Languages) => {
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableBody>
            {dataLanguage.map((language) => (
              <TableRow key={md5(language.lang_vi)} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell align="center" sx={{ width: "50%" }}>
                  {language.lang_ja}
                </TableCell>
                <TableCell align="center" sx={{ width: "50%" }}>
                  {language.lang_vi}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  };

  return (
    <Stack direction="row" flexWrap="wrap">
      <Box width="49%" mr="1%">
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <FormControl sx={{ width: "48%", margin: "1%" }}>
            <TextField
              label="Tiếng Nhật"
              variant="standard"
              InputProps={{ sx: { textAlign: "center" } }}
              {...register("lang_ja", { required: true })}
            />
          </FormControl>
          <FormControl sx={{ width: "48%", margin: "1%" }}>
            <TextField
              label="Tiếng Việt"
              variant="standard"
              InputProps={{ sx: { textAlign: "center" } }}
              {...register("lang_vi", { required: true })}
            />
          </FormControl>
          <Box width="100%" textAlign="center">
            <Button variant="outlined" type="submit">
              Thêm từ
            </Button>
          </Box>
        </Box>
        <Box mt="11px">{renderTableLanguage(languageLeft)}</Box>
      </Box>
      <Box width="49%" ml="1%">
        {renderTableLanguage(languageRight)}
      </Box>
    </Stack>
  );
};
