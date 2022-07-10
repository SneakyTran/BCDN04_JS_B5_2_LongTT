//todo TÍNH THUẾ THU NHẬP CÁ NHÂN
/**
 * ?Khối 1: input
 * fullName, totalIncome, numberDependent
 *
 * ?Khối 2: progress
 * *B1: Khai báo biến và lấy giá trị nhập từ form
 * *B2:
 *   taxableIncomes = totalIncome - 4e+6 - numberDependent * 16e+5
 * *    Nếu taxableIncomes <= 0
 *          => totalTax = 0
 * *    Ngược lại nếu taxableIncomes <= 60
 *          => totaTax = taxableIncomes*5/100
 * *    Ngược lại nếu taxableIncomes <= 120
 *          => totaTax = taxableIncomes*10/100
 * *    Ngược lại nếu taxableIncomes <= 210
 *          => totaTax = taxableIncomes*15/100
 * *    Ngược lại nếu taxableIncomes <= 384
 *          => totaTax = taxableIncomes*20/100
 * *    Ngược lại nếu taxableIncomes <= 624
 *          => totaTax = taxableIncomes*25/100
 * *    Ngược lại nếu taxableIncomes <= 960
 *          => totaTax = taxableIncomes*30/100
 * *    Ngược lại
 *          => totaTax = taxableIncomes*35/100
 * *B3: Thông báo kết quả ra màn hình
 * ?Khối 3: output
 * totalTax
 *
 */

const TAX_RATE_60 = 0.05;
const TAX_RATE_120 = 0.1;
const TAX_RATE_210 = 0.15;
const TAX_RATE_384 = 0.2;
const TAX_RATE_624 = 0.25;
const TAX_RATE_960 = 0.3;
const TAX_RATE_OVER = 0.35;

/**
 * Author: Sneaky
 * Date Created: 10/07/2022
 * @param {Number} totalIncome
 * @param {Number} numberDependent
 * @returns taxableIncomes
 */
function calcTaxialbeIncomes(totalIncome, numberDependent) {
    return totalIncome - 4e6 - numberDependent * 16e5;
}

/**
 * Author: Sneaky
 * Date Created: 10/07/2022
 * @param {Number} taxableIncomes
 * @returns totalTax
 */
function calcTax(taxableIncomes) {
    if (taxableIncomes <= 0) {
        return 0;
    } else if (taxableIncomes <= 60e+6) {
        return taxableIncomes * TAX_RATE_60;
    } else if (taxableIncomes <= 120e+6) {
        return taxableIncomes * TAX_RATE_120;
    } else if (taxableIncomes <= 210e+6) {
        return taxableIncomes * TAX_RATE_210;
    } else if (taxableIncomes <= 384e+6) {
        return taxableIncomes * TAX_RATE_384;
    } else if (taxableIncomes <= 624e+6) {
        return taxableIncomes * TAX_RATE_624;
    } else if (taxableIncomes <= 960e+6) {
        return taxableIncomes * TAX_RATE_960;
    } else {
        return taxableIncomes * TAX_RATE_OVER;
    }
}

/**
 * Author: Sneaky
 * Date Created: 10/07/2022
 * @param {Number} totalIncome 
 * @returns 
 */
function isValidIncome(totalIncome) {
    return totalIncome > 0 ? 1 : 0;
}

/**
 * Author: Sneaky
 * Date Created: 10/07/2022
 * @param {Number} numberDependent 
 * @returns 
 */
function isValidNumberIndependent(numberDependent){
    return numberDependent >= 0 ? 1 : 0;
}

/**
 * Author: Sneaky
 * Date Created: 10/07/2022
 */
function showTotalTax() {
    var fullName = document.getElementById("ipName").value;
    var totalIncome = Number(document.getElementById("ipIncome").value);
    var numberDependent = Number(
        document.getElementById("ipNumberDepend").value
    );
    if (!isValidIncome(totalIncome)) {
        alert("Tổng thu nhập năm không hợp lệ. Hãy nhập lại!!!");
    } else if(!isValidNumberIndependent(numberDependent)){
        alert("Số người phụ thuộc không hợp lệ. Hãy nhập lại!!!");
    } else {
        var totalTax = calcTax(
            calcTaxialbeIncomes(totalIncome, numberDependent)
        );
        document.getElementById("txtTotalTax").innerHTML =
            "Họ và tên: " +
            fullName +
            "; Tiền thuế thu nhập cá nhân: " +
            Intl.NumberFormat("vi-VN", {
                style: "currency",
                currency: "VND",
            }).format(totalTax);
    }
}
document.getElementById("btnCalcTax").onclick = showTotalTax;
