package cn.resturant.entity;

public class Cookermain {
    private Integer id;

    private Integer cookid;

    private String jianjie;

    private String memo3;

    private String memo4;

    public Cookermain(Integer id, Integer cookid, String jianjie, String memo3, String memo4) {
        this.id = id;
        this.cookid = cookid;
        this.jianjie = jianjie;
        this.memo3 = memo3;
        this.memo4 = memo4;
    }

    public Cookermain() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getCookid() {
        return cookid;
    }

    public void setCookid(Integer cookid) {
        this.cookid = cookid;
    }

    public String getJianjie() {
        return jianjie;
    }

    public void setJianjie(String jianjie) {
        this.jianjie = jianjie == null ? null : jianjie.trim();
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