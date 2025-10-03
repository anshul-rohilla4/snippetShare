package com.example.SnippetShare.repository;

import com.example.SnippetShare.model.Snippet;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SnippetRepo extends JpaRepository<Snippet,Long> {
}
