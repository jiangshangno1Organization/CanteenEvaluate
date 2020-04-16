package cn.resturant.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class PageController {
    @RequestMapping("/logins")
    public String page(){
        return "wh_login";
    }
}
