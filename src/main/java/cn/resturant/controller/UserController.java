package cn.resturant.controller;

import cn.resturant.entity.User;
import cn.resturant.service.UserService;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;

@RestController
@RequestMapping("/user")
public class UserController {
    @Resource
    UserService userService;
    @RequestMapping("/login")
    public boolean logins(User user){
        return userService.login(user);
    }
}
