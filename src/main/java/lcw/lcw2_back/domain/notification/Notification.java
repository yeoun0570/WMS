package lcw.lcw2_back.domain.notification;

import lombok.Data;

import java.util.Date;

@Data
public class Notification {

    int notification_id;
    int user_id;
    Date created_time;
    String notification_title;
    String notification_content;
    boolean checked;
    NotificationType type;
}
