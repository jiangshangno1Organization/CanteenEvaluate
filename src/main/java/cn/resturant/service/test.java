package cn.resturant.service;

import cn.resturant.dao.FoodMapper;
import cn.resturant.entity.Foodex;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import java.util.List;

public class test {
    public static void main(String[] args) {
        ApplicationContext context = new ClassPathXmlApplicationContext("spring-config.xml");
        FoodMapper foodMapper=context.getBean(FoodMapper.class);
        List<Foodex>foodexes=foodMapper.selecttodayfood(2);
        for(Foodex foodex:foodexes){
            double c=Double.parseDouble(String.format("%.1f", foodex.getColor()));
            foodex.setColor(c);
            System.out.println(foodex.getId());
            System.out.println(foodex.getName());
            System.out.println(foodex.getCounts());
            System.out.println(foodex.getColor());
            System.out.println(foodex.getFragrance());
            System.out.println(foodex.getTaste());
            System.out.println(foodex.getShape());

        }

    }
}
