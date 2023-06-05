package com.brain.chooeat.dao.impl;

import com.brain.chooeat.dao.ChooeatDao;
import com.brain.chooeat.model.Chooeat;
import com.brain.chooeat.rowmapper.ChooeatRowMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Component;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@Component
public class ChooeatDaoImpl implements ChooeatDao {

    @Autowired
    private NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    @Override
    public Chooeat getChooeatById(Integer accId) {
        String sql = "Select acc_id, acc_acc, acc_pass, acc_name, acc_nickname, acc_phone, acc_mail, acc_add1, acc_add2, acc_add3, acc_birth,acc_pic, acc_text,acc_gender,acc_timestamp ,acc_state,online_status" +
                " From account where acc_id =:accId";

        Map<String, Object> map = new HashMap<>();
        map.put("accId",accId);

        List<Chooeat> chooeatList = namedParameterJdbcTemplate.query(sql, map, new ChooeatRowMapper());

        if(chooeatList.size()>0){
            return chooeatList.get(0);

        }else{

            return null;
        }
    }
}
