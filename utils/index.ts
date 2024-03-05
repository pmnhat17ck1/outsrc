export function removeEmptyProperties(
    obj: Record<string, any>
): Record<string, any> {
    const newObj: Record<string, any> = { ...obj };

    Object.keys(newObj).forEach(key => {
        if (Array.isArray(newObj[key]) && newObj[key].length === 0) {
            delete newObj[key];
        } else if (
            newObj[key] === "" ||
            newObj[key] === null ||
            newObj[key] === undefined
        ) {
            delete newObj[key];
        }
    });

    return newObj;
}

export const toUTC = (time: number): Date => new Date(time);

export const expiredTime = (
    time: string | number
): number | Date | undefined => {
    const now = new Date();
    let expirationTime;
    if (!(typeof time === "string")) {
        return time === -1 ? -1 : now.getTime() + time;
    }
    const matchResult = time.match(/[a-zA-Z]+|[0-9]+/g);
    if (matchResult) {
        const [value, unit]: any = matchResult;
        switch (unit) {
            case "s":
                expirationTime = now.getTime() + value * 1000;
                break;
            case "m":
                expirationTime = now.getTime() + value * 60 * 1000;
                break;
            case "h":
                expirationTime = now.getTime() + value * 60 * 60 * 1000;
                break;
            case "d":
                expirationTime = now.getTime() + value * 24 * 60 * 60 * 1000;
                break;
            case "M":
                expirationTime = new Date(
                    now.getUTCFullYear(),
                    now.getUTCMonth() + value,
                    now.getUTCDate(),
                    now.getUTCHours(),
                    now.getUTCMinutes(),
                    now.getUTCSeconds()
                ).getTime();
                break;
            case "y":
                expirationTime = new Date(
                    now.getUTCFullYear() + value,
                    now.getUTCMonth(),
                    now.getUTCDate(),
                    now.getUTCHours(),
                    now.getUTCMinutes(),
                    now.getUTCSeconds()
                ).getTime();
                break;
            default:
                throw new Error(`Invalid unit: ${unit}`);
        }
        return toUTC(expirationTime);
    }
    return undefined;
};

export function capitalizeFirstLetter(string: String) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
