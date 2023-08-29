<%--
    Document   : comment
    Created on : Aug 29, 2023, 9:00:58 AM
    Author     : dptuy
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="d-flex align-items-center justify-content-between w-100 my-4">
    <h5 class="text-center">Quản lý bình luận</h5>
    <a href="/comments/add" class="btn btn-success">
        <i class="fa-regular fa-square-plus"></i>
        Thêm bình luận
    </a>
</div>
<table class="table table-hover mt-2 text-center">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Nội dung</th>
            <th scope="col">Ngày tạo</th>
            <th scope="col">Ngày chỉnh sửa</th>
            <th scope="col">Người đăng</th>
            <th scope="col">Bài đăng</th>
            <th scope="col">Tùy chỉnh</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${comments}" var="comment">
            <tr>
                <th scope="row">${comment.id}</th>
                <td class="text-truncate" style="max-width: 200px;" title="${comment.content}">${comment.content}</td>
                <td><input type="datetime-local" value="${comment.createdDate}" readonly="true" class="form-control text-center"/></td>
                    <c:choose>
                        <c:when test="${comment.updatedDate != null}">
                        <td><input type="datetime-local" value="${comment.updatedDate}" readonly="true" class="form-control text-center"/></td>
                        </c:when>
                        <c:otherwise>
                        <td><input type="text" readonly="true" class="form-control text-center"/></td>
                        </c:otherwise>
                    </c:choose>
                <td>
                    ${comment.userId.firstName} ${comment.userId.lastName}
                </td>
                <td class="text-truncate" style="max-width: 200px;" title="${comment.postId.content}">
                    ${comment.postId.content}
                </td>
                <td>
                    <a href="/comment-details/${comment.id}" class="btn btn-warning btn-sm text-white">
                        <i class="fa-solid fa-pen"></i>
                    </a>
                    <c:url value="/api/comments/${comment.id}" var="api"/>
                    <button type="button" class="btn btn-danger btn-sm" onclick="deleteComment('${api}')">
                        <i class="fa-solid fa-trash"></i>
                    </button>
                </td>
            </tr>
        </c:forEach>
    </tbody>
</table>