package cn.resturant.entity.dto;

public class FoodSelectDto {
    private int id;//食物id
    private int typeid;//类型：早餐为1，中餐为二
    private int isadd;//0为删除，1为增加
    private int leixing;//1为早中晚，2为今明
    public FoodSelectDto() {
    }

    public FoodSelectDto(int id, int typeid, int isadd, int leixing) {
        this.id = id;
        this.typeid = typeid;
        this.isadd = isadd;
        this.leixing = leixing;
    }

    public int getLeixing() {
        return leixing;
    }

    public void setLeixing(int leixing) {
        this.leixing = leixing;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getTypeid() {
        return typeid;
    }

    public void setTypeid(int typeid) {
        this.typeid = typeid;
    }

    public int getIsadd() {
        return isadd;
    }

    public void setIsadd(int isadd) {
        this.isadd = isadd;
    }
}
