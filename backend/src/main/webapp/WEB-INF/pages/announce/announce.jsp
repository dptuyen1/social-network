<%--
    Document   : notify
    Created on : Sep 7, 2023, 10:36:30 PM
    Author     : dptuy
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<div class="d-flex flex-column align-items-center my-4">
    <h5 class="text-center">Đăng thông báo</h5>
    <c:if test="${not empty msg}">
        <h5 class="text-center text-success">${msg}</h5>
    </c:if>

    <c:choose>
        <c:when test="${not empty user}">
            <form class="w-50" method="POST" action="">
                <div class="mb-3 mt-3">
                    <input type="text" class="form-control" value="${user.email}" readonly="true" name="to"/>
                </div>
                <div class="mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="Nhập tiêu đề..." name="subject"/>
                </div>
                <div class="mb-3 mt-3">
                    <textarea class="form-control" rows="4" placeholder="Nhập nội dung..." name="text"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Gửi thông báo</button>
            </form>
        </c:when>

        <c:otherwise>
            <form class="w-50" method="POST" action="">
                <div class="mb-3 mt-3">
                    <c:choose>
                        <c:when test="${role.name == 'admin'}">
                            <input type="text" class="form-control" value="Nhóm quản trị viên" readonly="true"/>
                        </c:when>
                        <c:when test="${role.name == 'teacher'}">
                            <input type="text" class="form-control" value="Nhóm giáo viên" readonly="true"/>
                        </c:when>
                        <c:otherwise>
                            <input type="text" class="form-control" value="Nhóm cựu sinh viên" readonly="true"/>
                        </c:otherwise>
                    </c:choose>
                </div>
                <div class="mb-3 mt-3">
                    <input type="text" class="form-control" placeholder="Nhập tiêu đề..." name="subject"/>
                </div>
                <div class="mb-3 mt-3">
                    <textarea class="form-control" rows="4" placeholder="Nhập nội dung..." name="text"></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Gửi thông báo</button>
            </form>
        </c:otherwise>
    </c:choose>


</div>