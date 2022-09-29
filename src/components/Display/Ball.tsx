import { FC } from "react";

interface Props {
  number: number;
}

export const Ball: FC<Props> = ({ number }) => {

  const color = () => {

    let colorClass;

    if(number <= 10) {
      colorClass = 'green-ball';
    } else if(number >= 11 && number <= 20) {
      colorClass = 'yellow-ball'
    } else if(number >= 21 && number <= 30) {
      colorClass = 'blue-ball';
    } else if(number >= 31 && number <= 36) {
      colorClass = 'orange-ball';
    }

    return `${colorClass}`
  }


  return (
    <>
      <div className="w-[11vmin] h-[11vmin] relative mx-2">

        <div className="shadow w-[8vmin] h-[1vmin] absolute rounded-full"></div>

        <div className={`w-[11vmin] h-[11vmin] absolute rounded-full shadow-3xl bg-gradient-to-b ${color()}`}>
          <p className="absolute text-lg sm:text-2xl md:text-4xl top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] font-bold border-b-4 border-black">
            {number}
          </p>
        </div>

      </div>
    </>
  )
}