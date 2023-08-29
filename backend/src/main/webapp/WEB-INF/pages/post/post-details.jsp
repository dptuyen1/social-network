<%--
    Document   : post-admin
    Created on : Aug 24, 2023, 4:18:45 PM
    Author     : dptuy
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<div class="d-flex flex-column align-items-center">
    <c:choose>
        <c:when test="${post.id != null}">
            <h5 class="text-center">Tùy chỉnh bài đăng</h5>

            <c:if test="${not empty msg}">
                <h5 class="text-center text-danger">${msg}</h5>
            </c:if>

            <form:form cssClass="w-50" modelAttribute="post" method="POST" action="">
                <form:hidden path="createdDate"/>
                <form:hidden path="totalComment"/>
                <form:hidden path="totalReaction"/>
                <div class="mb-3 mt-3">
                    <%--<form:errors path="lastName" element="div" cssClass="text-danger mb-2 mb-2"/>--%>
                    <form:input path="content" type="text" class="form-control" placeholder="Nội dung..."/>
                </div>
                <div class="mb-3 mt-3">
                    <%--<form:errors path="email" element="div" cssClass="text-danger mb-2"/>--%>
                    <form:select path="status" class="form-select" aria-label="Default select example">
                        <c:choose>
                            <c:when test="${post.status}">
                                <option value="true" selected>Hoạt động</option>
                                <option value="false">Ngừng hoạt động</option>
                            </c:when>
                            <c:otherwise>
                                <option value="true">Hoạt động</option>
                                <option value="false" selected>Ngừng hoạt động</option>
                            </c:otherwise>
                        </c:choose>
                    </form:select>
                </div>
                <div class="mb-3">
                    <%--<form:errors path="username" element="div" cssClass="text-danger mb-2"/>--%>
                    <form:select path="userId" class="form-select" aria-label="Default select example">
                        <c:forEach items="${users}" var="user">
                            <c:choose>
                                <c:when test="${post.userId.id == user.id}">
                                    <option value="${user.id}" selected>${user.firstName} ${user.lastName}</option>
                                </c:when>
                                <c:otherwise>
                                    <option value="${user.id}">${user.firstName} ${user.lastName}</option>
                                </c:otherwise>
                            </c:choose>
                        </c:forEach>
                    </form:select>
                </div>
                <button type="submit" class="btn btn-primary">Cập nhật</button>
            </form:form>
        </c:when>
        <c:otherwise>
            <h5 class="text-center">Thêm bài đăng mới</h5>

            <c:if test="${not empty msg}">
                <h5 class="text-center text-danger">${msg}</h5>
            </c:if>

            <form:form cssClass="w-50" modelAttribute="post" method="POST" action="">
                <div class="mb-3 mt-3">
                    <%--<form:errors path="lastName" element="div" cssClass="text-danger mb-2 mb-2"/>--%>
                    <form:input path="content" type="text" class="form-control" placeholder="Nội dung..."/>
                </div>
                <button type="submit" class="btn btn-primary">Thêm mới</button>
            </form:form>
        </c:otherwise>
    </c:choose>
</div>
