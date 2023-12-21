/**
 * 还款方式一期核心逻辑方法
 * 作用：用于计算 还款期数最终最大还款到期日 并返回
 *
 * 需要的参数：提款日期 额度到期日 中台返回的期数 还款方式[定期/分期] 客群类型
 *
 */
function calcTermMonthAndLoanDate(
    serverTime /**提款日期 */,
    endTime /**额度到期 */,
    terMonth /**中台返回的期数 */,
    isRe /**是否定期 */,
    cstType /**客群类型 */
) {
    //1.如果是定期
    //定期允许的最大期数
    const _allowMonth = cstType === "QF" ? 3 : 6; //只有QF客群 定期允许的最大期数3 默认为6
    const serverTimeDate = new Date(serverTime).getDate();
    const serverTimeMonth = new Date(serverTime).getMonth();
    const serverTimeYear = new Date(serverTime).getFullYear();
    const serverTimeMonthCount = serverTimeYear * 12 + serverTimeMonth;
    const endTimeDate = new Date(endTime).getDate();
    const endTimeMonth = new Date(endTime).getMonth();
    const endTimeYear = new Date(endTime).getFullYear();
    const endTimeMonthCount = endTimeYear * 12 + endTimeMonth;
    let calcDateRes = endTimeDate - serverTimeDate >= 0 ? 0 : -1;
    let calcMonth = endTimeMonthCount - serverTimeMonthCount + calcDateRes;
    let limit, calcloanDate
    if (!terMonth) {
        //说明中台异常返回 走原逻辑
        if (isRe) {
            limit = Math.min(calcMonth, _allowMonth);
        } else {
            limit = calcMonth
        }
    } else {
        if (isRe) {
            limit = Math.min(calcMonth, terMonth, _allowMonth);
        } else {
            limit = Math.min(calcMonth, terMonth)
        }
    }
    //最终最大贷款到期日
    calcloanDate = calcDate(new Date(serverTime), new Date(endTime), limit);

    //返回期数与贷款到日期
    return {
        limit, calcloanDate
    }
}
function calcDate(serverTime, endTime, limit) {
    //不足一期 直接取额度到期日 为最终最大贷款到期日
    if (limit === 0) {
        return endTime.getFullYear() + '-' + (endTime.getMonth() + 1) + '-' + endTime.getDate()
    }
    let addYear = parseInt(Number(limit) / 12);
    let addMonth = parseInt(Number(limit) % 12);
    let year = serverTime.getFullYear() + addYear;
    let month = serverTime.getMonth() + 1 + addMonth;
    year = month > 12 ? year + 1 : year;
    month = month > 12 ? month - 12 : month;
    let calcloanDate = new Date(year + '-' + month + '-' + serverTime.getDate())
    let curTime = (calcloanDate.getTime() - endTime.getTime()) < 0 ? calcloanDate : endTime
    let res = curTime.getFullYear() + '-' + (curTime.getMonth() + 1) + '-' + curTime.getDate()
    return res
}
let { limit, calcloanDate } = calcTermMonthAndLoanDate("2023-08-28", "2023-10-27", 12, true, "QF");

console.log('limit', limit)
console.log('calcloanDate', calcloanDate)


