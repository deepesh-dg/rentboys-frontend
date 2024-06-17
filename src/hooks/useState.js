import React from "react";
import { produce } from "immer";

/**
 * @template T
 * @param {T} value
 * @param {boolean} immer
 * @returns {[T, (updater: (prevStateDraft: T) => void | T) => void]}
 */
function useState(value, immer = false) {
    const state = React.useState(value);

    const setData =
        value instanceof Object || immer
            ? updater => {
                  state[1](prevState => produce(prevState, updater));
              }
            : state[1];

    return [state[0], setData];
}

export default useState;
