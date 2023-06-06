package com.brain.chooeat.service.impl;

import com.brain.chooeat.dao.AccountDao;
import com.brain.chooeat.model.Account;
import com.brain.chooeat.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class AccountServiceImpl implements AccountService {
    @Autowired
    private AccountDao accountDao;

    @Override
    public Account getAccountById(Integer accId) {

        return accountDao.getAccountById(accId);
    }
}
