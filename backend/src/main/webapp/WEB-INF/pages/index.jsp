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
            <canvas id="myChart"></canvas>
        </div>
    </div>
</div>



<script>
    const ctx = document.getElementById('myChart');
    let labels = [], info = [], bgColors = [];

    <c:forEach items="${users}" var="user">
    labels.push("${user[1]}");
    info.push("${user[2]}");

    rgb = `rgb(${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)}, ${Math.round(Math.random() * 255)})`;
    bgColors.push(rgb);
    </c:forEach>

    const data = {
        labels: labels,
        datasets: [{
                label: 'Thống kê tài khoản',
                data: info,
                backgroundColor: bgColors,
                hoverOffset: 4
            }]
    };
    const config = {
        type: 'pie',
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

    new Chart(ctx, config);
</script>

