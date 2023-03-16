import { Alert as AlertMUI, AlertProps } from "@mui/material";
import { FC, PropsWithChildren } from "react";

export const Alert: FC<PropsWithChildren<AlertProps>> = ({ children, ...props }) => {
  return (
    <AlertMUI icon={false} {...props}>
      {children}
    </AlertMUI>
  );
};
