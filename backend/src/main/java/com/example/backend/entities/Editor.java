package com.example.backend.entities;

public class Editor extends Person {
    private String experience_level;
    private int salary;

    public Editor() {
        super();
    }

    public Editor(long ID,
                  String full_name,
                  String email,
                  String photo,
                  String password,
                  String nickname,
                  String phone,
                  boolean is_confirmed,
                  String reg_date,
                  String birth_date,
                  String experience_level,
                  int salary) {
        super(ID, full_name, email, photo, password, nickname, phone, is_confirmed, reg_date, birth_date);
        this.experience_level = experience_level;
        this.salary = salary;
    }

    public String getExperience_level() {
        return experience_level;
    }

    public void setExperience_level(String experience_level) {
        this.experience_level = experience_level;
    }

    public int getSalary() {
        return salary;
    }

    public void setSalary(int salary) {
        this.salary = salary;
    }
}
