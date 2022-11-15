import { createContext, FC, ReactNode, useState } from "react";

import { AppContextInterface } from "../interfaces/AppContextInterface";


export const AppContext = createContext<AppContextInterface>({
  showTicketModal: false,
  setShowTicketModal: ()=> {}
})

interface Props {
  children: ReactNode;
}

export const AppContexProvider: FC<Props> = ({ children }) => {

  const [showTicketModal, setShowTicketModal] = useState(false);

  return(
    <AppContext.Provider value={{
      showTicketModal,
      setShowTicketModal,
    }}>
      {children}
    </AppContext.Provider>
  )
}