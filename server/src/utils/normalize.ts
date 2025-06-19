interface NormalizeStringOptions {
    trim?: boolean;
    toLowerCase?: boolean;
    toUpperCase?: boolean;
}

export function normalizeString(
    value: string,
    options: NormalizeStringOptions = {trim: true, toLowerCase: false, toUpperCase: false}
): string {
    let result = value;

    if (options.trim) {
        result = result.trim();
    }

    if (options.toLowerCase) {
        result = result.toLowerCase();
    }

    if (options.toUpperCase) {
        result = result.toUpperCase();
    }

    return result;
}


export function normalizeEmail(email: string): string {
    return normalizeString(email, {trim: true, toLowerCase: true});
}