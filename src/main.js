/**
 * @file main.js
 * @description Entry point of the Belle-Île forecast injector.
 *
 * Overview
 * --------
 * This script enhances the Windguru forecast page by injecting a custom
 * forecast table (Belle-Île) into the page, next to the native Windguru
 * tables. It reproduces Windguru's markup and CSS classes so that the
 * injected table blends in with the existing design.
 *
 * Project structure
 * -----------------
 *   main.js                  Page integration (this file)
 *   config.js                Constants and row definitions
 *   utils/dom.js             DOM helpers (el, ap, svgIcon)
 *   components/              Table building blocks (legend, info menu, data)
 *
 * Disclaimer
 * ----------
 * This project is an independent, community-made tool. It is not affiliated
 * with, endorsed by, or sponsored by Windguru.
 *
 * @author  Ethan.M morteaux.e@hotmail.com
 * @license MIT
 * @see     https://github.com/<your-user>/<your-repo>
 */

import { createBelleIle } from "./components/belleIle.js";
import { SELECTORS } from "./config.js";

let scheduled = false;

function waitForWG(callback) {
    if (window.WG && window.WG.lang && window.WG.lang.legend) {
        callback();
    } else if (window.WgLang && window.WgLang.legend) {
        callback();
    } else {
        setTimeout(() => waitForWG(callback), 50);
    }
}

function mountTable() {
    const parent = document.querySelector(SELECTORS.parent);

    if (!parent) {
        console.log("forecasts-page-content does not exist");
        return;
    }

    const old = parent.querySelector(SELECTORS.buoyId);
    const fresh = createBelleIle();

    old
     ? old.replaceWith(fresh)
     : parent.append(fresh);
}

function sync() {
    scheduled = false;

    const parent = document.querySelector(SELECTORS.parent);

    if (!parent) { return; }

    if (!document.querySelector(SELECTORS.nativeTable)) { return; }

    if (parent.querySelector(`#${SELECTORS.buoyId}`)) { return; }

    mountTable();
}

function schedule() {
    if (scheduled) { return; }

    scheduled = true;

    requestAnimationFrame(sync);
}

function init() {
    new MutationObserver(schedule).observe(
        document.body,
        {
            childList: true,
            subtree: true
        }
    );

    schedule();
}

waitForWG(init);