import {DefaultController} from "./controller/DefaultController";

/**
 * All application routes.
 */
export const AppRoutes = [
    {
        path: "/",
        method: "get",
        action: new DefaultController().get
    },

];