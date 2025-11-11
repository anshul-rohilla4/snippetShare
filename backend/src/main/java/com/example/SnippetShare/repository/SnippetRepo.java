package com.example.SnippetShare.repository;

import com.example.SnippetShare.model.Snippet;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SnippetRepo extends MongoRepository<Snippet,String> {
}
