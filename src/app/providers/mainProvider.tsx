import {Provider} from "react-redux";
import {store} from "../store.ts";
import React from "react";

interface MainProviderProps {
    children: React.ReactNode;
}

export function MainProvider({children}: MainProviderProps) {
    return <Provider store={store}>{children}</Provider>;
}