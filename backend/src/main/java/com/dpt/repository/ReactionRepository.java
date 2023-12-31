/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.repository;

import com.dpt.pojo.Reaction;
import java.util.List;

/**
 *
 * @author dptuy
 */
public interface ReactionRepository {

    List<Reaction> getReactions();

    Reaction getReactionById(int id);

    boolean addOrUpdate(Reaction reaction);

    boolean delete(Reaction reaction);
}
