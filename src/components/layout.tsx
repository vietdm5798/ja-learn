import React, { PropsWithChildren } from "react";
import Head from "next/head";
import { Stack, Typography } from "@mui/material";

export const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <React.Fragment>
      <Head>
        <title>VietDM | Ja Learning</title>
        <meta name="description" content="VietDM create app for learn japanese" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Stack>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          py={1}
          px={3}
          sx={{ boxShadow: "0 0 4px 1px rgba(0, 0, 0, 0.2)" }}
        >
          <Typography variant="h4" fontWeight="bolder">
            VietDM
          </Typography>
          <Typography variant="h5">Learning Japanese</Typography>
        </Stack>
        {children}
      </Stack>
    </React.Fragment>
  );
};
