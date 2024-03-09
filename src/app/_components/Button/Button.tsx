const size = {
  md: "",
  lg: "",
};

export default function Button({
  className,
  leftIcon,
  rightIcon,
  children,
  size,
  ...restProps
}: any) {
  return (
    <button
      className={`${className} w-[216px] h-[51px] rounded-md p-[20px_24px] bg-[#FEA12D] text-white flex flex-col justify-center items-center`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
}
