import { createStandaloneToast } from "@chakra-ui/react";

export function Toast() {
  const { ToastContainer } = createStandaloneToast();
  return (
    <ToastContainer />
  );
}
