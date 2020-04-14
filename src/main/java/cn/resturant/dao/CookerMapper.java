package cn.resturant.dao;

import cn.resturant.entity.Cooker;
import cn.resturant.entity.Cookerex;

import java.util.List;

public interface CookerMapper {
    int deleteByPrimaryKey(Integer id);
    int deleteex(int id);

    int insert(Cooker record);

    int insertSelective(Cooker record);

    Cooker selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Cooker record);

    int updateByPrimaryKey(Cooker record);

    int updateavg(Cooker cooker);

    List<Cookerex>selectall();

    Cooker selectone(Cooker cooker);

    Cookerex selectcookerex(int id);
}