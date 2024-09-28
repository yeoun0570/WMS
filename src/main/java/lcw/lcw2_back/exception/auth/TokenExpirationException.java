package lcw.lcw2_back.exception.auth;

public class TokenExpirationException extends RuntimeException {
    public TokenExpirationException(String message) {
        super(message);
    }
}
