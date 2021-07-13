/**
 * Log debug information to console (if requested)
 *
 * @param {string} name Name if event.
 * @param {object} data Data payload to log.
 * @param {string} type (Sub)type of event.
 */
export const log = (name, data = {}, type = "UNKNOWN") => {
    if (process.env.NODE_ENV === "production") return;
    console.info({ [name.toUpperCase()]: data, type });
};