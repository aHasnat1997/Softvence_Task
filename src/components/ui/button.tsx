import { JSX } from "react";

/**
 * Button component definition
 * This component renders a customizable button with different styles and shapes.
 * 
 * @param {Object} props - The properties object.
 * @param {string|React.ReactNode} [props.title='Button'] - The text or React node to display inside the button.
 * @param {'primary'|'secondary'|'tertiary'} [props.variant='primary'] - The style variant of the button.
 * @param {'rounded'|'square'} [props.shape='square'] - The shape of the button.
 * @param {string} [props.customStyle='px-[24px] py-[18px] text-lg'] - Additional custom styles for the button.
 * @param {boolean} [props.fullWidth=false] - If true, the button will take the full width of its container.
 * @param {Object} [props.rest] - Any other props to pass to the button element.
 * @returns {JSX.Element} The rendered button component.
 */
export default function Button({
  title = 'Button',
  variant = 'primary',
  shape = 'square',
  type = 'button',
  disabled = false,
  customStyle = 'px-[12px] md:px-[24px] py-[9px] md:py-[18px] md:text-lg',
  fullWidth = false,
  onClick,
  ...props
}: {
  title?: string | React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  shape?: 'rounded' | 'square';
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  customStyle?: string;
  fullWidth?: boolean;
  onClick?: () => void;
}): JSX.Element {
  return (
    <button
      className={`
        cursor-pointer duration-200 active:scale-[.98] active:shadow-none hover:shadow-[5px_5px_2px_rgba(0,0,0,0.25)] font-bold
        ${fullWidth ? 'w-full' : ''}
        ${shape === 'rounded' ? 'rounded-full' : shape === 'square' ? 'rounded-[8px]' : ''}
        ${variant === 'primary' ? 'bg-[#002868] text-white' : variant === 'secondary' ? 'bg-transparent border border-[#010205] text-[#010205] ' : variant === 'tertiary' ? 'bg-[#FCE38A] text-[#00245F]' : ''}
        ${customStyle}
      `}
      onClick={onClick}
      type={type} // Set the button type (button, submit, reset)
      disabled={disabled} // Disable the button if the disabled prop is true
      {...props} // Spread any additional props onto the button element
    >
      {title} {/* Render the button title or content */}
    </button>
  );
};
