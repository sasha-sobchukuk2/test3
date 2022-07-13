import {Action, applyMiddleware, combineReducers, createStore} from "redux";
import MainReducer from "./main";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk, {ThunkAction} from "redux-thunk";


const rootReducer = combineReducers({
        Main: MainReducer
    }
)

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never

export type BaseThunkType<A extends Action = Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>






