package com.brain.chooeat.controller;

import com.brain.chooeat.model.Chooeat;
import com.brain.chooeat.service.ChooeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ChooeatController {
    @Autowired
    private ChooeatService chooeatService;

    @GetMapping("/chooeat/{accId}")
    public ResponseEntity<Chooeat> getChooeat(@PathVariable Integer accId){
        Chooeat chooeat = chooeatService.getChooeatById(accId);

        if(chooeat != null){
            return  ResponseEntity.status(HttpStatus.OK).body(chooeat);
        }else{
            return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
        }

    }
}
