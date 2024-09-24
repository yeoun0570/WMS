package lcw.lcw2_back.controller;

import jakarta.validation.Valid;
import lcw.lcw2_back.dto.user.UserDTO;
import lcw.lcw2_back.service.user.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequiredArgsConstructor
@Valid
public class JoinController {
    private final UserService userService;

    @PostMapping("/api/joinProc")
    public ResponseEntity<String> joinProcess(@RequestBody @Valid UserDTO userDTO) { //회원가입 로직 프로세스
        boolean result = userService.joinProcess(userDTO);
        return result ? ResponseEntity.ok("Succcess joinProcess") : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed joinProcess");
    }

    @PostMapping("/api/check-userid")
    public ResponseEntity<Map<String, Boolean>> checkUserId(@RequestBody @Valid Map<String, String> request) {
        boolean userExists = (userService.findById(request.get("userId")) != null);
        Map<String, Boolean> response = new HashMap<>();
        response.put("check-userid", userExists);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/api/member-status/")
    public ResponseEntity<List<UserDTO>> findByStatus(@RequestBody String status) {
        List<UserDTO> users = userService.findByStatus(Byte.parseByte(status));
        return ResponseEntity.ok(users);
    }

    @PutMapping("/update")
    public ResponseEntity<String> update(@RequestBody UserDTO dto) {
        boolean updated = userService.update(dto);
        return updated ? ResponseEntity.ok("User updated successfully") : ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to update user");
    }

    @PostMapping("/update-status") //@RequestBody에서 byte로 바로 받아도 되는거야??
    public ResponseEntity<String> updateStatus(@RequestBody List<String> userIds, @RequestBody byte status) {
        userService.updateStatus(userIds, status);
        return ResponseEntity.ok("User statuses updated successfully");
    }
}


/*

import React, { useState, useEffect } from 'react';
import axios from 'axios';  // Axios를 사용해 서버와 통신

function Signup() {
  const [username, setUsername] = useState('');  // 입력된 아이디 값
  const [isUsernameTaken, setIsUsernameTaken] = useState(false);  // 중복 여부
  const [isChecking, setIsChecking] = useState(false);  // 중복 확인 중인지

  // 아이디 입력 시 발생하는 이벤트 처리
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  // 아이디 중복 확인 함수
  useEffect(() => {
    const checkUsername = async () => {
      if (username.trim() === '') return;  // 빈 문자열 처리

      setIsChecking(true);  // 중복 확인 시작
      try {
        const response = await axios.post('/api/check-username', { username });
        setIsUsernameTaken(response.data.isTaken);
      } catch (error) {
        console.error('Error checking username', error);
      } finally {
        setIsChecking(false);  // 중복 확인 완료
      }
    };

    // 500ms debounce (타이핑이 끝난 후 500ms 동안 입력이 없으면 중복 확인 시작)
    const delayDebounceFn = setTimeout(() => {
      if (username) {
        checkUsername();
      }
    }, 500);

    // 이전 타이핑 시 생성된 타이머를 정리 (입력이 있을 때 중복 확인을 취소)
    return () => clearTimeout(delayDebounceFn);
  }, [username]);

  return (
    <div>
      <h2>Sign Up</h2>
      <form>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
          {isChecking && <p>Checking...</p>}
          {!isChecking && isUsernameTaken && (
            <p style={{ color: 'red' }}>This username is already taken</p>
          )}
        </div>

      </form>
    </div>
        );
        }

export default Signup;

*/
