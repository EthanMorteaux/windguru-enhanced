import { el, ap } from "../utils/dom.js";
import { ROWS } from "../config.js";
import { applyWgColor, getArrowDirection, getDayName, getDateTdBackgroundColor } from "../utils/formatters.js"

export function createDataTable() {
    // =========================================================
    // TABLE OF DATA
    // =========================================================

    const scroller = el("div", "div_table tab-content no-text-select");
    scroller.style.width = "auto";
    scroller.style.height = "auto";

    const table = el("table", "tabulka");
    const tbody = el("tbody");


    // =========================================================
    // DATA
    // =========================================================

    const columns = [
        {
            unixtime: 1791252000,
            wave: 1.4,
            period: 11,
            direction: 254,
            hmax: 2.3,
            energy: 150,
            spreading: 25,
            temperature: 19
        }
    ];


    // =========================================================
    // DATE LINE
    // =========================================================

    const dateRow = el("tr", "trow tr_dates");

    columns.forEach((col, i) => {

        const date = new Date(col.unixtime * 1000);

        const daySring = getDayName(date.getDay());
        const dayNumber = date.getDate();
        const hour = date.getHours();

        const td = el("td", "tcell day1",
            `${daySring}<br>
             ${dayNumber}.<br>
             ${hour}h`
        );

        // A CORIGER !
        const isFirstOrOdd = (i === 0 || i % 2 !== 0);
        td.style.backgroundColor = getDateTdBackgroundColor(isFirstOrOdd);

        ap(dateRow, td);
    });

    ap(tbody, dateRow);


    // =========================================================
    // VALUES LINES
    // =========================================================

    Object.entries(ROWS).forEach(
        ([key, def]) => {

            const tr = el("tr",`trow param ${def.param}`);

            columns.forEach((col) => {

                const value = col[key];
                const td = el("td", "tcell tcell-cl");

                td.dataset.wgeParam = def.param;
                td.dataset.wgeTime = col.unixtime;

                if (
                    value === null ||
                    value === undefined
                ) {

                    td.innerHTML = "&nbsp;";

                    td.style.backgroundColor =
                        "rgb(255,255,255)";

                } else {

                    if (def.param === "WAVEDIR") {
                        ap(td, getArrowDirection(value));
                    } else {
                        td.innerHTML = value;
                    }

                    //applyWgColor(td, def.param, value)
                }

                ap(tr, td);
            });

            ap(tbody, tr);
        }
    );

    ap(table, tbody);
    ap(scroller, table);

    return scroller;
}