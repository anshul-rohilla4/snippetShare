//package com.example.SnippetShare.config;
//
//import com.example.SnippetShare.model.Snippet;
//import com.example.SnippetShare.repository.SnippetRepo;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.boot.CommandLineRunner;
//import org.springframework.stereotype.Component;
//
//import java.util.List;
//
//@Component
//public class DataSeeder implements CommandLineRunner {
//
//    @Autowired
//    private SnippetRepo snippetRepo;
//
//    @Override
//    public void run(String... args) throws Exception {
//
//        if (snippetRepo.count() == 0) {
//            System.out.println("No Snippets found, seeding database...");
//
//            Snippet s1 = new Snippet();
//            s1.setTitle("React State Hook");
//            s1.setDescription("A basic example of using the useState hook in a React functional component.");
//            s1.setCode("const [count, setCount] = useState(0);");
//            s1.setTags(List.of("react", "javascript", "hook", "useState"));
//
//            Snippet s2 = new Snippet();
//            s2.setTitle("Java For-Each Loop");
//            s2.setDescription("How to iterate over a list of strings using a for-each loop in Java.");
//            s2.setCode("List<String> names = Arrays.asList(\"Alice\", \"Bob\", \"Charlie\");\nfor (String name : names) {\n  System.out.println(name);\n}");
//            s2.setTags(List.of("java", "loop", "collection", "core-java"));
//
//            Snippet s3 = new Snippet();
//            s3.setTitle("CSS Flexbox Centering");
//            s3.setDescription("A simple CSS snippet to center a div both horizontally and vertically using Flexbox.");
//            s3.setCode(".container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n}");
//            s3.setTags(List.of("css", "flexbox", "layout", "centering"));
//
//            Snippet s4 = new Snippet();
//            s4.setTitle("Python List Comprehension");
//            s4.setDescription("Create a new list by transforming elements from an existing list.");
//            s4.setCode("squares = [x**2 for x in range(10)]");
//            s4.setTags(List.of("python", "list-comprehension", "functional"));
//
//            Snippet s5 = new Snippet();
//            s5.setTitle("SQL Inner Join");
//            s5.setDescription("Join two tables based on a common column.");
//            s5.setCode("SELECT orders.id, customers.name\nFROM orders\nINNER JOIN customers ON orders.customer_id = customers.id;");
//            s5.setTags(List.of("sql", "join", "database"));
//
//            snippetRepo.saveAll(List.of(s1, s2, s3, s4, s5));
//
//            System.out.println("Database seeded with " + snippetRepo.count() + " snippets.");
//        } else {
//            System.out.println("Database already contains " + snippetRepo.count() + " snippets. No seeding required.");
//        }
//    }
//}