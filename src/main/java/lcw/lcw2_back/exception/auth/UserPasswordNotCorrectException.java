package lcw.lcw2_back.exception.auth;

public class UserPasswordNotCorrectException extends Exception {
    public UserPasswordNotCorrectException(String message) {
        super(message);
    }
}
