package com.brain.chooeat.rowmapper;

import com.brain.chooeat.model.Chooeat;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ChooeatRowMapper implements RowMapper<Chooeat> {

    @Override
    public Chooeat mapRow(ResultSet rs, int rowNum) throws SQLException {
        Chooeat chooeat = new Chooeat();
        chooeat.setAccId(rs.getInt("acc_id"));
        chooeat.setAccAcc(rs.getString("acc_acc"));
        chooeat.setAccPass(rs.getString("acc_pass"));
        chooeat.setAccName(rs.getString("acc_name"));
        chooeat.setAccNickname(rs.getString("acc_nickname"));
        chooeat.setAccPhone(rs.getString("acc_phone"));
        chooeat.setAccMail(rs.getString("acc_mail"));
        chooeat.setAccAdd1(rs.getString("acc_add1"));
        chooeat.setAccAdd2(rs.getString("acc_add2"));
        chooeat.setAccAdd3(rs.getString("acc_add3"));
        chooeat.setAccBirth(rs.getDate("acc_birth"));
        chooeat.setAccGender(rs.getInt("acc_gender"));
        chooeat.setAccPic(rs.getBytes("acc_pic"));
        chooeat.setAccText(rs.getString("acc_text"));
        chooeat.setAccTimestamp(rs.getDate("acc_timestamp"));
        chooeat.setAccState(rs.getInt("acc_state"));
        chooeat.setOnlineStatus(rs.getInt("online_status"));


        return chooeat;

    }
}
