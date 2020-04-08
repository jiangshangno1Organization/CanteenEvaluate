package cn.resturant.entity;

import java.util.Date;

public class Comments {
    private Integer id;

    private Integer parentsid;

    private String comments;

    private String memo1;

    private Integer typeid;

    private String memo2;

    private Date date;

    private String memo3;

    private String memo4;

    public Comments(Integer id, Integer parentsid, String comments, String memo1, Integer typeid, String memo2, Date date, String memo3, String memo4) {
        this.id = id;
        this.parentsid = parentsid;
        this.comments = comments;
        this.memo1 = memo1;
        this.typeid = typeid;
        this.memo2 = memo2;
        this.date = date;
        this.memo3 = memo3;
        this.memo4 = memo4;
    }

    public Comments() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getParentsid() {
        return parentsid;
    }

    public void setParentsid(Integer parentsid) {
        this.parentsid = parentsid;
    }

    public String getComments() {
        return comments;
    }

    public void setComments(String comments) {
        this.comments = comments == null ? null : comments.trim();
    }

    public String getMemo1() {
        return memo1;
    }

    public void setMemo1(String memo1) {
        this.memo1 = memo1 == null ? null : memo1.trim();
    }

    public Integer getTypeid() {
        return typeid;
    }

    public void setTypeid(Integer typeid) {
        this.typeid = typeid;
    }

    public String getMemo2() {
        return memo2;
    }

    public void setMemo2(String memo2) {
        this.memo2 = memo2 == null ? null : memo2.trim();
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
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