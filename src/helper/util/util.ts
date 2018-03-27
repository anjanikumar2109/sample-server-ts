/**
 * Convert number to fixed decimal places
 * @param expr
 * @param decPlaces
 * @returns {Number}
 * @constructor
 */
export function ConvertNumber(expr: number, decPlaces: number) {
    return Number(expr.toFixed(decPlaces));
}

/**
 * Calculate PMT
 * @param rate
 * @param nperiod
 * @param pv
 * @param fv
 * @param type
 * @returns {number}
 * @constructor
 */
export function CalculatePmt(rate: number, nperiod: number, pv: number, fv: number = 0, type: number = 0): number {
    if (rate == 0) return -(pv + fv)/nperiod;

    let pvif = Math.pow(1 + rate, nperiod);
    let pmt = rate / (pvif - 1) * -(pv * pvif + fv);

    if (type == 1) {
        pmt /= (1 + rate);
    }

    return pmt;
}