<%--
    Document   : index
    Created on : Aug 9, 2023, 2:31:47 PM
    Author     : dptuy
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<h5 class="text-center my-4">Trang quản trị viên</h5>
<div class="container">
    <div class="row">
        <h5 class="my-4">Thống kê tài khoản</h5>
        <div class="col">
            <table class="table table-hover mt-2 text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Loại tài khoản</th>
                        <th scope="col">Số lượng</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${users}" var="user">
                        <tr>
                            <th scope="row">${user[0]}</th>
                            <td>${user[1]}</td>
                            <td>${user[2]}</td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>

        <div class="col">
            <canvas id="user-chart"></canvas>
        </div>
    </div>

    <hr />

    <div class="row">
        <h5 class="my-4">Thống kê bài viết</h5>

        <div class="col">
            <form>
                <div class="form-group mb-3">
                    <label class="form-label">Năm</label>
                    <select class="form-select" name="year">
                        <option value="" selected>Tất cả</option>
                        <c:forEach items="${years}" var="year">
                            <option value="${year}">${year}</option>
                        </c:forEach>
                    </select>
                </div>

                <button class="btn btn-primary">Thống kê</button>
            </form>

            <table class="table table-hover my-4 text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nội dung</th>
                        <th scope="col">Ngày tạo</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${posts}" var="post">
                        <tr>
                            <th scope="row">${post[0].id}</th>
                            <td>${post[0].content}</td>
                            <td><input class="form-control text-center" type="datetime-local" value="${post[0].createdDate}" readonly="true"/></td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>

        <div class="col">
            <canvas id="post-chart"></canvas>
        </div>
    </div>
</div>



<script>
    const userCtx = document.getElementById('user-chart');
    const postCtx = document.getElementById('post-chart');
    let userLabels = [], userInfo = [], userLabel = 'Thống kê tài khoản', bgColors = [];
    let postLabels = [], postInfo = [], postLabel = 'Thống kê bài viết';

    <c:forEach items="${users}" var="user">
    userLabels.push("${user[1]}");
    userInfo.push("${user[2]}");

    rgb = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    bgColors.push(rgb);
    </c:forEach>

    <c:forEach items="${years}" var="year">
    postLabels.push("${year}");
    </c:forEach>

    <c:forEach items="${posts}" var="post">
    postLabels.push("${post[0].createdDate}");
    postInfo.push("${post[1]}");
    </c:forEach>

    const setData = (labels, label, info) => {
        return {
            labels: labels,
            datasets: [{
                    label: label,
                    data: info,
                    backgroundColor: bgColors,
                    hoverOffset: 4
                }]
        };
    };

    const setConfig = (type, data) => {
        return {
            type: type,
            data: data,
            options: {
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        labels: {
                            font: {
                                size: 16
                            }
                        },
                        position: 'bottom'
                    }
                }
            }
        };
    };

    let data = {}, config = {};

    data = setData(userLabels, userLabel, userInfo);

    config = setConfig("pie", data);

    new Chart(userCtx, config);

    data = setData(postLabels, postLabel, postInfo);

    config = setConfig("bar", data);

    new Chart(postCtx, config);

//    data = setData(labels, "Thống kê bài đăng", info);
//
//    config = setConfig("bar", data);
//
//    new Chart(postCtx, config);

//    const data = {
//        labels: labels,
//        datasets: [{
//                label: 'Thống kê tài khoản',
//                data: info,
//                backgroundColor: bgColors,
//                hoverOffset: 4
//            }]
//    };
//    const config = {
//        type: 'pie',
//        data: data,
//        options: {
//            maintainAspectRatio: false,
//            plugins: {
//                legend: {
//                    labels: {
//                        font: {
//                            size: 16
//                        }
//                    },
//                    position: 'bottom'
//                }
//            }
//        }
//    };
</script>

