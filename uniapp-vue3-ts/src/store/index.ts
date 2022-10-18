import { useAppStore } from "./modules/app";
import { createPinia } from "pinia";

export const store = createPinia();

export { useAppStore };
