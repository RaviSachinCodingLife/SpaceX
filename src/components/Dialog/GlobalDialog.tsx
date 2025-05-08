import { Dialog } from '@mantine/core';
import { GlobalDialogProps } from './type';


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
