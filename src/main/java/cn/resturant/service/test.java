package cn.resturant.service;

import cn.resturant.dao.CommentsMapper;
import cn.resturant.dao.FoodMapper;
import cn.resturant.entity.*;
import cn.resturant.entity.dto.EvaluateDto;
import cn.resturant.entity.dto.FoodSelectDto;
import com.alibaba.fastjson.JSONArray;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.multipart.MultipartFile;

import java.nio.file.Paths;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

public class test {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        Seller seller=new Seller();
        seller.setAge("20岁");
        seller.setName("小红");
        seller.setSex("女");
        System.out.println(JSONArray.toJSON(seller));
//        String test="1,2,3,4,1,1,1,2,1";
//        System.out.println(String.valueOf(0));
//        System.out.println(test.replace("5",""));
//        FoodSelectDto foodSelectDto=new FoodSelectDto();
//        foodSelectDto.setId(0);
//        foodSelectDto.setIsadd(1);
//        foodSelectDto.setTypeid(2);
//        foodSelectDto.setLeixing(1);
//        System.out.println(JSONArray.toJSON(foodSelectDto));

    }

    }

