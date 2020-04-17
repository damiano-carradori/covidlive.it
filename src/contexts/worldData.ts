import { slice } from "lodash";
import { WorldDataType } from "@Types/worldData";
import { getWorldDataReducer } from "@Reducers/worldData";
import { WORLD_DATA_FAIL, WORLD_DATA_FETCH, WORLD_DATA_SUCCESS } from "@Actions/worldData";
import { getWorldData } from "@Services/api";
import { noop } from "@Services/util";
import createContext from "./createContext";

type Store = {
  pending: boolean;
  error: boolean;
  errorMessage: string;
  data: WorldDataType[];
};

const defaultStore: Store = {
  pending: false,
  error: false,
  errorMessage: "",
  data: [],
};

const onGetWorldData = (dispatch: Function) => (onComplete: Function = noop, onError: Function = noop): void => {
  dispatch({ type: WORLD_DATA_FETCH });

  getWorldData()
    .then(response => {
      const data = slice(response, 0, 20);
      dispatch({ type: WORLD_DATA_SUCCESS, data });
      onComplete();
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: WORLD_DATA_FAIL, errorMessage: "Something went wrong" });
      onError();
    });
};

export const { Context, Provider } = createContext(getWorldDataReducer, { onGetWorldData }, defaultStore);
