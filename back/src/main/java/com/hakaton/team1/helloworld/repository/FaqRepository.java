package com.hakaton.team1.helloworld.repository;

import com.hakaton.team1.helloworld.models.Faq;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FaqRepository extends CrudRepository<Faq, Integer> {
}
