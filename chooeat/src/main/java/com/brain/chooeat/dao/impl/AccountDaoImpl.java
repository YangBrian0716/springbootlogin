package com.brain.chooeat.dao.impl;

import com.brain.chooeat.dao.AccountDao;
import com.brain.chooeat.model.Account;
import com.brain.chooeat.rowmapper.AccountRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Component
public class AccountDaoImpl implements AccountDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public Account getAccountById(Integer accId) {
        String sql = "Select acc_id, acc_acc, acc_pass, acc_name, acc_nickname, acc_phone, acc_mail, acc_add1, acc_add2, acc_add3, acc_birth,acc_pic, acc_text,acc_gender,acc_timestamp ,acc_state,online_status" +
                " From account where acc_id =:accId";

        Map<String, Object> map = new HashMap<>();
        map.put("accId",accId);

        List<Account> accountList = namedParameterJdbcTemplate.query(sql, map, new AccountRowMapper());

        if(accountList.size()>0){
            return accountList.get(0);

        }else{

            return null;
        }
    }
}
