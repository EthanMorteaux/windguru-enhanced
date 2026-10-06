import { createLegend } from "./legend.js";
import { createInfoMenu } from "./infoMenu.js";
import { createDataTable } from "./dataTable.js";

import { el, ap } from "../utils/dom.js";

import { SELECTORS } from "../config.js";

export function createBelleIle() {
    const buoy = el("div", "obal-wrap custom rendered");
    buoy.id = SELECTORS.buoyId;

    const content = el("div", "obal nolista");

    const legend = createLegend();

    const infoMenu = createInfoMenu();

    const dataTable = createDataTable();

    ap(content, legend, infoMenu, dataTable);
    ap(buoy, content);

    return buoy;
}