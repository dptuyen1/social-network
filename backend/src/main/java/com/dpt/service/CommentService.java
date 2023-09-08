/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service;

import com.dpt.pojo.Comment;
import java.util.List;

/**
 *
 * @author dptuy
 */
public interface CommentService {

    List<Comment> getComments();

    List<Comment> getCommentsByPostId(int id);

    Comment add(Comment comment);

    boolean delete(int id);

    Comment getCommentById(int id);

    Comment update(int id, Comment comment);
}
