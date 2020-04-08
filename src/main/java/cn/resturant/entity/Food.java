package cn.resturant.entity;

public class Food {
    private Integer id;

    private String name;

    private Integer cookid;

    private String memo1;

    private String memo2;

    private String memo3;

    private String url;

    public Food(Integer id, String name, Integer cookid, String memo1, String memo2, String memo3, String url) {
        this.id = id;
        this.name = name;
        this.cookid = cookid;
        this.memo1 = memo1;
        this.memo2 = memo2;
        this.memo3 = memo3;
        this.url = url;
    }

    public Food() {
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

    public Integer getCookid() {
        return cookid;
    }

    public void setCookid(Integer cookid) {
        this.cookid = cookid;
    }

    public String getMemo1() {
        return memo1;
    }

    public void setMemo1(String memo1) {
        this.memo1 = memo1 == null ? null : memo1.trim();
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url == null ? null : url.trim();
    }
}