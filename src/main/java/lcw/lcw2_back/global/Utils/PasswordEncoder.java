package lcw.lcw2_back.global.Utils;

import lcw.lcw2_back.auth.JwtProperties;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Base64;

@Component
public class PasswordEncoder {

    private final String passwordSalt;

    public PasswordEncoder(@Value("${jwt.sign_in.password.salt}")String passwordSalt) {
        this.passwordSalt = passwordSalt;
    }

    public String getSHA256EncryptedPassword(String plainPassword){
        String saltedPassword = this.passwordSalt+plainPassword;
        String encryptedPassword = null;
        MessageDigest md = null;

        try{
        md = MessageDigest.getInstance("SHA-256");
        byte[] bytes = md.digest(saltedPassword.getBytes(StandardCharsets.UTF_8));
        encryptedPassword = Base64.getEncoder().encodeToString(bytes);

        }catch (NoSuchAlgorithmException e){
            throw new IllegalArgumentException();
        }
        return encryptedPassword;
    }
    public boolean matches(String encryptedStr1,String encryptedStr2){
        return encryptedStr1.equals(encryptedStr2);
    }
}
