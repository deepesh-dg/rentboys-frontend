import React from "react";
import { useMasters } from "@/store/hooks/masters";

export default function LoadMasters() {
    const { load } = useMasters();

    React.useEffect(() => {
        load();
    }, []);

    return null;
}
