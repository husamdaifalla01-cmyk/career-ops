import type { ButtonHTMLAttributes } from "react";

export function PsButton(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { className = "", ...rest } = props;
  return <button {...rest} className={`ps-button ${className}`} />;
}
