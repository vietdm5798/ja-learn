import { useCallback } from "react";
import { v4 } from "uuid";
import { addNotification, AppNotification } from "@/stores/slices/notificationSlice";
import { useAppDispatch } from "@/stores";

export interface NotifyHookResults {
  notify: (props?: Partial<AppNotification>) => void;
  notifyError: (props?: Partial<AppNotification>) => void;
}

export const useNotify = () => {
  const dispatch = useAppDispatch();

  const notify = useCallback<NotifyHookResults["notify"]>(
    (props) => {
      dispatch(
        addNotification({
          id: props?.id ?? v4(),
          type: props?.type ?? "success",
          content: props?.content ?? "Thành công!",
        }),
      );
    },
    [dispatch],
  );

  const notifyError = useCallback<NotifyHookResults["notifyError"]>(
    (props) => {
      dispatch(
        addNotification({
          id: props?.id ?? v4(),
          type: props?.type ?? "error",
          content: props?.content ?? "Đã có lỗi xảy ra!",
        }),
      );
    },
    [dispatch],
  );

  return {
    notify,
    notifyError,
  };
};
