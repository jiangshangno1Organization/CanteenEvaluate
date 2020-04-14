package cn.resturant.entity;

public class Cookerex extends Cooker {
    private String jianjie;

    public Cookerex(Integer id, String name, String avgs, String memo2, String memo3, String memo4, String jianjie) {
        super(id, name, avgs, memo2, memo3, memo4);
        this.jianjie = jianjie;
    }

    public Cookerex(String jianjie) {
        this.jianjie = jianjie;
    }

    public Cookerex() {
    }

    public String getJianjie() {
        return jianjie;
    }

    public void setJianjie(String jianjie) {
        this.jianjie = jianjie;
    }
}
