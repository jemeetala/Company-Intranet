import React from "react";
const variantClasses = {
  h1: "font-medium lg:text-[3px] xl:text-[4px] 2xl:text-[5px] 3xl:text-[6px] text-[7.2px]",
  h2: "font-medium lg:text-[12px] xl:text-[15px] 2xl:text-[16px] 3xl:text-[20px] text-[22.5px]",
  h3: "lg:text-[10px] xl:text-[13px] 2xl:text-[15px] 3xl:text-[18px] text-[20px]",
  h4: "xl:text-[12px] 2xl:text-[13px] 3xl:text-[16px] text-[18px] lg:text-[9px]",
  h5: "xl:text-[10px] 2xl:text-[12px] 3xl:text-[14px] text-[16px] lg:text-[8px]",
  h6: "font-medium 2xl:text-[10px] 3xl:text-[12px] text-[14.4px] lg:text-[7px] xl:text-[9px]",
  body1:
    "2xl:text-[10px] 3xl:text-[12px] text-[14px] lg:text-[7px] xl:text-[9px]",
  body2:
    "3xl:text-[10px] text-[12px] lg:text-[6px] xl:text-[8px] 2xl:text-[9px]",
  body3:
    "font-medium text-[10.8px] lg:text-[5px] xl:text-[7px] 2xl:text-[8px] 3xl:text-[9px]",
  body4:
    "font-normal text-[10px] lg:text-[5px] xl:text-[6px] 2xl:text-[7px] 3xl:text-[9px]",
};
const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
