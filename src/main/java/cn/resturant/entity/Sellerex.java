package cn.resturant.entity;

public class Sellerex extends Seller {
    private String avgs;

    public Sellerex() {
    }

    public Sellerex(Integer id, String name, String sex, Integer commentid, String age, String memo, String memo1, String avgs) {
        super(id, name, sex, commentid, age, memo, memo1);
        this.avgs = avgs;
    }

    public Sellerex(String avgs) {
        this.avgs = avgs;
    }

    public String getAvgs() {
        return avgs;
    }

    public void setAvgs(String avgs) {
        this.avgs = avgs;
    }
}
