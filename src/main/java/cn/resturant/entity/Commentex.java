package cn.resturant.entity;

import java.util.Date;

public class Commentex extends Comments {
    private String avgs;

    public Commentex(Integer id, Integer parentsid, String comments, String memo1, Integer typeid, String memo2, Date date, String memo3, String memo4, String avgs) {
        super(id, parentsid, comments, memo1, typeid, memo2, date, memo3, memo4);
        this.avgs = avgs;
    }

    public Commentex(String avgs) {
        this.avgs = avgs;
    }

    public Commentex() {
    }

    public String getAvgs() {
        return avgs;
    }

    public void setAvgs(String avgs) {
        this.avgs = avgs;
    }
}
