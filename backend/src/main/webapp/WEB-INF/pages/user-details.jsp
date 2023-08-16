<%--
    Document   : user-details
    Created on : Aug 16, 2023, 10:33:35 AM
    Author     : dptuy
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<div class="container-xl px-4 mt-4">
    <div class="row">
        <div class="col-xl-4">
            <!-- Profile picture card-->
            <div class="card mb-4 mb-xl-0">
                <div class="card-header">Ảnh đại diện</div>
                <div class="card-body text-center">
                    <img class="img-account-profile rounded-circle mb-2" src="${user.avatar}" alt="" width="120px">
                    <input type="file" accept="image/*" class="form-control" />
                </div>
            </div>
        </div>
        <div class="col-xl-8">
            <!-- Account details card-->
            <div class="card mb-4">
                <div class="card-header">Thông tin tài khoản</div>
                <div class="card-body">
                    <form>
                        <div class="row gx-3 mb-3">
                            <!-- Form Group (first name)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputFirstName">Tên</label>
                                <input class="form-control" id="inputFirstName" type="text" placeholder="Enter your first name" value="${user.firstName}" />
                            </div>
                            <!-- Form Group (last name)-->
                            <div class="col-md-6">
                                <label class="small mb-1" for="inputLastName">Họ</label>
                                <input class="form-control" id="inputLastName" type="text" placeholder="Enter your last name" value="${user.lastName}" />
                            </div>
                        </div>
                        <!-- Form Group (email address)-->
                        <div class="mb-3">
                            <label class="small mb-1" for="inputEmailAddress">Email</label>
                            <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email address" value="${user.email}">
                        </div>
                        <!-- Save changes button-->
                        <button class="btn btn-primary" type="button">Lưu thay đổi</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
