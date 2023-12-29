import React, { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, type = "button", className, disabled }, ref) => {
    return (
      <button
        ref={ref}
        type={type}
        disabled={disabled}
        className={twMerge(
          `w-full px-3 py-3 
          bg-green-500 text-black font-bold 
          rounded-full border border-transparent
          hover:opacity-75 transition 
          disabled:cursor-not-allowed disabled:opacity-50
          `,
          className
        )}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button"; // 개발자 도구에서 표시할 이름

export default Button;
