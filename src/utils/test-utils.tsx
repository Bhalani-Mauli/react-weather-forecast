/**
 * We got this test setup file from React Testing library
 */
import React, { FC, ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import Theme from "./Theme";

const AllTheProviders: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Theme>{children}</Theme>;
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from "@testing-library/react";
export { customRender as render };
