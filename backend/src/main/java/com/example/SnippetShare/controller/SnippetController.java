package com.example.SnippetShare.controller;

import com.example.SnippetShare.model.Snippet;
import com.example.SnippetShare.service.SnippetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/snippets")
@CrossOrigin(origins = "http://localhost:5173")
public class SnippetController {

    @Autowired
    private SnippetService snippetService;

    @GetMapping("/browse")
    public List<Snippet> getAllSnippets(){
        return snippetService.getAllSnippets();
    }

    @PostMapping("/new")
    public Snippet createSnippet(@RequestBody Snippet snippet){
        return snippetService.createSnippet(snippet);
    }

    @GetMapping("/{id}")
    public Snippet getSnippetById(@PathVariable String id){
        return snippetService.getSnippetById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSnippetById(@PathVariable String id){
        snippetService.delSnippetById(id);
        return ResponseEntity.noContent().build();
    }



}
