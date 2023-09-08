<%--
    Document   : user-details
    Created on : Aug 29, 2023, 5:28:30 PM
    Author     : dptuy
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<div class="d-flex flex-column align-items-center">
    <h5 class="text-center">Tùy chỉnh tài khoản</h5>

    <c:if test="${not empty msg}">
        <h5 class="text-center text-danger">${msg}</h5>
    </c:if>

    <form:form cssClass="w-50" modelAttribute="user" method="POST" action="">
        <form:hidden path="firstName"/>
        <form:hidden path="lastName"/>
        <form:hidden path="email"/>
        <form:hidden path="password"/>
        <form:hidden path="avatar"/>
        <form:hidden path="cover"/>
        <form:hidden path="createdDate"/>
        <div class="mb-3 mt-3">
            <%--<form:errors path="lastName" element="div" cssClass="text-danger mb-2 mb-2"/>--%>
            <form:input path="username" type="text" class="form-control" readonly="true"/>
        </div>
        <form:select path="active" class="form-select mb-3 mt-3" aria-label="Default select example">
            <c:choose>
                <c:when test="${user.active}">
                    <option value="true" selected>Hoạt động</option>
                    <option value="false">Ngừng hoạt động</option>
                </c:when>
                <c:otherwise>
                    <option value="true">Hoạt động</option>
                    <option value="false" selected>Ngừng hoạt động</option>
                </c:otherwise>
            </c:choose>
        </form:select>
        <form:select path="roleId" class="form-select mb-3 mt-3" aria-label="Default select example">
            <c:forEach items="${roles}" var="role">
                <c:choose>
                    <c:when test="${user.roleId.id == role.id}">
                        <option value="${role.id}" selected>${role.name}</option>
                    </c:when>
                    <c:otherwise>
                        <option value="${role.id}">${role.name}</option>
                    </c:otherwise>
                </c:choose>
            </c:forEach>
        </form:select>
        <button type="submit" class="btn btn-primary">Cập nhật</button>
    </form:form>
</div>
