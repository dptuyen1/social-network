/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.dpt.api;

import com.dpt.components.JwtService;
import com.dpt.pojo.User;
import com.dpt.pojo.UserDTO;
import com.dpt.service.UserService;
import java.security.Principal;
import java.util.Map;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

/**
 *
 * @author dptuy
 */
@RestController
@CrossOrigin
@RequestMapping("/api")
public class UserApi {

    @Autowired
    private JwtService jwtService;

    @Autowired
    private UserService userService;

    @Autowired
    private ModelMapper modelMapper;

    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody User user) {
        if (this.userService.authUser(user.getUsername(), user.getPassword()) == true) {
            String token = this.jwtService.generateTokenLogin(user.getUsername());

            return new ResponseEntity<>(token, HttpStatus.OK);
        }

        return new ResponseEntity<>("error", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/auth-user")
    public ResponseEntity<?> authUser(@RequestBody User user) {
        if (this.userService.authUser(user.getUsername(), user.getPassword()) == true) {
            return new ResponseEntity<>("Correct password", HttpStatus.OK);
        }

        return new ResponseEntity<>("Wrong password", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/test")
    public ResponseEntity<String> test(Principal pricipal) {
        return new ResponseEntity<>("SUCCESSFUL", HttpStatus.OK);
    }

    @PostMapping(path = "/register",
            consumes = {MediaType.MULTIPART_FORM_DATA_VALUE},
            produces = {MediaType.APPLICATION_JSON_VALUE})
    public ResponseEntity<?> addUser(@RequestParam Map<String, String> params, @RequestPart MultipartFile avatar) {
        String username = params.get("username");
        if (this.userService.getUserByUsername(username) == null) {
            User user = this.userService.add(params, avatar);
            return new ResponseEntity<>(user, HttpStatus.CREATED);
        }
        return new ResponseEntity<>("User đã tồn tại!", HttpStatus.BAD_REQUEST);
    }

//    @GetMapping(path = "/current-user", produces = MediaType.APPLICATION_JSON_VALUE)
//    public ResponseEntity<UserDTO> details(Principal principal) {
//        User user = this.userService.getUserByUsername(principal.getName());
//        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
//        return new ResponseEntity<>(userDTO, HttpStatus.OK);
//    }
    @GetMapping(path = "/current-user", produces = MediaType.APPLICATION_JSON_VALUE)
    public ResponseEntity<User> details(Principal principal) {
        User user = this.userService.getUserByUsername(principal.getName());
        UserDTO userDTO = modelMapper.map(user, UserDTO.class);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }

    @GetMapping(path = "/existed-user/{username}")
    public ResponseEntity<?> existedUser(@PathVariable(value = "username") String username) {
        User user = this.userService.getUserByUsername(username);

        if (user != null) {
            return new ResponseEntity<>("User existed", HttpStatus.CONFLICT);
        } else {
            return new ResponseEntity<>("New user", HttpStatus.OK);
        }
    }

    @PutMapping("/{username}/change-password")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public boolean changPassword(@PathVariable(value = "username") String username, @RequestBody User user) {
        return this.userService.changePassword(username, user);
    }
}
