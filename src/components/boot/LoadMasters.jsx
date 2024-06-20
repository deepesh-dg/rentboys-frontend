import React from "react";
import { useMasters } from "@/store";

export default function LoadMasters() {
    const { load } = useMasters();

    React.useEffect(() => {
        load();
    }, []);

    return null;
}
