package com.hakaton.team1.helloworld.services_impl;

import com.hakaton.team1.helloworld.exceptions.FaqNotFounException;
import com.hakaton.team1.helloworld.models.Faq;
import com.hakaton.team1.helloworld.repository.FaqRepository;
import com.hakaton.team1.helloworld.services.FaqService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class FaqServiceImpl implements FaqService {

    @Autowired
    private FaqRepository faqRepository;

    @Override
    public List<Faq> getAllFaqs() {
        return (List<Faq>) faqRepository.findAll();
    }

    @Override
    public Optional<Faq> getFaqById(Integer id) {
        return faqRepository.findById(id);
    }

    @Override
    public Faq createFaq(Faq faq) {
        return faqRepository.save(faq);
    }

    @Override
    public Faq updateFaq(Integer id, Faq faq) {
        if (faqRepository.existsById(id)) {
            faq.setId(id);
            return faqRepository.save(faq);
        } else {
            throw new FaqNotFounException(id);
        }
    }

    @Override
    public void deleteFaq(Integer id) {
        faqRepository.deleteById(id);
    }
}
