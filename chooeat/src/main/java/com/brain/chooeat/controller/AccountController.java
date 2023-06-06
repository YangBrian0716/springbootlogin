package com.brain.chooeat.controller;

import com.brain.chooeat.model.Account;
import com.brain.chooeat.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AccountController {
    @Autowired
    private AccountService accountService;

    @GetMapping("/account/{accId}")
    public ResponseEntity<Account> getAccount(@PathVariable Integer accId){
        Account account = accountService.getAccountById(accId);

        if(account != null){
            return  ResponseEntity.status(HttpStatus.OK).body(account);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }
}
