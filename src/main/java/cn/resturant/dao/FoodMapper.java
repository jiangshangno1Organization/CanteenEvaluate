package cn.resturant.dao;

import cn.resturant.entity.Food;
import cn.resturant.entity.Foodex;

import java.util.List;
import java.util.Map;

public interface FoodMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Food record);

    int insertSelective(Food record);

    Food selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Food record);

    int updateByPrimaryKey(Food record);

    List<Foodex>selecttodayfood(Map<String,Object> map);
}