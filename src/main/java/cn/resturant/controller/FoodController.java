package cn.resturant.controller;

import cn.resturant.dao.CommentsMapper;
import cn.resturant.entity.Commentex;
import cn.resturant.entity.Comments;
import cn.resturant.entity.Foodex;
import cn.resturant.service.FoodService;
import cn.resturant.service.UserService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;

/**
 * 食物类接口调用control层
 */
@RestController
@CrossOrigin
@RequestMapping("/foodcontro")
public class FoodController {
    @Resource
    UserService userService;
    @Resource
    FoodService foodService;
    @Resource
    CommentsMapper commentsMapper;
    @RequestMapping("/getfoodlist")//获取今天一日三餐菜谱接口。
    public List<Foodex>getfood(int num,int day)
    {
        return foodService.getlist(num,day);
    }
    @RequestMapping("/getfoodcomm")//获取食物详细评价接口
    public List<Commentex>getcomment(String id){
        System.out.println(id);
        return commentsMapper.selectcombyfood(id);
    }
    @RequestMapping("/evaluate")//学生点评食物接口
    public boolean evaluate(){

        return false;
    }
}
