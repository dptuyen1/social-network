/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.service.impl;

import com.dpt.repository.StatsRepository;
import com.dpt.service.StatsService;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author dptuy
 */
@Service
public class StatsServiceImpl implements StatsService {

    @Autowired
    private StatsRepository repository;

    @Override
    public List<Object[]> userStats() {
        return this.repository.userStats();
    }

    @Override
    public List<Object[]> postStats(Map<String, String> params) {
        return this.repository.postStats(params);
    }

    @Override
    public List<Integer> getYears() {
        return this.repository.getYears();
    }

}
