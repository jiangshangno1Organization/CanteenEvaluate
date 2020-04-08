package cn.resturant.entity;

/**
 * 食物扩展类
 */
public class Foodex {
    private int id;
    private String name;//食物名称
    private int counts;//评价数量
    private double avgs;//总平均分
    private double  color;//色
    private double  fragrance;//香
    private double  taste;//味
    private double  shape;//形
    public Foodex() {
    }

    public Foodex(int id, String name, int counts, double avgs, double color, double fragrance, double taste, double shape) {
        this.id = id;
        this.name = name;
        this.counts = counts;
        this.avgs = avgs;
        this.color = color;
        this.fragrance = fragrance;
        this.taste = taste;
        this.shape = shape;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCounts() {
        return counts;
    }

    public void setCounts(int counts) {
        this.counts = counts;
    }

    public double getAvgs() {
        return avgs;
    }

    public void setAvgs(double avgs) {
        this.avgs = avgs;
    }

    public double getColor() {
        return color;
    }

    public void setColor(double color) {
        this.color = color;
    }

    public double getFragrance() {
        return fragrance;
    }

    public void setFragrance(double fragrance) {
        this.fragrance = fragrance;
    }

    public double getTaste() {
        return taste;
    }

    public void setTaste(double taste) {
        this.taste = taste;
    }

    public double getShape() {
        return shape;
    }

    public void setShape(double shape) {
        this.shape = shape;
    }
}
