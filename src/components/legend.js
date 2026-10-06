import { el, ap } from "../utils/dom";
import { getLabelForRow } from "../utils/formatters";
import { ROWS } from "../config";

export function createLegend() {
    const legend = el("table","table_legend");
    const lb = el("tbody");

    const head = el("tr", "legend_dates");
    head.style.height = "52px";

    const initTd = el("td", "td-init");
    initTd.innerHTML = `
        <span class="model-init">
            Updated:<br>
            29.9. 16:57<br>
            CEST
        </span>
    `;

    ap(head, initTd, el("td", "legend_right"));
    ap(lb, head);

    Object.values(ROWS).forEach((def) => {

        const tr = el("tr", `param ${def.param}`);
        tr.style.height = "21px";

        console.log(getLabelForRow(def))

        ap(tr, 
            el("td", "", getLabelForRow(def)),
            el("td", "legend_right")
        );

        ap(lb, tr)
    });

    ap(legend, lb);

    return legend;
}
