package com.example.SnippetShare.service;

import com.example.SnippetShare.exception.ResourceNotFoundException;
import com.example.SnippetShare.model.Snippet;
import com.example.SnippetShare.repository.SnippetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SnippetService {

    @Autowired
    private SnippetRepo snippetRepo;

    public Snippet createSnippet(Snippet snippet){
        return snippetRepo.save(snippet);
    }

    public List<Snippet> getAllSnippets(){
        return snippetRepo.findAll();
    }

    public Snippet getSnippetById(String id){
        return snippetRepo.findById(id)
                .orElseThrow(()->new RuntimeException("Snippet not found, id: "+id));
    }

    public void delSnippetById(String id){
        if( !snippetRepo.existsById(id)){
            throw new ResourceNotFoundException("Snippet not found with id: "+id );
        }
        snippetRepo.deleteById(id);
    }

}
