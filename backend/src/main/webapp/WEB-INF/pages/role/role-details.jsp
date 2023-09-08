<%--
    Document   : reaction-details
    Created on : Aug 29, 2023, 9:20:57 AM
    Author     : dptuy
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<div class="d-flex flex-column align-items-center">
    <c:choose>
        <c:when test="${role.id != null}">
            <h5 class="text-center">Tùy chỉnh quyền người dùng</h5>

            <c:if test="${not empty msg}">
                <h5 class="text-center text-danger">${msg}</h5>
            </c:if>

            <form:form cssClass="w-50" modelAttribute="role" method="POST" action="">
                <div class="mb-3 mt-3">
                    <%--<form:errors path="lastName" element="div" cssClass="text-danger mb-2 mb-2"/>--%>
                    <form:input path="name" type="text" class="form-control" placeholder="Nội dung..."/>
                </div>
                <button type="submit" class="btn btn-primary">Cập nhật</button>
            </form:form>
        </c:when>

        <c:otherwise>
            <h5 class="text-center">Thêm quyền người dùng mới</h5>

            <c:if test="${not empty msg}">
                <h5 class="text-center text-danger">${msg}</h5>
            </c:if>

            <form:form cssClass="w-50" modelAttribute="role" method="POST" action="">
                <div class="mb-3 mt-3">
                    <%--<form:errors path="lastName" element="div" cssClass="text-danger mb-2 mb-2"/>--%>
                    <form:input path="name" type="text" class="form-control" placeholder="Tên..."/>
                </div>
                <button type="submit" class="btn btn-primary">Thêm mới</button>
            </form:form>
        </c:otherwise>
    </c:choose>
</div>