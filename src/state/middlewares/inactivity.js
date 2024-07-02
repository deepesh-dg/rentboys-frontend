// src/middleware/inactivityMiddleware.js

const inactivityMiddleware = store => {
    let timeoutId;

    const resetTimeout = () => {
        if (timeoutId) {
            clearTimeout(timeoutId);
        }
        timeoutId = setTimeout(
            () => {
                // Clear session storage and reset the state
                sessionStorage.clear();
                store.dispatch({ type: "RESET_SESSION" });
            },
            2 * 60 * 1000
        ); // 2 minutes
    };

    return next => action => {
        // Reset timeout on every action
        resetTimeout();
        return next(action);
    };
};

export default inactivityMiddleware;
