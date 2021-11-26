import { createStore } from "redux";
import reducer from "./ToDo/reducer";

export const store = createStore(reducer);