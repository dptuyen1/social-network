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
        <h5 class="my-4">Thống kê người dùng</h5>
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
                                <c:choose>
                                    <c:when test="${user[1] == 'admin'}">
                                    <td>Quản trị viên</td>
                                </c:when>
                                <c:when test="${user[1] == 'teacher'}">
                                    <td>Giảng viên</td>
                                </c:when>
                                <c:otherwise>
                                    <td>Sinh viên</td>
                                </c:otherwise>
                            </c:choose>
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
            <form id="form-1">
                <div class="form-group mb-3">
                    <label class="form-label">Năm</label>
                    <select class="form-select" name="year">
                        <option value="" selected>Tất cả</option>
                        <c:forEach items="${years}" var="year">
                            <option value="${year}">${year}</option>
                        </c:forEach>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Thống kê</button>
            </form>
        </div>

        <div class="col">
            <canvas id="post-chart"></canvas>
        </div>

        <table class="table table-hover my-4 text-center">
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Ngày tạo</th>
                    <th scope="col">Nội dung</th>
                    <th scope="col">Người đăng</th>
                    <th scope="col">Tổng số bình luận</th>
                    <th scope="col">Tổng số biểu cảm</th>
                </tr>
            </thead>
            <tbody>
                <c:forEach items="${posts}" var="post">
                    <tr>
                        <th scope="row">${post[0].id}</th>
                        <td><input value="${post[0].createdDate}" class="form-control text-center" type="datetime-local" readonly="true"/></td>
                        <td>${post[0].content}</td>
                        <td>${post[0].userId.firstName} ${post[0].userId.lastName}</td>
                        <td>${post[1]}</td>
                        <td>${post[2]}</td>
                    </tr>
                </c:forEach>
            </tbody>
        </table>
    </div>

    <hr />

    <div class="row">
        <h5 class="my-4">Thống kê bài viết theo năm</h5>

        <div class="col">
            <form id="form-2">
                <div class="form-group mb-3">
                    <label class="form-label">Tháng</label>
                    <select class="form-select" name="month">
                        <option value="" selected>Tất cả</option>
                        <c:forEach begin="1" end="12" var="order">
                            <option value="${order}">${order}</option>
                        </c:forEach>
                    </select>
                </div>

                <button type="submit" class="btn btn-primary">Thống kê</button>
            </form>

            <div class="mt-2">
                <form id="form-3">
                    <div class="form-group mb-3">
                        <label class="form-label">Quý</label>
                        <select class="form-select" name="quarter">
                            <option value="" selected>Tất cả</option>
                            <c:forEach begin="1" end="4" var="order">
                                <option value="${order}">${order}</option>
                            </c:forEach>
                        </select>
                    </div>

                    <button type="submit" class="btn btn-primary">Thống kê</button>
                </form>
            </div>

            <table class="table table-hover my-4 text-center">
                <thead>
                    <tr>
                        <th scope="col">Năm</th>
                        <th scope="col">Số bài đăng</th>
                    </tr>
                </thead>
                <tbody>
                    <c:forEach items="${postsOfYears}" var="poy">
                        <tr>
                            <th scope="row">${poy[0]}</th>
                            <td>${poy[1]}</td>
                        </tr>
                    </c:forEach>
                </tbody>
            </table>
        </div>

        <div class="col">
            <canvas id="post-chart-by-year"></canvas>
        </div>
    </div>
</div>



<script>
    const userCtx = document.getElementById('user-chart');
    const postCtx = document.getElementById('post-chart-by-year');
    let userLabels = [], userInfo = [], userLabel = 'Thống kê tài khoản', bgColors = [];
    let postLabels = [], postInfo = [], postLabel = 'Thống kê bài viết';
    <c:forEach items="${users}" var="user">
    userLabels.push("${user[1]}");
    userInfo.push("${user[2]}");
    rgb = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    bgColors.push(rgb);
    </c:forEach>

    <c:forEach items="${postsOfYears}" var="poy">
    postLabels.push("${poy[0]}");
    postInfo.push("${poy[1]}");
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

