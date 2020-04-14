package cn.resturant.dao;

import cn.resturant.entity.Seller;
import cn.resturant.entity.Sellerex;

import java.util.List;

public interface SellerMapper {
    int deleteByPrimaryKey(Integer id);

    int insert(Seller record);

    int insertSelective(Seller record);

    Seller selectByPrimaryKey(Integer id);

    int updateByPrimaryKeySelective(Seller record);

    int updateByPrimaryKey(Seller record);

    List<Sellerex>selectall();
}