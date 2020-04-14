package cn.resturant.service;

import cn.resturant.entity.User;
import cn.resturant.entity.dto.EvaluateDto;
import cn.resturant.entity.dto.FoodSelectDto;

/**
 * user接口
 */
public interface UserService {
    public boolean login(User user);//用户登录方法
    public boolean evaulatsell(EvaluateDto evaluateDto);//评价卖饭者
    public boolean updatefoodstyle(FoodSelectDto foodSelectDto);//改变食物早中晚类型
    public boolean updatefoodto(int typeid);//清空今日或明日所有菜谱

}
