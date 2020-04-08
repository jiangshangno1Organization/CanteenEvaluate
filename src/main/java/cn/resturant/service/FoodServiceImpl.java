package cn.resturant.service;

import cn.resturant.dao.FoodMapper;
import cn.resturant.entity.Foodex;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/*
食物接口实现类
 */
@Service
public class FoodServiceImpl implements FoodService {
    @Resource
    FoodMapper foodMapper;
    @Override
    public List<Foodex> getlist(int num,int day) {
        Map<String,Object>map=new HashMap<>();
        map.put("type",num);
        map.put("days",day);
        List<Foodex>foodexes=foodMapper.selecttodayfood(map);
        for(int i=0;i<foodexes.size();i++){
            foodexes.get(i).setColor(Double.parseDouble(String.format("%.1f", foodexes.get(i).getColor())));
            foodexes.get(i).setFragrance(Double.parseDouble(String.format("%.1f", foodexes.get(i).getFragrance())));
            foodexes.get(i).setTaste(Double.parseDouble(String.format("%.1f", foodexes.get(i).getTaste())));
            foodexes.get(i).setShape(Double.parseDouble(String.format("%.1f", foodexes.get(i).getShape())));
            foodexes.get(i).setAvgs(Double.parseDouble(String.format("%.1f", foodexes.get(i).getAvgs())));

        }
        return foodexes;
    }
}
