Array.prototype.includesi = function (needle) {
    for (hay of this) {
        const result = new RegExp(`^${hay}$`, "i").test(needle);
        if (result) return result;
    }
    return false;
};
