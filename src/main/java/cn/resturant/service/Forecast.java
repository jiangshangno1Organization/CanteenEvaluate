package cn.resturant.service;

import cn.resturant.entity.Foodex;

import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

/**
 * 预测
 */
public class Forecast {
    public List<Foodex>Foreca(){
        Date date=new Date();
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        String dates=sdf.format(date);
        System.out.println(dates);
        return null;
    }
}
