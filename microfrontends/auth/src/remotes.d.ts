declare module "app-*/Component" {
  import { AppComponentProps } from "./types";
  import { FC } from "react";

  const Component: FC<AppComponentProps>;
  export default Component;
}

declare module "app-*/Form" {
  import { AppComponentProps } from "./types";
  import { FC } from "react";

  const Component: FC<AppComponentProps>;
  export default Component;
}
