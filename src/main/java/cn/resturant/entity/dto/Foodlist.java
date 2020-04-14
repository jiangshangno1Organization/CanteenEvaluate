package cn.resturant.entity.dto;

public class Foodlist {
    private int id;
    private String name;
    private String url;
    private String morning;
    private String lunch;
    private String dinner;
    private String today;
    private String tommrow;
    private double avgs;

    public Foodlist() {
    }

    public Foodlist(int id, String name, String url, String morning, String lunch, String dinner, String today, String tommrow, double avgs) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.morning = morning;
        this.lunch = lunch;
        this.dinner = dinner;
        this.today = today;
        this.tommrow = tommrow;
        this.avgs = avgs;
    }

    public String getToday() {
        return today;
    }

    public void setToday(String today) {
        this.today = today;
    }

    public String getTommrow() {
        return tommrow;
    }

    public void setTommrow(String tommrow) {
        this.tommrow = tommrow;
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

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }

    public String getMorning() {
        return morning;
    }

    public void setMorning(String morning) {
        this.morning = morning;
    }

    public String getLunch() {
        return lunch;
    }

    public void setLunch(String lunch) {
        this.lunch = lunch;
    }

    public String getDinner() {
        return dinner;
    }

    public void setDinner(String dinner) {
        this.dinner = dinner;
    }

    public double getAvgs() {
        return avgs;
    }

    public void setAvgs(double avgs) {
        this.avgs = avgs;
    }
}
