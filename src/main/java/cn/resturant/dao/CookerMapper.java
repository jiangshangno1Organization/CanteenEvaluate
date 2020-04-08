package cn.resturant.dao;

import cn.resturant.entity.Cooker;

public interface CookerMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Cooker record);

    int insertSelective(Cooker record);

    Cooker selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Cooker record);

    int updateByPrimaryKey(Cooker record);

    int updateavg(Cooker cooker);
}