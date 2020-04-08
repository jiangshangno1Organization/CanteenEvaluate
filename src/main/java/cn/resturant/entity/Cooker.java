package cn.resturant.entity;

public class Cooker {
    private Integer id;

    private String name;

    private String avgs;//平均分

    private String memo2;//总分

    private String memo3;//评论人数

    private String memo4;

    public Cooker(Integer id, String name, String avgs, String memo2, String memo3, String memo4) {
        this.id = id;
        this.name = name;
        this.avgs = avgs;
        this.memo2 = memo2;
        this.memo3 = memo3;
        this.memo4 = memo4;
    }

    public Cooker() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    public String getAvgs() {
        return avgs;
    }

    public void setAvgs(String avgs) {
        this.avgs = avgs == null ? null : avgs.trim();
    }

    public String getMemo2() {
        return memo2;
    }

    public void setMemo2(String memo2) {
        this.memo2 = memo2 == null ? null : memo2.trim();
    }

    public String getMemo3() {
        return memo3;
    }

    public void setMemo3(String memo3) {
        this.memo3 = memo3 == null ? null : memo3.trim();
    }

    public String getMemo4() {
        return memo4;
    }

    public void setMemo4(String memo4) {
        this.memo4 = memo4 == null ? null : memo4.trim();
    }
}