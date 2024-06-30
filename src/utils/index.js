export async function getBlob(file, options) {
    if (typeof file === "string") {
        const f1 = await fetch(file);
        const blob = await f1.blob();

        return blob;
    }

    return new Promise((resolve, reject) => {
        const reader = new FileReader();

        const readerListener = () => {
            if (reader.result instanceof ArrayBuffer) {
                const arrayBufferView = new Uint8Array(reader.result);
                const blob = new Blob([arrayBufferView], {
                    type: file.type,
                    ...options,
                });

                resolve(blob);
            } else {
                reject(new Error("Error Converting"));
            }
        };

        reader.addEventListener("load", readerListener);

        reader.readAsArrayBuffer(file);
    });
}

export async function getBlobUrl(file) {
    const blob = await getBlob(file);
    const urlCreator = window.URL || window.webkitURL;
    const blobUrl = urlCreator.createObjectURL(blob);

    return blobUrl;
}

export function getUniqueId() {
    const timestamp = new Date().getTime();
    const random = Math.floor(Math.random() * 1000000); // Adjust the range as needed
    const uniqueId = timestamp * 1000000 + random; // Combine timestamp and random number

    return uniqueId;
}

/**
 *
 * @param {number} start
 * @param {number} end
 * @returns {number[]}
 */
export function range(start, end) {
    return [...Array(end - start).keys()].map(i => i + start);
}
