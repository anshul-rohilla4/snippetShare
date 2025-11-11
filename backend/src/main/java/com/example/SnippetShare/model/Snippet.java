package com.example.SnippetShare.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.ArrayList;
import java.util.List;

@Document(collection = "snippets")
public class Snippet {

    @Id
    private String id;
    private String title;
    private String description;
    private String code;
    private List<String> tags = new ArrayList<>();

    // Constructors
    public Snippet() {
    }

    public Snippet(String title, String description, String code, List<String> tags) {
        this.title = title;
        this.description = description;
        this.code = code;
        this.tags = tags;
    }

    // Getters
    public String getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getDescription() {
        return description;
    }

    public String getCode() {
        return code;
    }

    public List<String> getTags() {
        return tags;
    }

    // Setters
    public void setId(String id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCode(String code) {
        this.code = code;
    }

    public void setTags(List<String> tags) {
        this.tags = tags;
    }

    // toString method for debugging
    @Override
    public String toString() {
        return "Snippet{" +
                "id='" + id + '\'' +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", code='" + code + '\'' +
                ", tags=" + tags +
                '}';
    }
}