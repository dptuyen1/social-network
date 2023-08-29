<%--
    Document   : role
    Created on : Aug 29, 2023, 9:00:58 AM
    Author     : dptuy
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<div class="d-flex align-items-center justify-content-between w-100 my-4">
    <h5 class="text-center">Quản lý quyền người dùng</h5>
    <a href="/roles/add" class="btn btn-success">
        <i class="fa-regular fa-square-plus"></i>
        Thêm quyền người dùng
    </a>
</div>
<table class="table table-hover mt-2 text-center">
    <thead>
        <tr>
            <th scope="col">ID</th>
            <th scope="col">Tên</th>
            <th scope="col">Tùy chỉnh</th>
        </tr>
    </thead>
    <tbody>
        <c:forEach items="${roles}" var="role">
            <tr>
                <th scope="row">${role.id}</th>
                <td>${role.name}</td>
                <td>
                    <a href="/role-details/${role.id}" class="btn btn-warning btn-sm text-white">
                        <i class="fa-solid fa-pen"></i>
                    </a>
                    <!--                    <c:url value="/api/roles/${role.id}" var="api"/>
                                        <button type="button" class="btn btn-danger btn-sm" onclick="deleteReaction('${api}')">
                                            <i class="fa-solid fa-trash"></i>
                                        </button>-->
                </td>
            </tr>
        </c:forEach>
    </tbody>
</table>