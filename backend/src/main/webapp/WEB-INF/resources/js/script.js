/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

function deletePost(path) {
    if (confirm("Bạn có chắc muốn xóa bài đăng không?") === true) {
        fetch(path, {
            method: "DELETE"
        }).then(res => {
            if (res.status === 202)
                location.reload();
            else
                alert("Có lỗi xảy ra, vui lòng thử lại...");
        });
    }
}

function deleteReaction(path) {
    if (confirm("Bạn có chắc muốn xóa biểu cảm không?") === true) {
        fetch(path, {
            method: "DELETE"
        }).then(res => {
            if (res.status === 202)
                location.reload();
            else
                alert("Có lỗi xảy ra, vui lòng thử lại...");
        });
    }
}
