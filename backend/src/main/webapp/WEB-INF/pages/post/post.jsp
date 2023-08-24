<%--
    Document   : post.jsp
    Created on : Aug 24, 2023, 3:46:34 PM
    Author     : dptuy
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="d-flex flex-column align-items-center">
    <div class="d-flex align-items-center justify-content-between w-100 my-4">
        <h5 class="text-center">Quản lý bài đăng</h5>
        <a href="/posts/add" class="btn btn-info text-white">Thêm bài đăng</a>
    </div>
    <table class="table mt-2 text-center">
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
            <c:forEach items="${posts}" var="p">
                <tr>
                    <th scope="row">${p.id}</th>
                    <td>${p.content}</td>
                    <td>${p.createdDate}</td>
                    <td>${p.updatedDate}</td>
                    <c:choose>
                        <c:when test="${p.status == true}">
                            <td>Hoạt động</td>
                        </c:when>
                        <c:otherwise>
                            <td>Ngừng hoạt động</td>
                        </c:otherwise>
                    </c:choose>
                    <td>
                        ${p.userId.firstName} ${p.userId.lastName}
                    </td>
                    <td>
                        <a href="/post-details/${p.id}" class="btn btn-success">Cập nhật</a>
                        <c:url value="/api/posts/${p.id}" var="api"/>
                        <button type="button" class="btn btn-danger" onclick="deletePost('${api}')">Xóa</button>
                    </td>
                </tr>
            </c:forEach>
        </tbody>
    </table>
</div>
