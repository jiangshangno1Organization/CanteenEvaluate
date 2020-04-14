package cn.resturant.dao;

import cn.resturant.entity.Commentex;
import cn.resturant.entity.Comments;

import java.util.List;
import java.util.Map;

public interface CommentsMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Comments record);

    int insertSelective(Comments record);

    Comments selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Comments record);

    int updateByPrimaryKey(Comments record);

    List<Commentex>selectcombyfood(String id);

    int selectcooksum(int id);

    int selectcookcount(int id);

    List<Commentex> selectcookorsecomm( Map<String,Object> map);
}