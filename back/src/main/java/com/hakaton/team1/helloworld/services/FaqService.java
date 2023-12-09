package com.hakaton.team1.helloworld.services;

import com.hakaton.team1.helloworld.models.Faq;

import java.util.List;
import java.util.Optional;

public interface FaqService {
    List<Faq> getAllFaqs();

    Optional<Faq> getFaqById(Integer id);

    Faq createFaq(Faq faq);

    Faq updateFaq(Integer id, Faq faq);

    void deleteFaq(Integer id);

    Faq getFaqByTitle(String selectedTitle);
}

