package cn.resturant.service;

import cn.resturant.dao.CommentsMapper;
import cn.resturant.dao.CookerMapper;
import cn.resturant.dao.FoodMapper;
import cn.resturant.entity.Comments;
import cn.resturant.entity.Cooker;
import cn.resturant.entity.Food;
import cn.resturant.entity.Foodex;
import cn.resturant.entity.dto.EvaluateDto;
import org.springframework.stereotype.Service;

import javax.annotation.Resource;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.*;

/*
食物接口实现类
 */
@Service
public class FoodServiceImpl implements FoodService {
    @Resource
    FoodMapper foodMapper;
    @Resource
    CommentsMapper commentsMapper;
    @Resource
    CookerMapper cookerMapper;
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

    @Override
    public boolean evalute(EvaluateDto evaluateDto) {
        Comments comments=new Comments();
        comments.setComments(evaluateDto.getFoodcomments());
        comments.setMemo1(evaluateDto.getMemo1());
        comments.setMemo2(evaluateDto.getMemo2());
        comments.setMemo3(evaluateDto.getMemo3());
        comments.setMemo4(evaluateDto.getMemo4());
        comments.setDate(new Date());
        comments.setParentsid(evaluateDto.getId());
        comments.setTypeid(1);
        /**
         * 插入评论表食物版
         */
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
        int foodcomments=commentsMapper.insertSelective(comments);
        Comments commentscook=new Comments();
        commentscook.setMemo1(evaluateDto.getCooksmemo2());
        commentscook.setComments(evaluateDto.getCooksmemo1());
        commentscook.setTypeid(3);
        commentscook.setDate(new Timestamp(new Date().getTime()));
        Food food=foodMapper.selectByPrimaryKey(evaluateDto.getId());
        int cookid=food.getCookid();
        commentscook.setParentsid(food.getCookid());
        /**
         * 插入评论表厨师版
         */
        int cookcookment=commentsMapper.insertSelective(commentscook);
        /**
         * 重新计算厨师平均分
         */
        double avgs=(5+commentsMapper.selectcooksum(cookid))/(1+commentsMapper.selectcookcount(cookid));
        Cooker cooker=new Cooker();
        cooker.setAvgs(String.valueOf(avgs));
        cooker.setId(cookid);
        try{
            int m=cookerMapper.updateavg(cooker);
        }catch (Exception e){
            return  false;
        }
        return true;
    }

    @Override
    public List<Foodex> getfood() {
        String[]weekend={"礼拜天","礼拜一","礼拜二","礼拜三","礼拜四","礼拜五","礼拜六"};
        Calendar calendar=Calendar.getInstance();
        String day=weekend[calendar.get(Calendar.DAY_OF_WEEK)-1];
        String type="";
       switch (day){
           case"礼拜天":
               type="color";
               break;
           case"礼拜一":
               type="fragrance";
               break;
           case"礼拜二":
               type="taste";
               break;
           case"礼拜三":
               type="shape";
               break;
           case"礼拜四":
               type="avgs";
               break;
           case"礼拜五":
               type="taste";
               break;
           case"礼拜六":
               type="avgs";
               break;
           default:
               type="avgs";
               break;
       }
        List<Foodex>foodexes=foodMapper.yuce(type);
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
