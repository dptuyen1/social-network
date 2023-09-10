/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service;

import java.util.List;
import java.util.Map;

/**
 *
 * @author dptuy
 */
public interface StatsService {

    List<Object[]> userStats();

    List<Object[]> postStats(Map<String, String> params);

    List<Integer> getYears();
}
