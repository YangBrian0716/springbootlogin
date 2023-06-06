package com.brain.chooeat.rowmapper;

import com.brain.chooeat.model.Account;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class AccountRowMapper implements RowMapper<Account> {

    @Override
    public Account mapRow(ResultSet rs, int rowNum) throws SQLException {
        Account account = new Account();
        account.setAccId(rs.getInt("acc_id"));
        account.setAccAcc(rs.getString("acc_acc"));
        account.setAccPass(rs.getString("acc_pass"));
        account.setAccName(rs.getString("acc_name"));
        account.setAccNickname(rs.getString("acc_nickname"));
        account.setAccPhone(rs.getString("acc_phone"));
        account.setAccMail(rs.getString("acc_mail"));
        account.setAccAdd1(rs.getString("acc_add1"));
        account.setAccAdd2(rs.getString("acc_add2"));
        account.setAccAdd3(rs.getString("acc_add3"));
        account.setAccBirth(rs.getDate("acc_birth"));
        account.setAccGender(rs.getInt("acc_gender"));
        account.setAccPic(rs.getBytes("acc_pic"));
        account.setAccText(rs.getString("acc_text"));
        account.setAccTimestamp(rs.getDate("acc_timestamp"));
        account.setAccState(rs.getInt("acc_state"));
        account.setOnlineStatus(rs.getInt("online_status"));


        return account;

    }
}
