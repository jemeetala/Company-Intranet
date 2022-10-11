import { ErrorMessage } from "../../components/ErrorMessage";
import React from "react";
import PropTypes from "prop-types";

const variants = {
  OutlineBluegray100: "bg-white_A700 border border-bluegray_100 border-solid",
  FillGray103: "bg-gray_103",
  srcFillGray201: "bg-gray_201",
  srcOutlineBluegray100:
    "bg-white_A700 border border-bluegray_100 border-solid",
};
const shapes = {
  RoundedBorder4: "rounded-radius4",
  srcRoundedBorder4: "rounded-radius4",
};
const sizes = {
  sm: "p-[10px] lg:p-[5px] xl:p-[6px] 2xl:p-[7px] 3xl:p-[9px]",
  md: "lg:pb-[18px] xl:pb-[23px] 2xl:pb-[26px] 3xl:pb-[31px] pb-[35px] xl:pt-[10px] 2xl:pt-[11px] 3xl:pt-[13px] pt-[15px] lg:pt-[8px] xl:px-[10px] 2xl:px-[11px] 3xl:px-[13px] px-[15px] lg:px-[8px]",
  lg: "3xl:pb-[11px] pb-[13px] lg:pb-[6px] xl:pb-[8px] 2xl:pb-[9px] xl:pt-[10px] 2xl:pt-[12px] 3xl:pt-[14px] pt-[16px] lg:pt-[8px] 3xl:px-[11px] px-[13px] lg:px-[6px] xl:px-[8px] 2xl:px-[9px]",
  smSrc:
    "pb-[4px] lg:pt-[4px] 2xl:pt-[6px] xl:pt-[6px] 3xl:pt-[8px] pt-[9px] px-[4px]",
  mdSrc:
    "xl:pb-[10px] 2xl:pb-[12px] 3xl:pb-[14px] pb-[16px] lg:pb-[8px] lg:pt-[10px] xl:pt-[12px] 2xl:pt-[14px] 3xl:pt-[17px] pt-[19px] xl:px-[10px] 2xl:px-[12px] 3xl:px-[14px] px-[16px] lg:px-[8px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} ${shapes[shape] || ""} ${
            variants[variant] || ""
          } ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf(["RoundedBorder4", "srcRoundedBorder4"]),
  variant: PropTypes.oneOf([
    "OutlineBluegray100",
    "FillGray103",
    "srcFillGray201",
    "srcOutlineBluegray100",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg", "smSrc", "mdSrc"]),
};
Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "RoundedBorder4",
  variant: "OutlineBluegray100",
  size: "sm",
};

export { Input };
