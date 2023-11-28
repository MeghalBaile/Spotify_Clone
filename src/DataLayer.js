import React,{ createContext,useContext,useReducer} from "react";

export const DatalayerContext = createContext();

export const DataLayer = ({initialState,reduce,children}) =>(
    <DataLayerContext.Provider value={useReducer(reduce,initialState)}>
        {children}
        </DataLayerContext.Provider>
)

export const useDataLayerValue = () => useContext(DataLayerContext);
