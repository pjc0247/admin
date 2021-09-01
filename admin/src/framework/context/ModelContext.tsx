import React, { useContext } from 'react';

import { IDataProvider } from 'framework/data-provider/IDataProvider';

interface IModelContext {
  model: string;
  dataProvider: IDataProvider;
};

const ModelContext = React.createContext<IModelContext>({} as any);

export const useModel = (): IModelContext => {
  const context = useContext<IModelContext>(ModelContext);
  return context;
};

interface ModelProviderProps {
  model: string;
  dataProvider: IDataProvider;
  children: React.ReactNode;
};
export const ModelProvider = ({
  model,
  dataProvider,
  children,
}: ModelProviderProps) => {
  return (
    <ModelContext.Provider
      value={{
        model,
        dataProvider,
      }}
    >
      {children}
    </ModelContext.Provider>
  );
};
