<%--
    Document   : user
    Created on : Aug 29, 2023, 5:28:20 PM
    Author     : dptuy
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="d-flex align-items-center justify-content-between w-100 my-4">
    <h5 class="text-center">Quản lý tài khoản</h5>
    <a href="/signup" class="btn btn-success">
        <i class="fa-regular fa-square-plus"></i>
        Thêm tài khoản (Giáo viên)
    </a>
</div>
<table class="table table-hover mt-2 text-center">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <!--            <th scope="col">Họ</th>
                        <th scope="col">Tên</th>
                        <th scope="col">Email</th>-->
            <th scope="col">Tài khoản</th>
            <th scope="col">Mật khẩu</th>
            <th scope="col">Ngày tạo</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Quyền</th>
            <th scope="col">Tùy chỉnh</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${users}" var="user">
            <tr>
                <th scope="row">${user.id}</th>
<!--                <td>${user.lastName}</td>
                <td>${user.firstName}</td>
                <td>${user.email}</td>-->
                <td>${user.username}</td>
                <td class="text-truncate" style="max-width: 200px" title="#${user.password}">${user.password}</td>
                <td><input type="datetime-local" value="${user.createdDate}" readonly="true" class="form-control text-center"/></td>

                <c:choose>
                    <c:when test="${user.active == true}">
                        <td>Hoạt động</td>
                    </c:when>
                    <c:otherwise>
                        <td>Ngừng hoạt động</td>
                    </c:otherwise>
                </c:choose>
                <td>
                    ${user.roleId.name}
                </td>
                <td>
                    <a href="/user-details/${user.id}" class="btn btn-warning btn-sm text-white">
                        <i class="fa-solid fa-pen"></i>
                        <!--Cập nhật-->
                    </a>
                    <a href="/announce/user/${user.id}" class="btn btn-danger btn-sm">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </td>
            </tr>
        </c:forEach>
    </tbody>
</table>

<c:if test="${counter > 1}">
    <ul class="pagination d-flex align-items-center justify-content-center">
        <li class="page-item"><a class="page-link" href="<c:url value="/users"></c:url>">Tất cả</a></li>
            <c:forEach begin="1" end="${counter}" var="i">
                <c:url value="" var="pageAction">
                    <c:param name="page" value="${i}" />
                </c:url>
            <li class="page-item"><a class="page-link" href="${pageAction}">${i}</a></li>
            </c:forEach>
    </ul>
</c:if>
