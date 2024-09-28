package lcw.lcw2_back.auth;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;

public class authTest {
    public static void main(String[] args) {
        Claims claims = Jwts.claims().setSubject("username");
        System.out.println("claims : " + claims);
    }
}
