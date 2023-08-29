/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.controllers;

import com.dpt.pojo.Reaction;
import com.dpt.service.ReactionService;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 *
 * @author dptuy
 */
@Controller
public class ReactionController {

    @Autowired
    private ReactionService reactionService;

    @RequestMapping("/reactions")
    public String index(Model model) {
        model.addAttribute("reactions", this.reactionService.getReactions());
        return "reaction";
    }

    @GetMapping("/reactions/add")
    public String view(Model model) {
        model.addAttribute("reaction", new Reaction());
        return "reaction-details";
    }

    @PostMapping("/reactions/add")
    public String add(Model model, @ModelAttribute(value = "reaction") @Valid Reaction reaction, BindingResult result) {
        if (!result.hasErrors()) {
            if (this.reactionService.add(reaction)) {
                return "redirect:/reactions";
            }
        }
        model.addAttribute("msg", "Có lỗi xảy ra... vui lòng thử lại");
        return "reaction-details";
    }

    @GetMapping("/reaction-details/{id}")
    public String details(Model model, @PathVariable(value = "id") int id) {
        model.addAttribute("reaction", this.reactionService.getReactionById(id));
        return "reaction-details";
    }

    @PostMapping("/reaction-details/{id}")
    public String update(Model model, @ModelAttribute(value = "reaction") @Valid Reaction reaction, BindingResult result) {
        if (!result.hasErrors()) {
            if (this.reactionService.update(reaction)) {
                return "redirect:/reactions";
            }
        }
        model.addAttribute("msg", "Có lỗi xảy ra... vui lòng thử lại");
        return "reaction-details";
    }
}
