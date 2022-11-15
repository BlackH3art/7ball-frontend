import { FC, useContext } from "react";
import { motion } from "framer-motion";
import { AppContext } from "../../context/AppContext";

const TicketModal: FC = () => {

  const { setShowTicketModal } = useContext(AppContext);

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: .3 }}
        className="fixed flex items-center justify-center top-0 z-40 w-full h-screen bg-[#11111125] backdrop-blur-lg"
      >
        <motion.div 
          className="flex items-end w-[400px] h-3/5 bg-[#080614] border-[1px] border-sub-purple backdrop-blur-lg drop-shadow-[0_10px_20px_rgba(180,91,255,0.35)]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: .3, delay: .2 }}
        >


          <div className="flex justify-center w-full">
            <button 
              className="rounded-md mr-3 p-2 px-6 uppercase border-[1px] border-main-purple font-bold text-main-purple"
              onClick={() => setShowTicketModal(false)}
            >
              cancel
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default TicketModal;