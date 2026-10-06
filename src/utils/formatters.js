import { el, ap } from "./dom.js";

export function getLabelForRow(def) {
    const legend = window.WG?.lang?.legend || window.WgLang?.legend;
    
    let label = def.label || legend?.[def.param] || def.param;

    const unit = getUnitForParam(def.param);

    return unit ? `${label} (${unit})` : label;
}

function getUnitForParam(param) {
    const user = window.WG?._user_properties;
    const units = window.WG?.lang?.units || window.WgLang?.units;

    if (!user || !units) return "";

    switch (param) {
        case "DIRPW":
        case "WAVEDIR":
        case "WAVESMER":
        case "SWDIR":
        case "SWDIR1":
        case "SWDIR2":
        case "WVDIR":
        case "SMER":
            return units.arr ?? "→";

        case "HTSGW":
        case "HMAX":
        case "SWELL1":
        case "SWELL2":
        case "WVHGT":
            return units[user.waj] ?? user.waj;

        case "WINDSPD":
        case "GUST":
        case "MWINDSPD":
            return units[user.wj] ?? user.wj;

        case "TMP":
        case "TMPE":
        case "WCHILL":
            return units[user.tj] ?? user.tj;

        case "SPREAD":
            return "°";    

        default:
            return "";
    }
}

export function applyWgColor(tdCell, param, value) {
    
}

function degToCompass(deg) {
    if (deg === null || deg === undefined || isNaN(deg)) return "";
    
    const normalizedDeg = (deg % 360 + 360) % 360;
    const index = Math.round(normalizedDeg / 22.5) % 16;
    return window.WG?.lang?.dir[index];
}

function getArrowTitle(dir) {
    const cardinal = degToCompass(dir);
    return `${cardinal} (${Math.round(dir)}°)`;
}

export function getArrowDirection(dir) {
    const numDir = Number(dir);
    const span = el("span");
    
    if (isNaN(numDir)) return span;

    span.title = getArrowTitle(numDir);
    span.innerHTML = `
        <svg class="arrow tcell" viewBox="0 0 100 100">
            <path transform="rotate(${180 + numDir}, 50, 50) translate(0, 5)"
                  d="m50,0 -20,30 16,-3 -3,63 14,0 -3,-63 16,3 -20,-30z" />
        </svg>
    `;
    return span;
}

export function getDayName(dayIndex) {
    return window.WG?.lang?.weekday[dayIndex];
}

export function getDateTdBackgroundColor(odd) {
    if (odd) {
          return "#f4f4f4";
    } else {
        return "#d5d5d5";
    }
}