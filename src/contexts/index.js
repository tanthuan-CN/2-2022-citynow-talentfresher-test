import React from "react";

export const PageContext = React.createContext({});
export const PageProvider = PageContext.Provider;
export const PageConsumer = PageContext.Consumer;

// checkoutStatus context
export const CheckoutContext = React.createContext({});
export const CheckoutProvider = CheckoutContext.Provider;
export const CheckoutConsumer = CheckoutContext.Consumer;

// rooms data context
export const RoomsContext = React.createContext({});
export const RoomsProvider = RoomsContext.Provider;
export const RoomsConsumer = RoomsContext.Consumer;

// locale context
export const LocaleContext = React.createContext({});
export const LocaleProvider = LocaleContext.Provider;
export const LocaleConsumer = LocaleContext.Consumer;
