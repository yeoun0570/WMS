package lcw.lcw2_back.controller;

import lcw.lcw2_back.service.notification.NotificationService;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/user/notice")
@AllArgsConstructor
public class NotificationController {

    private final NotificationService notificationService;

}
