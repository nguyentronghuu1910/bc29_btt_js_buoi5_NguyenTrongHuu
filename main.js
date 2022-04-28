var getEleID = function(id) {
    return document.getElementById(id);
};
var currentFormat = new Intl.NumberFormat("vn-VN");
// Bài tập thêm 1 - Tính thuế thu nhập cá nhân
/** 
 * - Đầu vào: nhập tên, tổng thu nhập trong năm, số người phụ thuộc
 * - Xử lý:
 *  Thu nhập chịu thuế (A)
 *  Tông thu nhập năm (B)
 *  Số người phụ thuộc 
 *  Thuế thu nhập
 * - Đầu ra: show kết quả
 */

const A = 4e+6;
const B = 1.6e+6;

const THUNHAP60 = 6e+7;
const THUNHAP120 = 12e+7;
const THUNHAP210 = 21e+7;
const THUNHAP384 = 384e+6;
const THUNHAP624 = 624e+6;
const THUNHAP960 = 960e+6;

const THUE5 = 5 / 100;
const THUE10 = 10 / 100;
const THUE15 = 15 / 100;
const THUE20 = 20 / 100;
const THUE25 = 25 / 100;
const THUE30 = 30 / 100;
const THUE35 = 35 / 100;

document.getElementById("btnKetqua_1").onclick = function() {
        var thueThuNhap = 0;
        var TnChiuThue = 0;
        var hoTen = getEleID("hoTen").value;
        var thuNhapNam = getEleID("thuNhapNam").value * 1;
        var nguoiPhuThuoc = getEleID("nguoiPhuThuoc").value * 1;

        // Tính thu nhập chịu thuế
        TnChiuThue = thuNhapNam - A - nguoiPhuThuoc * B;

        // Tính Thuế thu nhập
        if (TnChiuThue <= THUNHAP60) {
            thueThuNhap = TnChiuThue * THUE5;
        } else if (TnChiuThue > THUNHAP60 && TnChiuThue <= THUNHAP120) {
            thueThuNhap = TnChiuThue * THUE10;
        } else if (TnChiuThue > THUNHAP120 && TnChiuThue <= THUNHAP210) {
            thueThuNhap = TnChiuThue * THUE15;
        } else if (TnChiuThue > THUNHAP210 && TnChiuThue <= THUNHAP384) {
            thueThuNhap = TnChiuThue * THUE20;
        } else if (TnChiuThue > THUNHAP384 && TnChiuThue <= THUNHAP624) {
            thueThuNhap = TnChiuThue * THUE25;
        } else if (TnChiuThue > THUNHAP624 && TnChiuThue <= THUNHAP960) {
            thueThuNhap = TnChiuThue * THUE30;
        } else if (TnChiuThue > THUNHAP960) {
            thueThuNhap = TnChiuThue * THUE35;
        }
        // Show kết quả
        document.getElementById("footerKetQua1").innerHTML = "Thuế thu nhập cá nhân: " + hoTen + " : " + (currentFormat.format(thueThuNhap)) + " VND ";
    }
    //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    // Bài tập thêm 2: Tính tiền cáp
    /*
        - Phí xử lý hóa đơn: A
        - Phí dịch vụ cơ bản: B
        - Thuê kênh cao cấp: C
        - Số kênh cao cấp: D
    */
    // khai báo đầu vào
const hoaDonND = 45 / 10;
const cobanND = 205 / 10;
const kenhND = 75 / 10;

const hoadonDN = 15;
const cobanDN_75 = 75;
const cobanDN_5 = 5;
const kenhDN = 50;
// xử lý
function changeStatus() {
    var status = getEleID("selectKhachHang");

    if (status.value == "doanhNghiep") {
        getEleID("appear").style.visibility = "visible";
    } else {
        getEleID("appear").style.visibility = "hidden";
    }
}
// xử lý từng khách hàng

getEleID("btnKetqua_2").onclick = function() {
    var maKhachHang = getEleID("maKhachHang").value;
    var soKenh = getEleID("soKenh").value * 1;
    var ketNoi = getEleID("soKetNoi").value * 1;

    var tongTienCap = 0;
    var khachHang = getEleID("selectKhachHang");
    var inBill = getEleID("footerKetQua2");

    // In hóa đơn khi khách hàng là "Nhà dân"
    if (khachHang.value == "nhaDan") {
        tongTienCap = hoaDonND + cobanND + soKenh * kenhND;
        inBill.innerHTML = `Mã khách hàng: ${maKhachHang} <br> Tổng tiền: $${tongTienCap}`
    }

    // In hóa đơn khi khách hàng là "Doanh nghiệp"
    if (khachHang.value == "doanhNghiep") {
        if (ketNoi <= 10) {
            tongTienCap = hoadonDN + cobanDN_75 + soKenh * kenhDN;
            inBill.innerHTML = `Mã khách hàng: ${maKhachHang} <br> Số kết nối: ${ketNoi} <br> Tổng tiền: $${tongTienCap}`;
        } else {
            tongTienCap = hoadonDN + (ketNoi - 10) * cobanDN_5 + cobanDN_75 + soKenh * kenhDN;
            inBill.innerHTML = `Mã khách hàng: ${maKhachHang} <br> Số kết nối: ${ketNoi} <br> Tổng tiền: $${tongTienCap}`;
        }
    }
}