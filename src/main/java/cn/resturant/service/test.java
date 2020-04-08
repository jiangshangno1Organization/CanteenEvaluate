//package cn.resturant.service;
//
//import cn.resturant.dao.CommentsMapper;
//import cn.resturant.dao.FoodMapper;
//import cn.resturant.entity.Commentex;
//import cn.resturant.entity.Foodex;
//import org.springframework.context.ApplicationContext;
//import org.springframework.context.support.ClassPathXmlApplicationContext;
//
//import java.util.List;
//
//public class test {
//    public static void main(String[] args) {
//        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
//        CommentsMapper commentsMapper=context.getBean(CommentsMapper.class);
//        List<Commentex>list=commentsMapper.selectcombyfood("1");
//        System.out.println(list);
//
//        }
//
//    }
//
