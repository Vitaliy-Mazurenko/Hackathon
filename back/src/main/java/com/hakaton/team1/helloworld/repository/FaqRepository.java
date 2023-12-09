package com.hakaton.team1.helloworld.repository;

import com.hakaton.team1.helloworld.models.Faq;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FaqRepository extends CrudRepository<Faq, Integer> {
    List<Faq> findFaqsByTitle(String selectedTitle);

}
