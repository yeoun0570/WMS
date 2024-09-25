package lcw.lcw2_back.domain.notification;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Getter
@Setter
public class Notification {

    String notification_id;
    String user_id;
    Date created_time;
    String notification_title;
    String notification_content;
    boolean checked;
    NotificationType type;

    public Notification(String notification_id,String user_id,String notification_title,String notification_content,NotificationType type){
        this.notification_id = notification_id;
        this.user_id = user_id;
        this.created_time = new Date();
        this.notification_title = notification_title;
        this.notification_content = notification_content;
        this.checked = false;
        this.type = type;
    }
}
