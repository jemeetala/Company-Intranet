import React from "react";
import PropTypes from "prop-types";

const shapes = {
  RoundedBorder6: "rounded-radius6",
  CustomBorderTL4:
    "rounded-bl-[4px] rounded-br-[0] rounded-tl-[4px] rounded-tr-[0]",
  CustomBorderLR4:
    "rounded-bl-[0] rounded-br-[4px] rounded-tl-[0] rounded-tr-[4px]",
  icbRoundedBorder4: "rounded-radius4",
  icbCircleBorder8: "rounded-radius8",
  icbCircleBorder20: "rounded-radius20",
};
const variants = {
  FillIndigo500: "bg-indigo_500 text-white_A700",
  OutlineGray301:
    "bg-gray_301 outline outline-[0.5px] outline-gray_301 text-bluegray_401",
  OutlineBluegray100:
    "outline outline-[0.5px] outline-bluegray_100 text-bluegray_401",
  FillIndigoA200: "bg-indigo_A200 text-white_A700",
  OutlineBluegray700:
    "border border-bluegray_700 border-solid text-bluegray_700",
  FillIndigo100: "bg-indigo_100 text-white_A700",
  FillGreen400: "bg-green_400 text-white_A700",
  OutlineBluegray50:
    "bg-white_A700 border border-bluegray_50 border-solid text-gray_601",
  icbOutlineBluegray100: "border border-bluegray_100 border-solid",
  icbOutlineIndigoA200: "bg-gray_201 border border-indigo_A200 border-solid",
  icbOutlineWhiteA700: "bg-indigo_A200 border border-solid border-white_A700",
  icbFillWhiteA70033: "bg-white_A700_33",
  icbFillGray103: "bg-gray_103",
  icbOutlineBluegray1001_2:
    "bg-white_A700 border border-bluegray_100 border-solid",
};
const sizes = {
  sm: "lg:p-[3px] 2xl:p-[4px] xl:p-[4px] 3xl:p-[5px] p-[6px]",
  md: "lg:p-[4px] 2xl:p-[6px] xl:p-[6px] 3xl:p-[8px] p-[9px]",
  lg: "3xl:p-[10px] p-[12px] lg:p-[6px] xl:p-[8px] 2xl:p-[9px]",
  smIcn: "p-[2px]",
  mdIcn: "lg:p-[4px] xl:p-[5px] 2xl:p-[6px] 3xl:p-[7px] p-[8px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant,
  size,
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${shapes[shape] || ""} ${
        variants[variant] || ""
      } ${sizes[size] || ""} common-button `}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf([
    "RoundedBorder6",
    "CustomBorderTL4",
    "CustomBorderLR4",
    "icbRoundedBorder4",
    "icbCircleBorder8",
    "icbCircleBorder20",
  ]),
  variant: PropTypes.oneOf([
    "FillIndigo500",
    "OutlineGray301",
    "OutlineBluegray100",
    "FillIndigoA200",
    "OutlineBluegray700",
    "FillIndigo100",
    "FillGreen400",
    "OutlineBluegray50",
    "icbOutlineBluegray100",
    "icbOutlineIndigoA200",
    "icbOutlineWhiteA700",
    "icbFillWhiteA70033",
    "icbFillGray103",
    "icbOutlineBluegray1001_2",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smIcn", "mdIcn"]),
};
Button.defaultProps = { className: "", shape: "", variant: "", size: "" };

export { Button };
