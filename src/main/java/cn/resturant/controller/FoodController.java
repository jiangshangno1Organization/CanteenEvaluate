package cn.resturant.controller;

import cn.resturant.dao.CommentsMapper;
import cn.resturant.dao.CookerMapper;
import cn.resturant.dao.FoodMapper;
import cn.resturant.dao.SellerMapper;
import cn.resturant.entity.*;
import cn.resturant.entity.dto.EvaluateDto;
import cn.resturant.service.FoodService;
import cn.resturant.service.UserService;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.nio.file.Paths;
import java.text.SimpleDateFormat;
import java.util.Date;
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
    @Resource
    FoodMapper foodMapper;
    @Resource
    SellerMapper sellerMapper;
    @Resource
    CookerMapper cookerMapper;
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
    @RequestMapping(value = "/evaluate",method = RequestMethod.POST)//学生点评食物接口
    public boolean evaluate(@RequestBody EvaluateDto evaluateDto){
        return foodService.evalute(evaluateDto);
    }
    @RequestMapping("/getfooddetail")//获取某个食物明细接口
    public Food getfood(int id){
        return foodMapper.selectByPrimaryKey(id);
    }
    @RequestMapping("/getselldetail")//获取某个服务员明细接口
    public Seller getsell(int id){
        return sellerMapper.selectByPrimaryKey(id);
    }
    @RequestMapping("/getcookerdetail")//获取某个厨师明细接口
    public Cookerex getcook(int id)
    {
        return cookerMapper.selectcookerex(id);
    }

}
