<%--
    Document   : post.jsp
    Created on : Aug 24, 2023, 3:46:34 PM
    Author     : dptuy
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="d-flex align-items-center justify-content-between w-100 my-4 post">
    <h5 class="text-center">Quản lý bài đăng</h5>
    <a href="/posts/add" class="btn btn-success">
        <i class="fa-regular fa-square-plus"></i>
        Thêm bài đăng
    </a>
</div>
<table class="table table-hover mt-2 text-center">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nội dung</th>
            <th scope="col">Ngày tạo</th>
            <th scope="col">Ngày chỉnh sửa</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Người đăng</th>
            <th scope="col">Tùy chỉnh</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${posts}" var="post">
            <tr>
                <th scope="row">${post.id}</th>
                <td  class="text-truncate" style="max-width: 200px" title="${post.content}">${post.content}</td>
                <td><input type="datetime-local" value="${post.createdDate}" readonly="true" class="form-control text-center"/></td>
                    <c:choose>
                        <c:when test="${post.updatedDate != null}">
                        <td><input type="datetime-local" value="${post.updatedDate}" readonly="true" class="form-control text-center"/></td>
                        </c:when>
                        <c:otherwise>
                        <td><input type="text" readonly="true" class="form-control text-center"/></td>
                        </c:otherwise>
                    </c:choose>

                <c:choose>
                    <c:when test="${post.status == true}">
                        <td>Hoạt động</td>
                    </c:when>
                    <c:otherwise>
                        <td>Ngừng hoạt động</td>
                    </c:otherwise>
                </c:choose>
                <td>
                    ${post.userId.firstName} ${post.userId.lastName}
                </td>
                <td>
<!--                    <a href="/post-details/${post.id}" class="btn btn-warning btn-sm text-white">
                        <i class="fa-solid fa-pen"></i>
                        Cập nhật
                    </a>-->
                    <c:url value="/api/posts/${post.id}/delete" var="api"/>
                    <button type="button" class="btn btn-danger btn-sm" onclick="deletePost('${api}')">
                        <i class="fa-solid fa-trash"></i>
                        <!--Xóa-->
                    </button>
                </td>
            </tr>
        </c:forEach>
    </tbody>
</table>
