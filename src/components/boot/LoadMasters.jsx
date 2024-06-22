import React from "react";
import { useMasters } from "@/state";

export default function LoadMasters() {
    const { load } = useMasters();

    React.useEffect(() => {
        load();
    }, []);

    return null;
}
