import { FC } from "react";

interface Props {
  num: number;
  handler: (e: any) => void;
  active: boolean;
}

const NumberButton: FC<Props> = ({ num, handler, active }) => {
  return (
    <>
      <input
        className="p-2 border-[1px] m-[2px] border-gray-600 text-white"
        type="button"
        value={num}
        name={num.toString()}
        onClick={handler}
      />
    </>
  );
};

export default NumberButton;