<%--
    Document   : signup
    Created on : Aug 9, 2023, 3:16:54 PM
    Author     : dptuy
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<div class="d-flex flex-column align-items-center">
    <h5 class="text-center">Đăng ký tài khoản cho giảng viên</h5>

    <c:choose>
        <c:when test="${not empty msg}">
            <div class="w-50 alert alert-danger mb-2 d-flex align-items-center mt-3" role="alert">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-exclamation-triangle-fill flex-shrink-0 me-2" viewBox="0 0 16 16" role="img" aria-label="Warning:">
                    <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg>
                <div>
                    ${msg}
                </div>
            </div>
        </c:when>
    </c:choose>

    <form:form cssClass="w-50" modelAttribute="user" method="post" action="" enctype="multipart/form-data">
        <form:hidden path="avatar"/>
        <div class="mb-3 mt-3">
            <form:errors path="lastName" element="div" cssClass="text-danger mb-2 mb-2"/>
            <form:input path="lastName" type="text" class="form-control" name="ln" placeholder="Họ"/>
        </div>
        <div class="mb-3 mt-3">
            <form:errors path="firstName" element="div" cssClass="text-danger mb-2"/>
            <form:input path="firstName" type="text" class="form-control" name="fn" placeholder="Tên"/>
        </div>
        <div class="mb-3 mt-3">
            <form:errors path="email" element="div" cssClass="text-danger mb-2"/>
            <form:input path="email" type="email" class="form-control" placeholder="Nhập email..." name="email" />
        </div>
        <div class="mb-3">
            <form:errors path="username" element="div" cssClass="text-danger mb-2"/>
            <form:input path="username" type="text" class="form-control" id="username" placeholder="Nhập tài khoản..." name="username" />
        </div>
        <div class="mb-3">
            <label for="avatar" class="form-label">Avatar:</label>
            <form:input path="file" type="file" class="form-control" name="avatar" accept="image/*" />
        </div>
        <button type="submit" class="btn btn-primary">Đăng ký</button>
    </form:form>
</div>