package cn.resturant.service;

import cn.resturant.dao.CommentsMapper;
import cn.resturant.dao.FoodMapper;
import cn.resturant.dao.UserMapper;
import cn.resturant.entity.Comments;
import cn.resturant.entity.Food;
import cn.resturant.entity.User;
import cn.resturant.entity.dto.EvaluateDto;
import cn.resturant.entity.dto.FoodSelectDto;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import javax.annotation.Resource;
import java.util.Date;

@Service
public class UserServiceImpl implements UserService {
    @Resource
    UserMapper userMapper;
    @Resource
    CommentsMapper commentsMapper;
    @Resource
    FoodMapper foodMapper;
    @Override
    public boolean login(User user) {
        boolean flag=false;
        User user1=userMapper.login(user);
        if(user1!=null){
            flag=true;
        }
        return flag;
    }

    @Override
    public boolean evaulatsell(EvaluateDto evaluateDto) {
        Comments comments=new Comments();
        comments.setMemo1(evaluateDto.getMemo1());
        comments.setComments(evaluateDto.getSellercomments());
        comments.setParentsid(evaluateDto.getId());
        comments.setTypeid(2);
        comments.setDate(new Date());
        try{
            int m=commentsMapper.insertSelective(comments);
        }catch (Exception e){
            return false;
        }
        return true;
    }

    @Override
    public boolean updatefoodstyle(FoodSelectDto foodSelectDto) {
        Food food=foodMapper.selectByPrimaryKey(foodSelectDto.getId());
        if(food==null){
            System.out.println("该id不存在");
            return false;
        }
        if(foodSelectDto.getTypeid()==0){
            System.out.println("食物类型传输id为0");
            return false;
        }

        if(foodSelectDto.getLeixing()==1){
            String memo1=food.getMemo1();
            if(foodSelectDto.getIsadd()==0){
                if(!StringUtils.isEmpty(memo1)){
                    memo1=memo1.replace(String.valueOf(foodSelectDto.getTypeid()),"");
                }
            }else if(foodSelectDto.getIsadd()==1){
                if(!StringUtils.isEmpty(memo1)){
                    int i=memo1.indexOf(String.valueOf(foodSelectDto.getTypeid()));
                    if(i==-1){
                        memo1=memo1+","+String.valueOf(foodSelectDto.getTypeid());
                    }
                }else {
                    memo1=String.valueOf(foodSelectDto.getTypeid());
                }

            }
            food.setMemo1(memo1);
            try{
                int update=foodMapper.updateByPrimaryKeySelective(food);
                System.out.println(update);
            }catch (Exception e){
                return false;
            }
        }else if(foodSelectDto.getLeixing()==2){
            String memo2=food.getMemo2();
            if(foodSelectDto.getIsadd()==0){
                if(!StringUtils.isEmpty(memo2)){
                    memo2=memo2.replace(String.valueOf(foodSelectDto.getTypeid()),"");
                }
            }else if(foodSelectDto.getIsadd()==1){
                if(!StringUtils.isEmpty(memo2)){
                    int i=memo2.indexOf(String.valueOf(foodSelectDto.getTypeid()));
                    if(i==-1){
                        memo2=memo2+","+String.valueOf(foodSelectDto.getTypeid());
                    }
                }else{
                    memo2=String.valueOf(foodSelectDto.getTypeid());
                }

            }
            food.setMemo2(memo2);
            try{
                int update=foodMapper.updateByPrimaryKeySelective(food);
                System.out.println(update);
            }catch (Exception e){
                return false;
            }
        }

        return true;
    }

    @Override
    public boolean updatefoodto(int typeid) {
        try{
            int m=foodMapper.updateto();
        }catch (Exception e){
            return false;
        }
        return true;
    }
}
