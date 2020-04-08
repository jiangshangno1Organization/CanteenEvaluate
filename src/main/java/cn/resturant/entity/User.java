package cn.resturant.entity;

public class User {
    private Integer id;

    private String username;

    private String password;

    private Integer role;

    private String memo;

    private String memos;

    private String memoes;

    public User(Integer id, String username, String password, Integer role, String memo, String memos, String memoes) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.role = role;
        this.memo = memo;
        this.memos = memos;
        this.memoes = memoes;
    }

    public User() {
        super();
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username == null ? null : username.trim();
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password == null ? null : password.trim();
    }

    public Integer getRole() {
        return role;
    }

    public void setRole(Integer role) {
        this.role = role;
    }

    public String getMemo() {
        return memo;
    }

    public void setMemo(String memo) {
        this.memo = memo == null ? null : memo.trim();
    }

    public String getMemos() {
        return memos;
    }

    public void setMemos(String memos) {
        this.memos = memos == null ? null : memos.trim();
    }

    public String getMemoes() {
        return memoes;
    }

    public void setMemoes(String memoes) {
        this.memoes = memoes == null ? null : memoes.trim();
    }
}