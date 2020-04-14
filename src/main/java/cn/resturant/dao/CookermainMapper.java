package cn.resturant.dao;

import cn.resturant.entity.Cookermain;

public interface CookermainMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Cookermain record);

    int insertSelective(Cookermain record);

    Cookermain selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Cookermain record);

    int updateByPrimaryKey(Cookermain record);
}