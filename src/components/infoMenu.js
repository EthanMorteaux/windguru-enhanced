import { el, ap } from "../utils/dom";
import { ROWS } from "../config";

export function createInfoMenu() {
    // =========================================================
    // TITLE
    // =========================================================

    const navig = el("div", "navig_table_classic");
    ap(navig, el("div", "nadlegend", "Belle-Île"));

    const ul = el("ul", "sm sm-simple wg-table-menu sm-wg-inline");
    ap(navig, ul);

    // =========================================================
    // INFO
    // =========================================================

    const infoLi = el("li");
    infoLi.id = "infoLi"

    infoLi.addEventListener("mouseenter", () => infoA.classList.add("highlighted"));

    const infoA = el("a", "has-submenu");
    infoA.dataset.name = "info";
    infoA.id = "sm-17907094034959375-1";

    infoA.setAttribute("aria-haspopup", "true");
    infoA.setAttribute("aria-controls", "sm-17907094034959375-2");
    infoA.setAttribute("aria-expanded", "false");

    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("class", "icon");

    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#ico_info");

    ap(svg, use);

    const infoText = el("span", "butt-txt tablet-hide", " Info");

    const infoMenu = el("ul", "sm-nowrap")
    infoMenu.style = "width: auto; display: none; top: auto; left: 0px; margin-left: 0px; margin-top: 0px; min-width: 10em; max-width: 20em;"
    infoMenu.id = "sm-17907094034959375-2";

    infoMenu.setAttribute("role", "group");
    infoMenu.setAttribute("aria-hidden", "true");
    infoMenu.setAttribute("aria-labelledby","sm-17907094034959375-1");
    infoMenu.setAttribute("aria-expanded", "false");

    const updateLi = el("li");
    ap(infoMenu, updateLi)

    const updateA = el("a");
    updateA.dataset.name = "updateinfo";

    const modelUpdateInfo = el("div", "model-update-info");

    ap(updateA, modelUpdateInfo)
    ap(updateLi, updateA)

    const modelLabel = el("span", "label", "Model:");

    const modelName = el("span", "linkblue", "IFS-WAM 9 km (waves)");

    ap(
        modelUpdateInfo,
        modelLabel,
        document.createElement("br"),
        modelName,
        document.createElement("br")
    );

    const initLabel = el("span", "label", "Init:");

    ap(
        modelUpdateInfo,
        initLabel,
        document.createElement("br"),
        document.createTextNode("30.9. 2026 00h UTC"),
        document.createElement("br")
    );



    const lastUpdatedLabel = el(
        "span",
        "label",
        "Last updated:"
    );

    ap(
        modelUpdateInfo,
        lastUpdatedLabel,
        document.createElement("br"),
        document.createTextNode("30.9. 09:44 (07:44 UTC)"),
        document.createElement("br")
    );


    const nextUpdateLabel = el("span", "label", "Next update expected:");

    ap(
        modelUpdateInfo,
        nextUpdateLabel,
        document.createElement("br"),
        document.createTextNode("30.9. 14:32 (12:32 UTC)"),
        document.createElement("br")
    );

    ap(infoA, svg, infoText);
    ap(infoLi, infoA, infoMenu);
    ap(ul, infoLi);

    return navig;
}