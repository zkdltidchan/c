import * as React from "react";

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> { }

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
    ({ className, ...props }, ref) => (
        <label
            ref={ref}
            className="mb-3 block text-sm font-medium text-black dark:text-white"
            {...props}
        />
    )
);
Label.displayName = "Label";


export { Label }