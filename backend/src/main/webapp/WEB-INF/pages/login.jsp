<%--
    Document   : login
    Created on : Aug 10, 2023, 9:20:31 PM
    Author     : dptuy
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<!DOCTYPE html>
<div class="d-flex flex-column align-items-center">
    <h5 class="text-center">Đăng nhập</h5>

    <form:form cssClass="w-50" modelAttribute="user" method="post" action="">
        <div class="mb-3">
            <label for="username" class="form-label">Tài khoản:</label>
            <form:input path="username" type="text" class="form-control" id="username" placeholder="Nhập tài khoản..." name="username" />
        </div>
        <div class="mb-3">
            <label for="pwd" class="form-label">Mật khẩu:</label>
            <form:input path="password" type="password" class="form-control" id="pwd" placeholder="Nhập mật khẩu..." name="pswd" />
        </div>
        <button type="submit" class="btn btn-primary">Đăng nhập</button>
    </form:form>
</div>
