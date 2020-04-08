package cn.resturant.entity;

public class Seller {
    private Integer id;

    private String name;

    private String sex;

    private Integer commentid;

    private String age;

    private String memo;

    private String memo1;

    public Seller(Integer id, String name, String sex, Integer commentid, String age, String memo, String memo1) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.commentid = commentid;
        this.age = age;
        this.memo = memo;
        this.memo1 = memo1;
    }

    public Seller() {
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

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex == null ? null : sex.trim();
    }

    public Integer getCommentid() {
        return commentid;
    }

    public void setCommentid(Integer commentid) {
        this.commentid = commentid;
    }

    public String getAge() {
        return age;
    }

    public void setAge(String age) {
        this.age = age == null ? null : age.trim();
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo == null ? null : memo.trim();
    }

    public String getMemo1() {
        return memo1;
    }

    public void setMemo1(String memo1) {
        this.memo1 = memo1 == null ? null : memo1.trim();
    }
}