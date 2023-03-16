import { Props } from "./Button.types";

const Button = ({ text, onClick }: Props) => {
  return (
    <button
      type='button'
      className='bg-blue-500 rounded-lg px-4 py-2 text-white w-max'
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
