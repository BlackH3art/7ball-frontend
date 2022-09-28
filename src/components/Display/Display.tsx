import { FC } from "react"
import { Ball } from "./Ball"

export const Display: FC = () => {

  return (
    <>
      <section className="w-full h-[20vh]">

        <div className="flex mx-auto h-full w-3/5">
          <Ball />
        </div>

      </section>
    </>
  )
}