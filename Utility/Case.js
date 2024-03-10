export const kebabToCamel = (str, upper = false) =>
    str.toLowerCase().replace(/-./g, m => m.toUpperCase()[1]);

export const camelToKebab = (str) =>
    str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

    
export const snakeToCamel = (str, upper = false) =>
    str.toLowerCase().replace(/_./g, m => m.toUpperCase()[1]);

export const camelToSnake = (str) =>
    str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').toUpperCase();
