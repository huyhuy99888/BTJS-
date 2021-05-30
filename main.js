/*
bài 1: Tính tiền lương nhân viên
Bước1: Input
- luong1Ngay, soNgayLam

Bước2: Handle 
- Tạo biến luong1Ngay, soNgayLam, luongThucNhan
- Tính lương thực nhận: luongThucNhan = luong1Ngay * soNgayLam
Bước3: Output 
- Xuất tiền lương thực nhận 
*/
var btnTinh = document.getElementById('btnTinh');
btnTinh.onclick = function (){
    var soNgayLam = document.getElementById('soNgayLam').value;
    var luong1Ngay = document.getElementById('luong1Ngay').value; 
    var luongThucNhan = luong1Ngay * soNgayLam;
    alert('Tiền lương nhân viên:' + luongThucNhan + 'VNĐ');
}


/*
bài 2: Tính giá trị trung bình
Bước1: Input
- Giá trị 5 số thực (bao gồm cả số hữu tỉ và vô tỉ)
Bước2: Handle 
- Tạo 5 biến soThuc1, soThuc2, soThuc3, soThuc4, soThuc5, mean (tương đương với 5 số thực và giá trị trung bình)
- Tính giá trị trung bình: mean = ( soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5 ) / 5
Bước3: Output 
-Xuất giá trị trung bình
*/
var btnTinhMean = document.getElementById('btnTinhMean');
btnTinhMean.onclick = function() {
    var soThuc1 = document.getElementById('soThuc1').value;
    var soThuc2 = document.getElementById('soThuc2').value;
    var soThuc3 = document.getElementById('soThuc3').value;
    var soThuc4 = document.getElementById('soThuc4').value;
    var soThuc5 = document.getElementById('soThuc5').value;
    var mean = ( Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5) ) / 5;
    alert('Giá trị trung bình:' + mean);
}


/*
Bài 3: Tính số tiền USD quy ra VNĐ
 Input:
- Giá trị 1 USD : 23000 VNĐ
// Xử lý:
Bước 1: tạo biến soTienUsd,tienQuyDoi
Bước 2: Tính số tiền USD quy ra VNĐ
 Output:
Xuất kết quả.
*/
var btnQuyDoi = document.getElementById('btnQuyDoi');
var menhGiaUSD = 23000;
btnQuyDoi.onclick = function() {
    var soTienUSD = document.getElementById('soTienUSD').value; 
    var tienQuyDoi = soTienUSD * menhGiaUSD;
    alert('Số tiền nhận được:' + tienQuyDoi + 'VNĐ');
}


/*
Bài 4:
 Input:
Xác định đầu vào: chiều dài và chiều rộng hình chữ nhật
 Xử Lý:
BƯớc 1: Tạo biến chieuDaiHcn, chieuRongHcn, chuViHcn, dienTichHcn
Bước 2: Sử dụng công thức chu vi HCN: ( chieuDaiHcn + chieuRongHcn ) * 2
Bước 3: Sử dụng công thức Diện Tích HCN: chieuDaiHcn * chieuRongHcn 
 Output:
Kết quả : chuVi,dienTich hình chữ nhật.
*/
document.getElementById('btnTinhHcn').onclick = function () {
    var chieuDaiHcn = document.getElementById('chieuDaiHcn').value; 
    var chieuRongHcn = document.getElementById('chieuRongHcn').value; 
    var chuViHcn = ( Number( chieuDaiHcn ) + Number( chieuRongHcn ) ) * 2;
    var dienTichHcn = Number(chieuDaiHcn) * Number(chieuRongHcn) ;
    alert('Chu vi hình chữ nhật:' + chuViHcn );
    alert('Diện tích hình chữ nhật:' + dienTichHcn );
}


/*
Bài5:
 Input 
1 số có 2 chữ số 
 Xu ly 
Bước 1: Tạo biến soCo2ChuSo,ten,unit 
Bước 2: Tách số hàng chục theo công thức: ten =parseInt(soCo2ChuSo/10);
Bước 3: Tách số hàng đơn vị theo công thức:unit = soCo2ChuSo%10;
 Output
Kết quả Sum 
*/
 var soCo2ChuSo = document.getElementById('soCo2ChuSO');
document.getElementById('btnTinhTong').onclick = function () {
    var soCo2ChuSo =parseInt(document.getElementById('soCo2ChuSo').value) ;
    var ten =parseInt( soCo2ChuSo / 10 );
    var unit = soCo2ChuSo % 10;
    unit = Math.abs( unit )
    var sum = Number( ten ) + Number( unit );
    alert( 'Tổng 1 số có 2 chữ số:' + sum );
}
