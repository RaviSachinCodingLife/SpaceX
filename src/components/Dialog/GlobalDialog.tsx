import { Dialog, DialogProps } from '@mantine/core';

interface GlobalDialogProps extends DialogProps {
  children: React.ReactNode;
}

const GlobalDialog = ({ children, ...props }: GlobalDialogProps) => {
  return (
    <Dialog
      radius="md"
      size="lg"
      {...props}
      styles={{
        root: { zIndex: 300 },
      }}
    >
      {children}
    </Dialog>
  );
};

export default GlobalDialog;
