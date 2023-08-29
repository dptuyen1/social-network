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

    <c:if test="${not empty msg}">
        <h5 class="text-center text-danger">${msg}</h5>
    </c:if>

    <form:form cssClass="w-50" modelAttribute="user" method="POST" action="">
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
        <button type="submit" class="btn btn-primary">Đăng ký</button>
    </form:form>
</div>