package com.brain.chooeat.service.impl;

import com.brain.chooeat.dao.ChooeatDao;
import com.brain.chooeat.model.Chooeat;
import com.brain.chooeat.service.ChooeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class ChooeatServiceImpl implements ChooeatService {
    @Autowired
    private ChooeatDao chooeatDao;

    @Override
    public Chooeat getChooeatById(Integer accId) {

        return chooeatDao.getChooeatById(accId);
    }
}
