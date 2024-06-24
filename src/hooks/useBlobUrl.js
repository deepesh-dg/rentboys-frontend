/* eslint-disable no-redeclare */
import { useEffect } from "react";
import { getBlobUrl } from "@/utils";
import useState from "./useState";

/**
 * @overload
 * @param {File} files
 * @returns {string}
 */
/**
 * @overload
 * @param {File[]} files
 * @returns {string[]}
 */
/**
 *
 * @param {File | File[] | null} files
 * @returns {string | string[]}
 */
function useBlobUrl(files) {
    const isArray = Array.isArray(files);

    const [urls, setUrls] = useState([]);

    useEffect(() => {
        if (files && (isArray ? files.length > 0 : true)) {
            if (isArray) {
                files.forEach((file, i) => {
                    getBlobUrl(file).then(url =>
                        setUrls(draft => {
                            draft[i] = url;
                        })
                    );
                });
            } else getBlobUrl(files).then(url => setUrls(() => [url]));
        } else setUrls(() => []);
    }, [files, isArray]);

    return isArray ? urls : urls[0] || "";
}

export default useBlobUrl;
