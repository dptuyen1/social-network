<%--
    Document   : header
    Created on : Aug 9, 2023, 2:36:09 PM
    Author     : dptuy
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<header class="p-3 bg-light text-white">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <li><a href="<c:url value="/" />" class="nav-link px-2 text-dark">Home</a></li>
            </ul>

            <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input type="search" class="form-control form-control-dark" placeholder="Search..." aria-label="Search">
            </form>

            <div class="text-end">
                <a href="<c:url value="/login" />" class="btn btn-info me-2">Đăng nhập</a>
                <a href="<c:url value="/signup" />" class="btn btn-warning">Đăng ký</a>
            </div>
        </div>
    </div>
</header>
