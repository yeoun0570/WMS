package lcw.lcw2_back.exception.auth;

public class UserStatusNotPermissionException extends RuntimeException {
    public UserStatusNotPermissionException(String message) {
        super(message);
    }
}
