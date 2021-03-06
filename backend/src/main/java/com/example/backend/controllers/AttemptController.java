package com.example.backend.controllers;

import com.example.backend.dto.AttemptDto;
import com.example.backend.entities.Attempt;
import com.example.backend.entities.TestCase;
import com.example.backend.services.AttemptService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/attempt")
public class AttemptController {

    @Autowired
    AttemptService attemptService;

    @PostMapping(path = "/make/attempt")
    public void makeAttempt(@RequestBody AttemptDto attemptDto) {
        attemptService.makeAttempt(attemptDto);
    }

    @GetMapping("/{user_id}/{question_id}")
    public List<Attempt> getUserOwnAttempts(@PathVariable String user_id, @PathVariable String question_id) {
        return attemptService.getUserOwnAttempts(user_id, question_id);
    }

    @GetMapping("/{question_id}/all")
    public List<Attempt> getAllAttemptsOnQuestion(@PathVariable String question_id) {
        return attemptService.getAllAttemptsOnQuestion(question_id);
    }

    @GetMapping("/{user_id}/{question_id}/is/solved")
    public boolean is_solved_correctly(@PathVariable String user_id, @PathVariable String question_id) {
        return attemptService.is_solved_correctly(user_id, question_id);
    }

    @GetMapping("/get/{question_id}/{user_id}/{attempt_id}")
    public Attempt findAttemptById(@PathVariable String question_id, @PathVariable String user_id, @PathVariable String attempt_id) {
        return attemptService.findAttemptById(question_id, user_id, attempt_id);
    }
}
