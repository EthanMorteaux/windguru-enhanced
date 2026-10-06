/**
 * @file config.js
 * @description Static configuration of the Belle-Île forecast injector.
 *
 * Only constants live here: CSS selectors, element ids, layout values and
 * the definition of the forecast rows. No DOM access, no logic, so this file
 * can be imported safely from anywhere.
 */


/**
 * CSS selectors and ids used to integrate with the Windguru page.
 * If Windguru changes its markup, this is the only place to update.
 */
export const SELECTORS = {
    parent: "#forecasts-page-content",

    nativeTable: "#div_wgfcst0 .div_table",

    buoyId: "div_belleile",
};

/**
 * Definition of the forecast rows, in display order.
 *
 * Each key matches a property of the data columns (see data.js).
 *
 * @type {Object.<string, {param: string, label: string, palette?: string, type?: string}>}
 *
 *   param   Windguru parameter code, also used as a CSS class.
 *   label   HTML label displayed in the legend.
 *   palette Name of the color palette used to color the cells.
 *   type    Special rendering ("arrow" for a direction arrow).
 */
export const ROWS = {
    wave: {
        param: "HTSGW",
    },

    period: {
        param: "PERPW",
    },

    direction: {
        param: "WAVEDIR",
    },

    hmax: {
        param: "HMAX",
        label: 'Hmax'
    },

    energy: {
        param: "PWEN"
    },

    spreading: {
        param: "SPREAD",
        label: "Spreading"
    },

    temperature: {
        param: "TMPE"
    }
};