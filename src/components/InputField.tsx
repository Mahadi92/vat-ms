import classNames from "classnames";
import React, { useState } from "react";
// import HideIco from '../icons/HideIco';
// import ShowIco from '../icons/ShowIco';

interface PropType {
  type?:
    | "text"
    | "password"
    | "email"
    | "number"
    | "tel"
    | "search"
    | "url"
    | "date"
    | "time"
    | "textarea";
  name: string;
  label: string;
  onChange?: (e: any) => void;
  placeholder?: string;
  Icon?: any;
  defaultValue?: string | Date | number;

  hasError?: boolean;
  disabled?: boolean;
  helperText?: string;
  className?: string;
  labelClassName?: string;
  rest?: any;
}

const InputField: React.FC<PropType> = ({
  type = "text",
  name,
  label = "Input",
  placeholder,
  Icon,
  onChange,
  rest,
  defaultValue,
  hasError,
  helperText,
  className,
  labelClassName,
  disabled,
}) => {
  const [isShowPass, setIsShowPass] = useState(false);

  return (
    <div className="w-full grid gap-1.5">
      <label
        className={`text-sm md:text-base ${labelClassName}`}
        htmlFor={name}
      >
        {label}
      </label>
      <div className="relative">
        {type === "textarea" ? (
          <textarea
            className={classNames(
              `w-full p-2 rounded-lg border border-slate-100 focus:border-primary text-font-light ${className}`,
              {
                "disabled:bg-slate-200 cursor-not-allowed": disabled,
              }
            )}
            onChange={onChange}
            name={name}
            id={name}
            rows={3}
            disabled={disabled}
            value={defaultValue}
            {...rest}
          ></textarea>
        ) : (
          <input
            className={classNames(
              `w-full pl-4 rounded-lg h-12 border hover:border-primary/30 focus:border-primary ${className}`,
              {
                "disabled:bg-slate-200 cursor-not-allowed": disabled,
              }
            )}
            onChange={onChange}
            type={
              type === "password" ? (isShowPass ? "text" : "password") : type
            }
            name={name}
            id={name}
            disabled={disabled}
            placeholder={placeholder}
            value={defaultValue}
            {...rest}
          />
        )}

        <button
          type="button"
          className={classNames(
            "absolute flex items-center justify-center w-9 h-11 bg-transparent top-1.5 right-1.5 align-middle rounded-md",
            {
              "cursor-default lg:cursor-pointer": type === "password",
              "cursor-default": type != "password",
              "bg-transparent": disabled === true,
            }
          )}
          onClick={() => setIsShowPass(!isShowPass)}
        >
          {/* {type === 'password' ? isShowPass ? <HideIco /> : <ShowIco /> : Icon} */}
        </button>

        <p
          className={classNames("text-sm absolute", {
            "text-red-500": hasError,
            "text-gray-500": !hasError,
          })}
        >
          {helperText}
        </p>
      </div>
    </div>
  );
};

export default InputField;
