import {
  MenuDescendantsProvider,
  useDisclosure,
  UseDisclosureReturn,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { createContext, ReactNode, useContext, useEffect } from "react";

interface SidebarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextProps = UseDisclosureReturn;

const SidebarDrawerContext = createContext({} as SidebarDrawerContextProps);

export function SidebarDrawerProvider({
  children,
}: SidebarDrawerProviderProps) {

  const disclosure = useDisclosure();


  const router = useRouter();
  useEffect(() => {
    disclosure.onClose();
  }, [router.asPath]);

  return (
    <SidebarDrawerContext.Provider value={disclosure}>
      {children}
    </SidebarDrawerContext.Provider>
  );
}

//Para não usar o useContext, vamos criar um hook
export const useSidebarDrawer = () => useContext(SidebarDrawerContext);
