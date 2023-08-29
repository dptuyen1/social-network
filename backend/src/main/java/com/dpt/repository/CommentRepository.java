/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository;

import com.dpt.pojo.Comment;
import java.util.List;

/**
 *
 * @author dptuy
 */
public interface CommentRepository {

    List<Comment> getComments();

    boolean addOrUpdate(Comment comment);

    boolean delete(Comment comment);
}
