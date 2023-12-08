package com.hakaton.team1.helloworld.repository;

import com.hakaton.team1.helloworld.models.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends CrudRepository<User, Long> {
}
