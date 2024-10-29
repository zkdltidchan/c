import React, { useState, forwardRef } from 'react';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
}

const Dialog: React.FC<DialogProps> = ({ open, onOpenChange, children }) => {
  return (
    <>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <DialogOverlay onClose={() => onOpenChange(false)} />
          {children}
        </div>
      )}
    </>
  );
};

const DialogOverlay = ({ onClose }: { onClose: () => void }) => (
  <div
    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
    onClick={onClose}
  />
);

const DialogContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { className?: string }
>(({ children, className = '', ...props }, ref) => (
  <div
    ref={ref}
    className={`fixed left-1/2 top-1/2 z-50 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4 border bg-white p-6 shadow-lg duration-200 rounded-lg dark:border-strokedark dark:bg-boxdark ${className}`}
    {...props}
  >
    {children}
  </div>
));
DialogContent.displayName = 'DialogContent';

interface DialogTriggerProps {
  asChild?: boolean;
  children: React.ReactNode;
  onClick: () => void;
}

const DialogTrigger: React.FC<DialogTriggerProps> = ({ asChild = false, children, onClick }) => {
    return <div className='flex flex-col space-y-1.5 text-center sm:text-left' onClick={onClick}>{children}</div>;
};

const DialogHeader: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div className="flex flex-col space-y-1.5 text-center sm:text-left" {...props}>
    {children}
  </div>
);

const DialogFooter: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => (
  <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2" {...props}>
    {children}
  </div>
);

const DialogTitle = forwardRef<HTMLHeadingElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ children, ...props }, ref) => (
    <h2 ref={ref} className="text-lg font-semibold leading-none tracking-tight" {...props}>
      {children}
    </h2>
  )
);
DialogTitle.displayName = 'DialogTitle';

const DialogDescription = forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ children, ...props }, ref) => (
    <p ref={ref} className="text-sm text-gray-500" {...props}>
      {children}
    </p>
  )
);
DialogDescription.displayName = 'DialogDescription';

export {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogOverlay,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
