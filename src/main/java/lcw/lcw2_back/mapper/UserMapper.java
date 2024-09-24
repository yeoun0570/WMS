package lcw.lcw2_back.mapper;


import lcw.lcw2_back.vo.user.UserVO;
import org.apache.ibatis.annotations.*;

import java.util.List;
import java.util.Optional;

@Mapper
public interface UserMapper {

    @Insert("INSERT INTO user (user_id, storage_id, user_pw, user_position, user_name, user_birth, " +
            "user_email, user_contact, user_status, user_address, created_time, modified_time) " +
            "VALUES (#{userId}, #{storageId}, #{userPw}, #{userPosition}, #{userName}, #{userBirth}, " +
            "#{userEmail}, #{userContact}, #{userStatus}, #{userAddress}, #{regDate}, #{modDate})")
    boolean save(UserVO user);

    @Select("SELECT * FROM user WHERE user_status = #{userStatus} ORDER BY created_time DESC")
    List<UserVO> findAllByStatus (Byte userStatus);

    @Select("SELECT * FROM user WHERE user_id = #{id}")
    Optional<UserVO> findById(String userId);

    @Select("SELECT * FROM user WHERE user_id = #{userId}")
    Optional<UserVO> findAllById(String userId);

    @Update("UPDATE user SET user_status = #{userStatus} WHERE user_id = #{userId}")
    boolean updateStatus(String userId, Byte userStatus);

    @Update("UPDATE user SET storage_id = #{storageId}, user_pw = #{userPw}, user_position = #{userPosition}, " +
            "user_name = #{userName}, user_birth = #{userBirth}, user_email = #{userEmail}, " +
            "user_contact = #{userContact}, user_status = #{userStatus}, user_address = #{userAddress}, " +
            "created_time = #{regDate}, modified_time = #{modDate} WHERE user_id = #{userId}")
    boolean update(UserVO userVO);

}


