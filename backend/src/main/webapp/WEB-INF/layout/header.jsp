<%--
    Document   : header
    Created on : Aug 9, 2023, 2:36:09 PM
    Author     : dptuy
--%>

<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="sec" uri="http://www.springframework.org/security/tags" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<header class="p-3 bg-light text-white">
    <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
                <sec:authorize access="hasAuthority('admin')">
                    <li><a href="<c:url value="/" />" class="nav-link px-2 text-dark">Social Network Admin</a></li>
                    <li><a href="<c:url value="/users" />" class="nav-link px-2 text-dark">Tài khoản</a></li>
                    <li><a href="<c:url value="/posts" />" class="nav-link px-2 text-dark">Bài viết</a></li>
                    <li><a href="<c:url value="/comments" />" class="nav-link px-2 text-dark">Bình luận</a></li>
                    <li><a href="<c:url value="/reactions" />" class="nav-link px-2 text-dark">Biểu cảm</a></li>
                    <li><a href="<c:url value="/roles" />" class="nav-link px-2 text-dark">Quyền</a></li>
                    <li><a href="<c:url value="/announce" />" class="nav-link px-2 text-dark">Đăng thông báo</a></li>
                    </sec:authorize>
            </ul>

            <div class="text-end">
                <c:choose>
                    <c:when test="${pageContext.request.userPrincipal.name != null}">
                        <a href="#" class="btn btn-outline-primary me-2">
                            ${pageContext.request.userPrincipal.name}
                        </a>
                        <a href="<c:url value="/logout" />" class="btn btn-outline-secondary">
                            <i class="fa-solid fa-arrow-right-from-bracket"></i>
                            Đăng xuất
                        </a>
                    </c:when>
                    <c:otherwise>
                        <a href="<c:url value="/login" />" class="btn btn-info me-2">Đăng nhập</a>
                        <!--<a href="<c:url value="/signup" />" class="btn btn-warning">Đăng ký</a>-->
                    </c:otherwise>
                </c:choose>
            </div>
        </div>
</header>