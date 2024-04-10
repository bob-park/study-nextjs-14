'use client';

import { createContext, useState } from 'react';

export const TabContext = createContext({
  tabIndex: 0,
  setTabIndex: (value: number) => {},
});

export default function TabProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [tabIndex, setTabIndex] = useState<number>(0);

  return (
    <TabContext.Provider value={{ tabIndex, setTabIndex }}>
      {children}
    </TabContext.Provider>
  );
}
