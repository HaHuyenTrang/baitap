"use strict";
/*
void: Kiểu void đại diện cho việc hàm không trả về bất kỳ giá trị nào. Nó chỉ đơn giản là cho biết rằng hàm đã hoàn
thành mà không có kết quả trả về. Thông thường, các hàm có kiểu trả về là void được sử dụng khi chúng chỉ thực hiện
 một hành động phụ hoặc gọi một hàm khác mà có giá trị trả về.

never: Kiểu never đại diện cho việc hàm không bao giờ hoàn thành hoặc trả về giá trị.
Nó được sử dụng trong các trường hợp mà hàm sẽ luôn sinh
 ra một exception hoặc gặp phải một vòng lặp vô hạn mà không bao giờ kết thúc.
*/
function log(text) {
    console.log(text);
}
function logg(str) {
    throw new Error(str);
}
