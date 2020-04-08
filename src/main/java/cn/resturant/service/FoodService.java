package cn.resturant.service;

import cn.resturant.entity.Foodex;

import java.util.List;

/**
 * 食物操作接口类
 */
public interface FoodService {
    public List<Foodex>getlist(int num,int day);//获取今日三餐菜谱。

}
