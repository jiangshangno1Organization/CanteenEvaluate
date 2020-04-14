package cn.resturant.entity.dto;

public class EvaluateDto {
    private int id;
    private String memo1;
    private String memo2;
    private String memo3;
    private String memo4;
    private String foodcomments;
    private String cooksmemo1;
    private String cooksmemo2;
    private String sellercomments;
    public EvaluateDto() {
    }

    public EvaluateDto(int id, String memo1, String memo2, String memo3, String memo4, String foodcomments, String cooksmemo1, String cooksmemo2, String sellercomments) {
        this.id = id;
        this.memo1 = memo1;
        this.memo2 = memo2;
        this.memo3 = memo3;
        this.memo4 = memo4;
        this.foodcomments = foodcomments;
        this.cooksmemo1 = cooksmemo1;
        this.cooksmemo2 = cooksmemo2;
        this.sellercomments = sellercomments;
    }

    public String getSellercomments() {
        return sellercomments;
    }

    public void setSellercomments(String sellercomments) {
        this.sellercomments = sellercomments;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getMemo1() {
        return memo1;
    }

    public void setMemo1(String memo1) {
        this.memo1 = memo1;
    }

    public String getMemo2() {
        return memo2;
    }

    public void setMemo2(String memo2) {
        this.memo2 = memo2;
    }

    public String getMemo3() {
        return memo3;
    }

    public void setMemo3(String memo3) {
        this.memo3 = memo3;
    }

    public String getMemo4() {
        return memo4;
    }

    public void setMemo4(String memo4) {
        this.memo4 = memo4;
    }

    public String getFoodcomments() {
        return foodcomments;
    }

    public void setFoodcomments(String foodcomments) {
        this.foodcomments = foodcomments;
    }

    public String getCooksmemo1() {
        return cooksmemo1;
    }

    public void setCooksmemo1(String cooksmemo1) {
        this.cooksmemo1 = cooksmemo1;
    }

    public String getCooksmemo2() {
        return cooksmemo2;
    }

    public void setCooksmemo2(String cooksmemo2) {
        this.cooksmemo2 = cooksmemo2;
    }
}
