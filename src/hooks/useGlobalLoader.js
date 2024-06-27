import React from "react";
import { useLoader } from "@/state";
import { getUniqueId } from "@/utils";

/**
 *
 * @param {boolean} loader
 */
function useGlobalLoader(loader) {
    const { addLoaderId, removeLoaderId } = useLoader();
    const idRef = React.useRef(null);

    React.useEffect(() => {
        if (loader) {
            const id = getUniqueId();
            addLoaderId(id);
            idRef.current = id;
        } else {
            removeLoaderId(idRef.current || 0);
        }

        return () => {
            removeLoaderId(idRef.current || 0);
        };
    }, [loader, addLoaderId, removeLoaderId]);
}

export default useGlobalLoader;
